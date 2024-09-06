import { DataTablesType } from "../types/DataTableTypes";
import Image from "next/image";

type DiscussionProps = {
  props: DataTablesType;
};

const Discussion = ({ props }: DiscussionProps) => {
  return (
    <>
      <div className="container mx-auto p-6 bg-white rounded-2xl shadow-2xl flex flex-col lg:flex-row max-w-5xl my-12">
       
        <div className="lg:w-1/2 w-full p-4 rounded-xl -mt-4">
          <div className="p-6">
            <p className="font-bold mb-6 text-right text-lg">قیمت لحظه‌ای:</p>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Image
                  src={props.icon}
                  width={60}
                  height={60}
                  alt={props.en_name}
                  className="inline-block"
                />
                <div className="flex flex-col text-center">
                  <span className="text-xl font-bold">{props.fa_name}</span>
                  <span className="text-sm text-gray-600">{props.en_name}</span>
                </div>
              </div>
              <div className="text-left">
                <b className="text-gray-700 text-lg">
                  {Number(props.irt_price).toLocaleString()} تومان{" "}
                </b>
                <p className="text-gray-500 text-sm">
                  ${Number(props.price).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="text-right text-gray-600 mb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col text-center">
                    <p className="text-md">تغییر قیمت امروز:</p>
                  </div>
                </div>
                <div className="text-left">
                  <span
                    className={
                      props.daily_change_percent &&
                      props.daily_change_percent.startsWith("-")
                        ? "text-red-500 text-lg"
                        : "text-green-500 text-lg"
                    }
                  >
                    {props.daily_change_percent}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col text-center">
                    <p className="text-md">خرید:</p>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-lg">
                    {Number(props.buy_irt_price).toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col text-center">
                    <p className="text-md">فروش :</p>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-lg">
                    {Number(props.sell_irt_price).toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col text-center">
                    <p className="text-md">بالاترین قیمت 24 ساعته :</p>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-lg">
                    {Number(props.buy_irt_price).toLocaleString()} تومان
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col text-center">
                    <p className="text-md">پایین ترین قیمت 24 ساعته :</p>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-lg">
                    {Number(props.sell_irt_price).toLocaleString()} تومان
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block h-auto w-px bg-gray-300 mx-4"></div>

        <div className="lg:w-1/2 w-full items-center p-4">
          <div className="flex flex-col mb-10">
            <label className="block text-right text-gray-700 text-sm font-bold mb-2">
              ارسال می‌کنید:
            </label>
            <div className="flex items-center bg-gray-100 p-2 rounded-2xl shadow-sm  border-gray-200">
              <div className="flex items-center w-1/2 justify-end">
                <input
                  type="text"
                  placeholder="مقدار را وارد کنید"
                  className="bg-transparent w-full text-right focus:outline-none text-gray-500 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center justify-center mx-2">
                <div className="h-6 border-r border-gray-300"></div>
              </div>
              <div className="flex items-center w-1/2 justify-start">
                <Image
                  src="/iranlogo.svg"
                  height={20}
                  width={20}
                  alt="Iran Flag"
                  className="w-6 h-6 rounded-full ml-2"
                />
                <span className="text-gray-700">تومان</span>
                <div className="flex-grow"></div>
                <Image
                  src="/Frame (2).svg"
                  height={20}
                  width={20}
                  alt="Iran Flag"
                  className="w-6 h-6 rounded-full ml-2"
                />
              </div>
            </div>
          </div>
          <Image
            src="/Group 64.svg"
            className="mr-auto pb-5"
            alt="Exchange Icon"
            height={30}
            width={30}
          />
          <div className="flex flex-col mb-10">
            <label className="block text-right text-gray-700 text-sm font-bold mb-2">
              دریافت می کنید:
            </label>
            <div className="flex items-center bg-gray-100 p-2 rounded-2xl shadow-sm  ">
              <div className="flex items-center w-1/2 justify-end">
                <input
                  type="text"
                  placeholder="مقدار نهایی"
                  className="bg-transparent  w-full text-right focus:outline-none text-gray-500 placeholder-gray-400"
                />
              </div>
              <div className="flex items-center justify-center mx-2">
                <div className="h-6 border-r border-gray-300"></div>
              </div>
              <div className="flex items-center w-1/2 justify-start">
                <Image
                  src={props.icon}
                  height={20}
                  width={20}
                  alt="Currency Icon"
                  className="w-6 h-6 rounded-full ml-2"
                />
                <span className="text-gray-700">{props.fa_name}</span>
                <div className="flex-grow"></div>
                <Image
                  src="/Frame (2).svg"
                  height={20}
                  width={20}
                  alt="Exchange Icon"
                  className="w-6 h-6 rounded-full ml-2"
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col text-center">
                  <p className="text-md">نرخ ارز یک:</p>
                </div>
              </div>
              <div className="text-left">
                <span className="text-lg">
                  {Number(props.price).toLocaleString()} 
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col text-center">
                  <p className="text-md">نرخ ارز دو:</p>
                </div>
              </div>
              <div className="text-left">
                <span className="text-lg">
                  {Number(props.buy_irt_price).toLocaleString()} تومان
                </span>
              </div>
            </div>
            <button className="bg-white text-black border-blue-700 border py-2 px-16 rounded-2xl hover:bg-blue-700 text-sm">
              ادامه خرید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discussion;
