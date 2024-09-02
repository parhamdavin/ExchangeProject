"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SearchBox from "./SearchBox";
import GetData from "../utils/GetData";
import debounce from "lodash.debounce";
import { DataTablesType } from "../types/DataTableTypes";

const fetchData = async (): Promise<DataTablesType[]> => {
  const result: DataTablesType[] = await GetData();
  return result;
};

const Table: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const itemsPerPage = 5;

  const { data, isLoading, error } = useQuery<DataTablesType[]>({
    queryKey: ["data"],
    queryFn: fetchData,
    staleTime: 5 * 60 * 1000,
  });

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
    }, 5000),
    []
  );

  const handleSearchChange = (term: string) => {
    debouncedSearch(term);
  };

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (item) =>
        item.fa_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.en_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const currentItems = useMemo(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredData.slice(indexOfFirstItem, indexOfLastItem);
  }, [filteredData, currentPage, itemsPerPage]);

  const pageNumbers = useMemo(() => {
    const totalItems = filteredData.length;
    const pages = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pages.push(i);
    }
    return pages;
  }, [filteredData.length, itemsPerPage]);

  const toggleRowExpansion = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  if (isLoading)   return (
      <div className="flex justify-center items-center h-screen">
        <iframe 
          src="https://giphy.com/embed/l3nWhI38IWDofyDrW" 
          width="480" 
          height="480" 
          style={{ border: 'none' }} 
          frameBorder="0" 
          className="giphy-embed" 
          allowFullScreen
        ></iframe>
      </div>
    );
  if (error) return <div>An error occurred: {(error as Error).message}</div>;

  return (
    <div className="container mx-auto p-5">
     <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">
    لیست قیمت لحظه‌ای ارزهای دیجیتال
      </h1>
      <div className="overflow-x-auto">
        <div className="shadow-lg rounded-lg p-2 bg-white max-w-screen-lg mx-auto">
          <table className="min-w-full bg-white text-base border-collapse">
            <thead className="bg-slate-200 text-gray-700 rounded-md">
              <tr>
                <th className="p-4 border-b border-gray-200">نام رمز ارز</th>
                <th className="p-4 border-b border-gray-200">ارزش دلاری</th>
                <th className="p-4 border-b border-gray-200">تغییر روزانه</th>
                <th className="p-4 border-b border-gray-200 hidden md:table-cell">
                  خرید از والت
                </th>
                <th className="p-4 border-b border-gray-200 hidden md:table-cell">
                  فروش به والت
                </th>
                <th className="p-4 border-b border-gray-200 hidden md:table-cell">
                  <SearchBox onSearch={handleSearchChange} />
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    onClick={() => toggleRowExpansion(item.id.toString())}
                  >
                    <td className="p-4 text-center text-lg">
                      <div className="flex items-center space-x-2">
                        <Image
                          src={item.icon}
                          width={40}
                          height={40}
                          alt={item.en_name}
                          className="inline-block"
                        />
                        <div className="flex flex-col text-center">
                          <span className="text-lg font-bold">
                            {item.fa_name}
                          </span>
                          <span className="text-sm text-gray-600">
                            {item.en_name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center text-lg">{item.price}</td>
                    <td className="p-4 text-center text-lg">
                      <span
                        className={
                          item.daily_change_percent.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {item.daily_change_percent}
                      </span>
                    </td>
                    <td className="p-4 text-center text-lg hidden md:table-cell">
                      {item.buy_irt_price.toLocaleString()}
                    </td>
                    <td className="p-4 text-center text-lg hidden md:table-cell">
                      {item.sell_irt_price}
                    </td>
                    <td className="p-4 text-center hidden md:table-cell">
                      <button className="bg-blue-600 text-white py-2 px-11 rounded-lg hover:bg-blue-800 transition-colors duration-200">
                        معامله
                      </button>
                    </td>
                  </tr>
                  {expandedRow === item.id.toString() && (
                    <tr className="bg-white md:hidden">
                      <td colSpan={3} className="p-4 text-center">
                        <div className="mb-2 text-gray-600">
                          <p>
                          خرید از والت:   
                          </p>
                          <p>

                          </p>{item.buy_irt_price}
                          خرید از والت:      
                        </div>
                        <div className="mb-2 text-gray-600">
                          فروش به والت: {item.sell_irt_price}
                        </div>
                        <button className="bg-blue-600 text-white py-2 px-20 rounded-lg hover:bg-blue-800 transition-colors duration-200">
                          معامله
                        </button>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <ul className="flex space-x-0">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  className={`px-4 py-2 rounded-3xl font-semibold transition-colors duration-300 mx-1 ${
                    currentPage === number
                      ? "bg-blue-700 text-white shadow-lg"
                      : "bg-gray-200 text-gray-800 shadow-md"
                  }`}
                  onClick={() => setCurrentPage(number)}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Table);
