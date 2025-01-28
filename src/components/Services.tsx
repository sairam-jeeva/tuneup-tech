import { ReactComponent as Logo } from "../assets/icons/TuneUp_Favicon.svg";
import React from "react";
import Lottie from "react-lottie-player";
import softwareani from "../animations/software.json";
import webani from "../animations/website.json";
import mobileani from "../animations/mobile.json";
import markani from "../animations/marketing.json";
import mediaani from "../animations/media.json";

interface ServicesChildProps {
  pathRef: React.RefObject<SVGPathElement>;
  iconPosition: { x: number; y: number };
  tailOffset: number;
  tailLength: number;
}

const Services: React.FC<ServicesChildProps> = ({
  pathRef,
  iconPosition,
  tailOffset,
  tailLength,
}) => {
  return (
    <>
      <div
        id="services"
        className="mt-[50px] lg:mt-64 xl:mt-0 pt-28 lg:pb-28 bg-[#021734]"
      >
        <div className="w-full h-[140px] lg:h-[190px] text-white flex flex-col justify-start items-center">
          <h1 className="inter-medium text-[32px] lg:text-[48px]">
            OUR SERVICES
          </h1>
          <p className="lg:w-[500px] text-center text-white mt-2 lg:mt-3 text-opacity-70 text-[12px] lg:text-[16px]">
            At TuneUp Technologies, we offer a comprehensive range of services
            to help businesses thrive in the digital landscape
          </p>
        </div>
        <div
          id="timeline-services"
          className="timeline-container -mt-10 relative mx-auto max-w-[90vw] lg:w-full h-auto max-h-[2900px] sm:max-h-[1500px] md:max-h-[1700px] lg:min-h-[2060px] xl:min-h-[2360px] lg:max-h-[2060px] xl:max-h-[2360px] lg:px-10 sm:gap-x-5lex gap-x-2 lg:gap-x-10 justify-center lg:justify-between items-center lg:items-start"
        >
          {/* Contents */}
          <div className="w-full h-full">
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] overflow-hidden pt-0.5 mt-10 lg:mt-[40px] xl:mt-[150px]">
              <div className="">
                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  Custom <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                    Software Development
                  </span>
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Tailored software solutions designed to meet your unique
                  business requirements.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
              <Lottie
              loop
              animationData={softwareani}
              play
              style={{ marginTop: "-50px" }}
            />
              </div>
            </div>

            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] overflow-hidden pt-0.5 mt-10 lg:mt-[40px] xl:mt-[150px]">
              <div className="">
                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  Web Application<br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                  Development
                  </span>
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                Responsive and feature-rich web applications that enhance your
                  online presence.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
              <Lottie
              loop
              animationData={webani}
              play
              style={{ marginTop: "-50px" }}
            />
              </div>
            </div>
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] overflow-hidden pt-0.5 mt-10 lg:mt-[40px] xl:mt-[150px]">
              <div className="">
                

                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  Mobile Application <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                   Development
                  </span>
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                Intuitive and dynamic mobile apps for Android and iOS
                  platforms.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
              <Lottie
              loop
              animationData={mobileani}
              play
              style={{ marginTop: "-50px" }}
            />
              </div>
            </div>
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] overflow-hidden pt-0.5 mt-10 lg:mt-[40px] xl:mt-[150px]">
              <div className="">
                

                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                Digital Marketing <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                   Services
                  </span>
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                Comprehensive strategies for social media management, SEO and
                  online branding.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
              <Lottie
              loop
              animationData={markani}
              play
              style={{ marginTop: "-50px" }}
            />
              </div>
            </div>
            <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] overflow-hidden pt-0.5 mt-10 lg:mt-[40px] xl:mt-[150px]">
              <div className="">
                

                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  Digital <br />
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                    Support
                  </span>
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                From strategy to execution, we guide you on every step of your
                  content creation journey.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
              <Lottie
              loop
              animationData={mediaani}
              play
              style={{ marginTop: "-50px" }}
            />
              </div>
            </div>


            
            {/* <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] overflow-hidden pt-0.5 mt-16 lg:mt-[80px] xl:mt-[140px]">
              <div className="">
                

                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                    Web Application
                  </span>
                  Development
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Responsive and feature-rich web applications that enhance your
                  online presence.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-5 xl:hidden">
              <Lottie
              loop
              animationData={webani}
              play
              style={{ marginTop: "-50px" }}
            />
              </div>
            </div> */}
            {/* <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-[330px] overflow-hidden pt-0.5 mt-10 lg:mt-[80px] xl:mt-[140px]">
              <div className="">
                

                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                    Mobile Application
                  </span>
                  Development
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Intuitive and dynamic mobile apps for Android and iOS
                  platforms.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-[200px] rounded-xl overflow-hidden mt-5 xl:hidden">
              <Lottie
              loop
              animationData={mobileani}
              play
              style={{ marginTop: "10px" }}
            />
              </div>
            </div> */}
            {/* <div className="sm:flex justify-between items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto lg:h-auto overflow-hidden pt-0.5 lg:mt-[80px] xl:mt-[140px]">
              <div className="">
                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                    Digital Marketing
                  </span>
                  Services
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  Comprehensive strategies for social media management, SEO and
                  online branding.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-5 xl:hidden">
              <Lottie
              loop
              animationData={markani}
              play
              style={{ marginTop: "-20px" }}
            />
              </div>
            </div> */}
            {/* <div className="sm:flex justify-between items-start mt-10 sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-auto  overflow-hidden pt-0.5 lg:mt-[80px] xl:mt-[140px]">
              <div className="">
               

                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] -mt-1">
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                  Digital
                  </span>
                  Support
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                From strategy to execution, we guide you on every step of your
                  content creation journey.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-10 xl:hidden">
              <Lottie
              loop
              animationData={mediaani}
              play
              style={{ marginTop: "-20px",height:400}}
            />
              </div>
            </div> */}
            {/* <div className="sm:flex justify-between  items-start sm:items-center xl:items-start sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-0 w-full h-full lg:h-[330px] overflow-hidden pt-0.5  lg:mt-[80px] xl:mt-[140px]">
              <div className="">
                <h1 className="text-[28px] lg:text-[40px] inter-medium text-white leading-9 lg:leading-[48px] mt-3">
                  <span className="bg-clip-text flex mr-3 text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600">
                    Digital
                  </span>
                  Support
                </h1>
                <p className="text-[13.5px] lg:text-[16px] text-gray-300 text-opacity-85 mt-2 lg:mt-4">
                  From strategy to execution, we guide you on every step of your
                  content creation journey.
                </p>
              </div>

              <div className="w-full sm:min-w-[250px] sm:max-w-[250px] md:min-w-[300px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[400px] h-auto rounded-xl overflow-hidden mt-5 xl:hidden">
              <Lottie
              loop
              animationData={mediaani}
              play
              style={{ marginTop: "-20px"}}
            />
              </div>
            </div> */}
          </div>
          {/* SVG Animation */}
          <div className="hidden xl:flex overflow-hidden select-none h-[2700px] min-w-[260px] max-w-[260px] -mt-[260px] justify-center">
            <svg
              className="timeline-svg"
              viewBox="0 0 200 2000"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="tailGradient" x1="1" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#2d68af" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
                <mask id="fadeMask">
                  <rect x="0" y="0" width="100%" height="100%" fill="white" />
                  <rect x="0" y="0" width="100%" height="150" fill="black" />
                </mask>
              </defs>

              <path
                ref={pathRef}
                d="M106.5 210 
              Q 125 300, 100 400 
              Q 75 500, 100 600 
              Q 125 700, 100 800 
              Q 75 900, 100 1000 
              Q 125 1100, 100 1200 
              Q 75 1300, 100 1400 
              Q 125 1500, 100 1600 
              Q 75 1700, 78 1700"
                style={{
                  fill: "none",
                  stroke: "#2d68af",
                  strokeWidth: 1.7,
                  opacity: 0.2,
                }}
              />

              <path
                d="M105 200 
              Q 125 300, 100 400 
              Q 75 500, 100 600 
              Q 125 700, 100 800 
              Q 75 900, 100 1000 
              Q 125 1100, 100 1200 
              Q 75 1300, 100 1400 
              Q 125 1500, 100 1600 
              Q 75 1700, 78 1700"
                stroke="url(#tailGradient)"
                strokeWidth={1.7}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${tailLength} ${
                  pathRef.current?.getTotalLength() || 0
                }`}
                strokeDashoffset={-tailOffset}
                mask="url(#fadeMask)"
              />

              <g
                className="timeline-logo"
                style={{
                  transform: `translate(${iconPosition.x - 21}px, ${
                    iconPosition.y - 21
                  }px)`,
                  transformOrigin: "center center",
                }}
              >
                <Logo width={42} height={42} />
              </g>
            </svg>
          </div>
          {/* Images */}
          <div className="w-full h-full hidden xl:block">
            <div className="w-full h-auto rounded-xl overflow-hidden ">
            <Lottie
              loop
              animationData={softwareani}
              play
              style={{ height: '500px', width: '500px' }}
            />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden ">
            <Lottie
              loop
              animationData={webani}
              play
              style={{ height: '500px', width: '500px' }}
            />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden ">
            <Lottie
              loop
              animationData={mobileani}
              play
              style={{ height: '500px', width: '500px' }}
            />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden -mt-20">
            <Lottie
              loop
              animationData={markani}
              play
              style={{ height: '500px', width: '500px' }}
            />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden">
            <Lottie
              loop
              animationData={mediaani}
              play
              style={{ height: '500px', width: '500px' }}
            />
            </div>
            {/* <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <Lottie
              loop
              animationData={webani}
              play
              style={{ marginTop: "-50px" }}
            />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <Lottie
              loop
              animationData={mobileani}
              play
              style={{ marginTop: "-50px" }}
            />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <Lottie
              loop
              animationData={markani}
              play
              style={{ marginTop: "-30px" }}
            />
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[140px]">
            <Lottie
              loop
              animationData={mediaani}
              play
              style={
                
                { marginTop: "-40px" }}
            />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
