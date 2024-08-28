import Image from "next/image";
import { type ComponentPropsWithoutRef } from 'react'

const Footer:React.FC = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center ">
        <Image className="mb-2"
              src="/Logo2.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            ></Image>
            <h2 className="text-2xl font-bold mb-4 pr-10">سوالات متداول</h2>
            <h2 className="text-2xl font-bold mb-4  ">تبادل ارز</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-2xl hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>

          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between">
          <div>
           <p>راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و فعالیت رسمی آغاز نمود.</p>
          </div>
          <div className="mb-7">
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">شرایط و قوانین</a></li>
              <li><a href="#" className="hover:underline">انجمن</a></li>
              <li><a href="#" className="hover:underline">فرصت های شغلی</a></li>
              <li><a href="#" className="hover:underline">درباره ما</a></li>
              <li><a href="#" className="hover:underline">تماس با ما</a></li>
            </ul>
          </div>
          <div>
          <div className="">
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">شرایط و قوانین</a></li>
              <li><a href="#" className="hover:underline">انجمن</a></li>
              <li><a href="#" className="hover:underline">فرصت های شغلی</a></li>
              <li><a href="#" className="hover:underline">درباره ما</a></li>
              <li><a href="#" className="hover:underline">تماس با ما</a></li>
            </ul>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;