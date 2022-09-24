import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './Column';

export default function Customers( {value} )  {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => MOCK_DATA, []);
    
    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage } =
    useTable({
        columns,
        data,
    }, usePagination);;

    return (
        <div>
            <div className='flex flex-col'>
                <div className='bg-gray-100'>
                    <div className='py-8 align-middle inline-block min-w-full px-5 md:px-10 lg:px-20'>
                        <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50 mb-4">
                                    {headerGroups.map((headerGroup) => (
                                    <tr {...headerGroup.getHeaderGroupProps()} className='mb-4'>
                                        {headerGroup.headers.map((column) => (
                                            <th {...column.getHeaderProps()} className="mb-4 px-6 py-3 text-xs text-left font-normal text-gray-500 uppercase tracking-wider">
                                                {column.render("Header")}
                                            </th>
                                        ))}
                                    </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()} className='divide-y divide-gray-200'>
                                    {page.map((row) => {
                                    prepareRow(row);
                                    return (
                                        <tr {...row.getRowProps()}  className="bg-white space-y-2 shadow-lg even:bg-gray-100">
                                            {row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()} className="space-y-2 px-6 py-4 whitespace-nowrap">{cell.render("Cell")}</td>;
                                            })}
                                        </tr>
                                    );
                                    })}
                                </tbody>
                            </table>
                            <div className="text-center my-4">
                                <button onClick={()=>previousPage()} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    Previous
                                </button>
                                <button onClick={()=>nextPage()} className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
