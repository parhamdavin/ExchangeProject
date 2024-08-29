"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";

interface DataItem {
  ico: string;
  name: string;
  price: string;
  change: string;
  status: string;
}

const Table: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5); // تعداد آیتم‌ها در هر صفحه
  const [activeTab, setActiveTab] = useState<"table" | "cards">("table"); // برای نمایش نماهای مختلف

  useEffect(() => {
    const fakeData: DataItem[] = [
      {
        ico: "ICO1",
        name: "توکن ۱",
        price: "1,000,000 تومان",
        change: "+5%",
        status: "معامله",
      },
      {
        ico: "ICO2",
        name: "توکن ۲",
        price: "2,000,000 تومان",
        change: "-2%",
        status: "معامله",
      },
      {
        ico: "ICO3",
        name: "توکن ۳",
        price: "3,000,000 تومان",
        change: "+1%",
        status: "معامله",
      },
      {
        ico: "ICO4",
        name: "توکن ۴",
        price: "4,000,000 تومان",
        change: "-1%",
        status: "معامله",
      },
      {
        ico: "ICO5",
        name: "توکن ۵",
        price: "5,000,000 تومان",
        change: "+3%",
        status: "معامله",
      },
      {
        ico: "ICO6",
        name: "توکن ۶",
        price: "6,000,000 تومان",
        change: "-2%",
        status: "معامله",
      },
      {
        ico: "ICO7",
        name: "توکن ۷",
        price: "7,000,000 تومان",
        change: "+4%",
        status: "معامله",
      },
      {
        ico: "ICO8",
        name: "توکن ۸",
        price: "8,000,000 تومان",
        change: "+1%",
        status: "معامله",
      },
      {
        ico: "ICO9",
        name: "توکن ۹",
        price: "9,000,000 تومان",
        change: "-3%",
        status: "معامله",
      },
      {
        ico: "ICO10",
        name: "توکن ۱۰",
        price: "10,000,000 تومان",
        change: "+2%",
        status: "معامله",
      },
    ];

    setData(fakeData);
    setFilteredData(fakeData);
  }, []);

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm, data]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">
        لیست قیمت لحظتی ارزهای دیجیتال
      </h1>

      
      {activeTab === "table" && (
        <div className="overflow-x-auto">
          <div className="shadow-lg rounded-lg p-2 bg-white max-w-screen-lg mx-auto">
            <table className="min-w-full bg-white text-base border-collapse">
              <thead className="bg-slate-200 text-gray-700 rounded-md">
                <tr>
                  <th className="p-4 border-b border-gray-200 ">نام رمز ارز</th>
                  <th className="p-4 border-b border-gray-200">ارزش دلاری</th>
                  <th className="p-4 border-b border-gray-200">تغییر روزانه</th>
                  <th className="p-4 border-b border-gray-200">خرید از والت</th>
                  <th className="p-4 border-b border-gray-200">فروش به والت</th>
                  <th className="p-4 border-b border-gray-200">
                    <SearchBox />
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 transition-colors duration-200 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-4 text-center text-lg">
                      <div className="flex items-center justify-around">
                        <Image
                          src="/bitcoin.svg"
                          width={40}
                          height={40}
                          alt="Bitcoin Icon"
                          className="mr-2"
                        />
                        {item.ico}
                      </div>
                    </td>
                    <td className="p-4 text-center text-lg">{item.name}</td>
                    <td className="p-4 text-center text-lg">{item.price}</td>
                    <td
                      className={`p-4 text-center text-lg ${
                        item.change.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.change}
                    </td>
                    <td className="p-4 text-center text-lg">{item.status}</td>
                    <td className="p-4 text-center">
                      <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-200">
                        معامله
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center">
            <ul className="flex space-x-2">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
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
      )}

      
      {activeTab === "cards" && (
        <div className="lg:hidden">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 mb-4 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-lg font-semibold mb-2 text-gray-800">
                {item.name}
              </div>
              <div className="mb-2 text-gray-600">ICO: {item.ico}</div>
              <div className="mb-2 text-gray-600">قیمت: {item.price}</div>
              <div
                className={`mb-2 text-lg ${
                  item.change.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                تغییر روزانه: {item.change}
              </div>
              <div className="mb-2 text-gray-600">وضعیت: {item.status}</div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors duration-200">
                معامله
              </button>
            </div>
          ))}
          <div className="mt-4 flex justify-center">
            <ul className="flex flex-wrap justify-center space-x-2">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <button
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
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
      )}
    </div>
  );
};

export default Table;
