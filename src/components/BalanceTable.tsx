/* eslint-disable */
import React, {useMemo, useState} from 'react';
import cx from 'classnames';
import {useGridLayout, usePagination, useTable} from 'react-table';

import {balanceData} from '~/constants/tables';

import {NextLink} from './ui/NextLink';
import {Alert} from '~/constants/icons';
import {PageSizeSelect} from './PageSize';

type Data = {
  col1: {
    title: string;
    icon: JSX.Element;
  };
  col2: {
    priceInCoin: string;
    priceInDollar: string;
  };
};

const Col1 = (row: any) => {
  return (
    <div className="flex items-center space-x-2">
      <span>{row.value.icon}</span>
      <span>{row.value.title}</span>
    </div>
  );
};

const Col2 = (row: any) => {
  return (
    <div className="flex flex-col justify-start">
      <div className="flex  items-center space-x-2">
        <Alert />
        <span className="ml-2">{row.value.priceInCoin}</span>
      </div>
      <span className="text-primary1 text-sm">{row.value.priceInDollar}</span>
    </div>
  );
};

const Action = () => {
  return (
    <div className="flex items-center space-x-2">
      <NextLink href="#" className="flex items-center space-x-2">
        <span>WithDraw</span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-2"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.22363 4.51105C3.22363 3.78796 3.80981 3.20178 4.5329 3.20178H8.64776C8.95766 3.20178 9.20888 3.453 9.20888 3.7629C9.20888 4.07279 8.95766 4.32402 8.64776 4.32402H4.5329C4.42961 4.32402 4.34587 4.40776 4.34587 4.51105V13.4889C4.34587 13.5922 4.42961 13.676 4.5329 13.676H13.5108C13.6141 13.676 13.6978 13.5922 13.6978 13.4889V9.37406C13.6978 9.06417 13.949 8.81295 14.2589 8.81295C14.5688 8.81295 14.82 9.06417 14.82 9.37406V13.4889C14.82 14.212 14.2339 14.7982 13.5108 14.7982H4.5329C3.80981 14.7982 3.22363 14.212 3.22363 13.4889V4.51105ZM10.3311 3.7629C10.3311 3.453 10.5823 3.20178 10.8922 3.20178H14.2589C14.5688 3.20178 14.82 3.453 14.82 3.7629V7.1296C14.82 7.43949 14.5688 7.69071 14.2589 7.69071C13.949 7.69071 13.6978 7.43949 13.6978 7.1296V5.11755L7.9223 10.8931C7.70317 11.1122 7.34789 11.1122 7.12876 10.8931C6.90963 10.6739 6.90963 10.3187 7.12876 10.0995L12.9043 4.32402H10.8922C10.5823 4.32402 10.3311 4.07279 10.3311 3.7629Z"
            fill="#348888"
          />
        </svg>
      </NextLink>
    </div>
  );
};

export const BalanceTable = () => {
  const [datalist] = useState(balanceData);
  const memoizedData = React.useMemo((): Data[] => [...datalist], [datalist]);
  const memoizedColumns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'col1',
        Cell: Col1,
      },
      {
        Header: 'Balance',
        accessor: 'col2',
        Cell: Col2,
      },
      {
        Header: 'Action',
        Cell: Action,
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      // @ts-ignore
      columns: memoizedColumns,
      data: memoizedData,
      initialState: {
        pageIndex: 1,
        pageSize: 6,
      },
    },
    useGridLayout,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {pageIndex},
  } = tableInstance;

  return (
    <div className="mt-2 min-h-screen flex flex-col">
      <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="">
            <table
              {...getTableProps({
                style: {
                  gridTemplateColumns: '1fr',
                },
              })}
            >
              <thead className="bg-transparent  border">
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="grid gap-1 grid-cols-3 md:grid-cols-[20%,1fr,20%] items-center h-[60px]"
                  >
                    {headerGroup.headers.map((column, i) => (
                      <th
                        {...column.getHeaderProps()}
                        className={cx(
                          'px-2 sm:px-6 py-3 font-semibold text-xs text-gray-800 dark:text-white uppercase tracking-wider',
                          {
                            'text-left': i === 0,
                            'text-right': i === 1 || i === 2,
                          }
                        )}
                      >
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()} className="grid space-y-6 mt-5">
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="grid grid-cols-3 md:grid-cols-[20%,1fr,20%] border h-[60px] items-center"
                    >
                      {row.cells.map((cell, i) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            className={cx(
                              'px-2 sm:px-6 py-1 text-sm sm:text-[16px] whitespace-nowrap',
                              {
                                'justify-self-end text-right':
                                  i === 1 || i === 2,
                              }
                            )}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 items-center flex flex-col sm:flex-row gap-3 justify-between">
        <div className="flex items-center space-x-2">
          <PageSizeSelect setPageSize={setPageSize} />
          <span className="text-sm dark:text-gray-700">
            Showing Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </div>
        <div className="flex">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="border border-[#DEE2E6] rounded-l-md text-primary1 py-2 w-[70px] active:bg-primary1/5 disabled:border-gray-200 disabled:text-gray-400 disabled:active:bg-primary1/0"
          >
            Prev
          </button>
          <button
            onClick={() => gotoPage(0)}
            className="border border-[#DEE2E6] text-primary1 py-2 w-[40px] active:bg-primary1/5"
          >
            1
          </button>
          <button
            onClick={() => gotoPage(1)}
            className="border border-[#DEE2E6] text-primary1 py-2 w-[40px] active:bg-primary1/5"
          >
            2
          </button>
          {pageCount !== 2 && (
            <button
              onClick={() => gotoPage(pageCount - 1)}
              className="border border-[#DEE2E6] text-primary1 py-2 w-[40px] active:bg-primary1/5"
            >
              {pageCount}
            </button>
          )}
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="border border-[#DEE2E6] text-primary1 rounded-r-md py-2 w-[70px] active:bg-primary1/5 disabled:border-gray-200 disabled:text-gray-400 disabled:active:bg-primary1/0"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
