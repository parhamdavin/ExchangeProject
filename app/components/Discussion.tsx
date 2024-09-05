import { DataTablesType } from "../types/DataTableTypes"

import Image from "next/image";
type DiscussionProps={
    props:DataTablesType
}

const Discussion=({props}:DiscussionProps)=>{
return <> <div className="container mx-auto p-6 bg-white rounded-xl shadow-lg flex flex-col lg:flex-row">
<div className="lg:w-1/3 w-full p-4 rounded-xl">
  <div className="p-4">
    <p className="font-bold  mb-4 text-right">قیمت لحظه‌ای:</p>
    <div className="flex propss-center justify-between mb-4">
      <div className="flex propss-center space-x-2">
        <Image
          src={props.icon}
          width={50}
          height={50}
          alt={props.en_name}
          className="inline-block"
        />
        <div className="flex flex-col text-center">
          <span className="text-lg font-bold">{props.fa_name}</span>
          <span className="text-sm text-gray-600">{props.en_name}</span>
        </div>
      </div>
      <div className="text-left">
        <b className="text-gray-700">
          {Number(props.irt_price).toLocaleString()} تومان{" "}
        </b>
        <p className="text-gray-500">
          ${Number(props.price).toLocaleString()}
        </p>
      </div>
    </div>
    <hr className="block lg:hidden border-t border-black mb-7" />

    <div className="text-right text-gray-600 mb-2">
      <div className="flex propss-center justify-between mb-4">
        <div className="flex propss-center space-x-2">
          <div className="flex flex-col text-center">
            <p>تغییر قیمت امروز:</p>
          </div>
        </div>
        <div className="text-left">
          <span
            className={
              props.daily_change_percent &&
              props.daily_change_percent.startsWith("-")
                ? "text-red-500"
                : "text-green-500"
            }
          >
            {props.daily_change_percent}
          </span>
        </div>
      </div>

      <div className="flex propss-center justify-between mb-4">
        <div className="flex propss-center space-x-2">
          <div className="flex flex-col text-center">
            <p>خرید:</p>
          </div>
        </div>
        <div className="text-left">
          <span>
            {Number(props.buy_irt_price).toLocaleString()} تومان
          </span>
        </div>
      </div>
      <div className="flex propss-center justify-between mb-4">
        <div className="flex propss-center space-x-2">
          <div className="flex flex-col text-center">
            <p>فروش :</p>
          </div>
        </div>
        <div className="text-left">
          <span>
            {Number(props.sell_irt_price).toLocaleString()} تومان
          </span>
        </div>
      </div>
      <div className="flex propss-center justify-between mb-4">
        <div className="flex propss-center space-x-2">
          <div className="flex flex-col text-center">
            <p>بالاترین قیمت 24 ساعته :</p>
          </div>
        </div>
        <div className="text-left">
          <span>
            {Number(props.buy_irt_price).toLocaleString()} تومان
          </span>
        </div>
      </div>
      <div className="flex propss-center justify-between mb-4">
        <div className="flex propss-center space-x-2">
          <div className="flex flex-col text-center">
            <p>پایین ترین قیمت 24 ساعته :</p>
          </div>
        </div>
        <div className="text-left">
          <span>
            {Number(props.sell_irt_price).toLocaleString()} تومان
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="lg:w-2/3 w-full items-center p-4">
  <div className="flex flex-col mb-14">
    <label className="block text-right text-gray-700 text-sm font-bold mb-2">
      ارسال می‌کنید:
    </label>
    <div className="flex items-center bg-gray-50 p-2 rounded-lg shadow-sm border border-gray-200 relative">
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

      {/* آیکونی که بالاتر و به سمت چپ قرار گرفته */}
   
    </div>
  </div>
  <Image
        src='/Group 64.svg'
        className=" mr-auto pb-5 "
        alt="Exchange Icon"
        height={40}
        width={40}
      />
  <div className="flex flex-col mb-12">
    <label className="block text-right text-gray-700 text-sm font-bold mb-2">
    دریافت می کنید:
    </label>
    <div className="flex items-center bg-gray-50 p-2 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center w-1/2 justify-end">
        <input
          type="text"
          placeholder="مقدار نهایی"
          className="bg-transparent w-full text-right focus:outline-none text-gray-500 placeholder-gray-400"
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
          alt="Iran Flag"
          className="w-6 h-6 rounded-full ml-2"
        />
        <span className="text-gray-700">{props.fa_name}</span>
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

  <div className="text-center">
    <button className="bg-blue-600 text-white py-3 px-10 rounded-lg hover:bg-blue-700">
      ادامه خرید
    </button>
  </div>
</div>

</div>
</>
}

export default Discussion 