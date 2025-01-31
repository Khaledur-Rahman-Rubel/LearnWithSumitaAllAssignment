import footerLogo from "./assets/images/logo/logo.svg";

import footer1 from "./assets/images/blog/blog-footer-01.jpg";
import footer2 from "./assets/images/blog/blog-footer-02.jpg";
import Footer1 from "./component/svg/Footer1";
import Footer2 from "./component/svg/Footer2";
import Footer3 from "./component/svg/Footer3";
import Footer4 from "./component/svg/Footer4";

const Footer = () => {
  return (
    <>
      <footer className=" relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-10 w-full">
                <a
                  href="javascript:void(0)"
                  className="mb-6 inline-block  max-h-[100px]"
                >
                  <img src={footerLogo} alt="logo" className="max-w-full" />
                </a>
                <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                  We create digital experiences for brands and companies by
                  using technology.
                </p>
                <div className="-mx-3 flex items-center">
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Footer1 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Footer2 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Footer3 />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Footer4 />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  About Us
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Features
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      How it works
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      Refund policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  Latest blog
                </h4>
                <div className="flex flex-col gap-8">
                  <a
                    href="blog-details.html"
                    className="group flex items-center gap-[22px]"
                  >
                    <div className="overflow-hidden rounded">
                      <img src={footer1} alt="blog" />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      I think really important to design with...
                    </span>
                  </a>
                  <a
                    href="blog-details.html"
                    className="group flex items-center gap-[22px]"
                  >
                    <div className="overflow-hidden rounded">
                      <img src={footer2} alt="blog" />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      Recognizing the need is the primary...
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
