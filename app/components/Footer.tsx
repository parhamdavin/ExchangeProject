import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 justify-between">
          {/* بخش اول: لوگو و توضیحات */}
          <div className="mb-7">
            <Image
              className="mb-4"
              src="/Logo2.svg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <div>
              <p>
                راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های
                پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام
                تجاری MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان
                به ثبت رسید و فعالیت رسمی آغاز نمود.
              </p>
            </div>
          </div>

          {/* خط نازک جدا کننده */}
          <hr className="block lg:hidden border-t border-gray-500 mb-7" />

          {/* بخش دوم: لینک های مرتبط */}
          <div className="mb-11 flex flex-col">
            <h2 className="text-2xl font-bold mb-7">لینک های مرتبط</h2>
            <ul className="space-y-2 mt-0">
              <li>
                <a href="#" className="hover:underline">
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  قیمت رمزارزها
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  مقالات و بلاگ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          {/* بخش سوم: لینک‌های دیگر */}
          <div className="mb-11 flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-7"></h2>
            </div>
            <ul className="space-y-2 mt-0">
              <li>
                <a href="#" className="hover:underline">
                  شرایط و قوانین
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  انجمن
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  فرصت های شغلی
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          {/* بخش چهارم: تبادل ارز */}
          <div className="mb-11 flex flex-col">
            <h2 className="text-2xl font-bold mb-7">تبادل ارز</h2>
            <ul className="space-y-2 mt-0">
              <li>
                <a href="#" className="hover:underline">
                  خرید بیت کوین
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  خرید اتریوم
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  خرید ریپل
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>

          {/* بخش پنجم: لینک‌های دیگر */}
          <div className="hidden md:flex mb-11 flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-7"></h2>
            </div>
            <ul className="space-y-2 mt-0">
              <li>
                <a href="#" className="hover:underline">
                  شرایط و قوانین
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  انجمن
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  فرصت های شغلی
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  درباره ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* بخش خط نازک و شبکه‌های اجتماعی */}
        <div className="mt-12">
          <hr className="border-t border-gray-500 mb-6" />
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <h3 className="text-lg text-center lg:text-left mb-4 lg:mb-0">
              تمامی حقوق این سرویس متعلق به مجموعه ری پیمنت است
            </h3>
            <div className="flex justify-center">
              <img
                src="/instgram.png"
                className="text-white mx-3 text-2xl"
                alt="Instagram"
              />
              <img
                src="/facebook.png"
                className="text-white mx-3 text-2xl"
                alt="Facebook"
              />
              <img
                src="/twit.png"
                className="text-white mx-3 text-2xl"
                alt="Twitter"
              />
              <img
                src="/Linekdin.png"
                className="text-white mx-3 text-2xl"
                alt="LinkedIn"
              />
              <img
                src="/youtub.png"
                className="text-white mx-3 text-2xl"
                alt="YouTube"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
