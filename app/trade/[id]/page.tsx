"use client";
import Discussion from "@/app/components/Discussion";
import Image from "next/image";
import { DataTablesType } from "@/app/types/DataTableTypes";
import { useEffect, useState } from "react";
import MyChart from "@/app/components/MyChart";

const TradePage = () => {
  const [item, setItem] = useState<DataTablesType | null>(null);
  const [timePeriods, setTimePeriods] = useState<string[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("1y"); 
  const [faqOpen, setFaqOpen] = useState<number | null>(null); 

  useEffect(() => {
    const storedItem = localStorage.getItem("selectedItem");
    if (storedItem) {
      setItem(JSON.parse(storedItem));
    }
  }, []);

  useEffect(() => {
    const fetchTimePeriods = async () => {
      try {
        const response = await fetch(
          "https://b.wallet.ir/coinlist/chart-period"
        );
        const data = await response.json();
        if (data.success) {
          setTimePeriods(data.items);
        }
      } catch (error) {
        console.error("Error fetching time periods:", error);
      }
    };

    fetchTimePeriods();
  }, []);

  const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index); 
  };

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Discussion props={item} />


      <div className="relative bg-white px-4 py-8 md:px-8 md:py-12 max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">

        <div className="block md:hidden w-full">
          <img
            src="/Group 559.png"
            alt="Bitcoin Image"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>

        <div className="flex-1 text-right">
          <h1 className="text-xl md:text-2xl font-extrabold text-black mb-4 md:mb-9">
            درباره {item.fa_name}
          </h1>

          <p className="text-sm md:text-base font-normal leading-6 md:leading-8 text-black">
            {item.about}
          </p>
        </div>

        <div className="hidden md:block w-full max-w-[500px] h-auto">
          <img
            src="/Group 559.png"
            alt="Bitcoin Image"
            className="w-full h-auto object-cover rounded-3xl"
          />
        </div>
      </div>

      {/*  <div className="text-right mb-4 px-4 md:px-8">
        <label htmlFor="timePeriod" className="mr-2">
          انتخاب بازه زمانی:
        </label>
        <select
          id="timePeriod"
          value={selectedPeriod}
          onChange={handlePeriodChange}
          className="border rounded p-2"
        >
          {timePeriods.map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
      </div> */}

        <MyChart
        currency_code={item.currency_code}
      /> 
      {/* FAQ Section */}
      <div className="relative bg-white px-4 py-8 md:px-8 md:py-12 max-w-screen-lg mx-auto">
        <h1 className="text-xl md:text-2xl font-extrabold text-right text-black mb-4 md:mb-6">
          سوالات متداول
        </h1>

        
        <div className="p-4 md:p-6 border rounded-lg mb-4 md:mb-6">
          <button
            onClick={() => toggleFaq(1)}
            className="w-full text-right flex justify-between items-center"
          >
            <span className="font-bold">رمز ارز چیست؟</span>
            <span
              className={`transform transition-transform ${
                faqOpen === 1 ? "rotate-180" : ""
              }`}
            >
              <Image
                src="/Frame (2).svg"
                height={20}
                width={20}
                alt="Iran Flag"
                className="w-6 h-6 rounded-full ml-2"
              />
            </span>
          </button>
          {faqOpen === 1 && (
            <p className="mt-4 text-right text-gray-700 text-sm md:text-base">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود...
            </p>
          )}
        </div>

        <div className="p-4 md:p-6 border rounded-lg mb-4 md:mb-6">
          <button
            onClick={() => toggleFaq(2)}
            className="w-full text-right flex justify-between items-center"
          >
            <span className="font-bold">
              آیا می‌توانم با کارت بانکی بیت کوین بخرم؟
            </span>
            <span
              className={`transform transition-transform ${
                faqOpen === 2 ? "rotate-180" : ""
              }`}
            >
              <Image
                src="/Frame (2).svg"
                height={20}
                width={20}
                alt="Iran Flag"
                className="w-6 h-6 rounded-full ml-2"
              />
            </span>
          </button>
          {faqOpen === 2 && (
            <p className="mt-4 text-right text-gray-700 text-sm md:text-base">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود...
            </p>
          )}
        </div>

        <div className="p-4 md:p-6 border rounded-lg">
          <button
            onClick={() => toggleFaq(3)}
            className="w-full text-right flex justify-between items-center"
          >
            <span className="font-bold">چرا باید از والت استفاده کنم؟</span>
            <span
              className={`transform transition-transform ${
                faqOpen === 3 ? "rotate-180" : ""
              }`}
            >
              <Image
                src="/Frame (2).svg"
                height={20}
                width={20}
                alt="Iran Flag"
                className="w-6 h-6 rounded-full ml-2"
              />
            </span>
          </button>
          {faqOpen === 3 && (
            <p className="mt-4 text-right text-gray-700 text-sm md:text-base">
              لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
              بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود...
            </p>
          )}
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col md:flex-row justify-center items-center w-full md:w-[950px] h-auto md:h-[400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <Image
            src="/sammy-line-man-with-money 1.png"
            height={200}
            width={200}
            alt="Man with money illustration"
            className="md:w-[250px] md:h-[250px]"
          />
          <div className="text-center md:text-right">
            <h2 className="text-2xl font-bold text-black mb-4">
              علاقه مند به خرید بیت کوین هستید؟
            </h2>
            <p className="text-gray-700 mb-6">
              ما اینجا هستیم تا شما تجربه‌ای متفاوت از خرید و فروش بیت کوین
              داشته باشید.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-3xl hover:bg-blue-600">
              اکنون شروع کنید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TradePage;
