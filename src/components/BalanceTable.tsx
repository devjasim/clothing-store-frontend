/* eslint-disable */
import React, {useMemo, useState} from 'react';
import {usePagination, useTable} from 'react-table';

import {paymentData} from '~/constants/tables';

import {NextLink} from './ui/NextLink';

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
    <div>
      <span>{row.value.title}</span>
      <span>{row.value.icon}</span>
    </div>
  );
};

const Col2 = (row: any) => {
  return (
    <div>
      <span>{row.value.priceInCoin}</span>
      <span>{row.value.priceInDollar}</span>
    </div>
  );
};

const Action = () => {
  return (
    <div>
      <NextLink href="#">WithDraw</NextLink>
    </div>
  );
};

export const BalanceTable = () => {
  const [datalist] = useState(paymentData);
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
        pageSize: 4,
      },
    },
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
    state: {pageIndex, pageSize},
  } = tableInstance;
  return (
    <div>
      <code className="whitespace-pre">
        {JSON.stringify(
          {
            pageIndex,
            pageSize,
            pageCount,
            canNextPage,
            canPreviousPage,
          },
          null,
          2
        )}
      </code>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageIndx = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageIndx);
            }}
            style={{width: '100px'}}
          />
        </span>{' '}
      </div>
    </div>
  );
};
