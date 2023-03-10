/* eslint-disable */
import React, {useMemo} from 'react';
import cx from 'classnames';
import {
  useGlobalFilter,
  useGridLayout,
  usePagination,
  useTable,
} from 'react-table';

import {NextLink} from './ui/NextLink';
import {PageSizeSelect} from './PageSize';
import {Searchfield} from './ui/Searchfield';

type Data = {
  date: {
    day: string;
    time: string;
  };
  product: {
    title: string;
    subTitle: string;
  };
  status: string;
  customer: string;
  amount: {
    inCoin: string;
    inUSD: string;
  };
  action: string;
};

const Product = ({row}: {row: any}) => {
  return (
    <div className="flex flex-col text-right space-x-2">
      <span>{row.original.product.title}</span>
      <span className="text-sm">{row.original.product.subTitle}</span>
    </div>
  );
};

const Status = (row: any) => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-1"
      >
        <circle
          cx="4"
          cy="4"
          r="4"
          fill="#229E02"
          className={cx({
            'fill-red-500': row.value === 'Rejected',
            'fill-[#229E02]': row.value === 'Completed',
            'fill-orange-500': row.value === 'Overpaid',
          })}
        />
      </svg>
      <span>{row.value}</span>
    </div>
  );
};

const Date = ({row}: {row: any}) => {
  return (
    <div className="flex md:flex-col space-x-2 space-y-1  justify-start">
      <div className="flex items-center space-x-2">{row.original.date.day}</div>
      <span className="text-primary1 text-sm">{row.original.date.time}</span>
    </div>
  );
};

const Amount = ({row}: {row: any}) => {
  return (
    <div className="flex flex-col text-right">
      <span>{row.original.amount.inCoin}</span>
      <span className="text-gray-700 text-sm">{row.original.amount.inUSD}</span>
    </div>
  );
};

const Action = () => {
  return (
    <div className="space-x-2 text-center">
      <NextLink href="#" className="text-primary1">
        refund
      </NextLink>
    </div>
  );
};

type PaymentTableProps = {
  data: any;
};

export const PaymentTable = ({data}: PaymentTableProps) => {
  const memoizedData = React.useMemo((): Data[] => [...data], [data]);
  const memoizedColumns = useMemo(
    () => [
      {
        Header: 'Date',
        accessor: (row: any) => row.date.day,
        Cell: Date,
      },
      {
        Header: 'Product',
        accessor: (row: any) => row.product.title,
        Cell: Product,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: Status,
      },
      {
        Header: 'Customer',
        accessor: 'customer',
      },
      {
        Header: 'Amount',
        sortType: 'basic',
        accessor: (row: any) => row.amount.inCoin,
        Cell: Amount,
      },
      {
        Header: 'Action',
        accessor: 'action',
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
      autoResetPage: false,
      initialState: {
        pageIndex: 1,
        pageSize: 6,
      },
    },
    useGridLayout,
    useGlobalFilter,
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
    // @ts-ignore
    state: {pageIndex, globalFilter},
    setGlobalFilter,
  } = tableInstance;
  return (
    <>
      <div className="grid min-h-[130px] w-full items-center border border-gray-500/30 p-3 dark:border-white sm:flex-row">
        <div className="mx-auto w-[80%]">
          <Searchfield
            value={globalFilter || ''}
            onChange={(e) => {
              gotoPage(0);
              setGlobalFilter(e.target.value || undefined);
            }}
          />
        </div>
      </div>
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
              <thead className="bg-transparent hidden md:block shrink-0 border">
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="grid gap-1 grid-cols-6 shrink-0 items-center h-[60px]"
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
              <tbody
                {...getTableBodyProps()}
                className="grid shrink-0 space-y-6 mt-5"
              >
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      className="md:grid flex justify-between md:grid-cols-1 py-3 shrink-0 border items-center"
                    >
                      <div className="flex md:hidden flex-col gap-3">
                        {headerGroups.map((headerGroup) =>
                          headerGroup.headers.map((column, i) => (
                            <td
                              key={i}
                              className={cx(
                                'px-2 sm:px-6 py-3 font-semibold text-xs text-gray-800 dark:text-white uppercase tracking-wider'
                              )}
                            >
                              {column.render('Header')}
                            </td>
                          ))
                        )}
                      </div>
                      <div className="grid justify-items-end md:grid-cols-6 gap-4">
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
                      </div>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 items-center flex flex-col sm:flex-row gap-3 justify-between">
        <div className="flex items-center space-x-3">
          <PageSizeSelect setPageSize={setPageSize} />
          <span className="text-sm dark:text-gray-700">
            Showing Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
        </div>
        <div className='flex items-center space-x-2'>
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
            {pageCount !== 1 && pageCount !== 0 && (
              <button
                onClick={() => gotoPage(1)}
                className="border border-[#DEE2E6] text-primary1 py-2 w-[40px] active:bg-primary1/5"
              >
                2
              </button>
            )}
            {pageCount !== 2 && pageCount !== 1 && pageCount !== 0 && (
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
              className="border border-[#DEE2E6] rounded-r-md text-primary1 py-2 w-[70px] active:bg-primary1/5 disabled:border-gray-200 disabled:text-gray-400 disabled:active:bg-primary1/0"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
