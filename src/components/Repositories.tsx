import { Button } from "@nextui-org/react";
import Code from "../assets/icons/Code.svg";
import PlayIcon from "../assets/icons/Play.svg";
import { useState, useRef, useEffect, useCallback } from "react";
import React from "react";

const Repositories = () => {
  // Video and Thumbnail Data
  const videoData = [
    {
      videoSrc:
        "https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/6noTBEspk4cwnkvTw6tvs2kJUI-fayPq-LV1U1Pk2Xs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2dhbGxl/cnkvWW91dHViZS1U/aHVtYm5haWwtVGVt/cGxhdGUtZm9yLUJ1/c2luZXNzLmpwZw",
    },
    {
      videoSrc:
        "https://videos.pexels.com/video-files/3191420/3191420-sd_640_360_25fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/S6K6wTm_tURIp-4E3YDEGShGoQkKI8EF45RUrXHi0tA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1wc2Qv/YXR0cmFjdGl2ZS1u/ZXcteW91dHViZS10/aHVtYm5haWwtZGVz/aWduLXRlbXBsYXRl/Xzk0MTgwMi0zNTUx/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
    },
    {
      videoSrc:
        "https://videos.pexels.com/video-files/3191420/3191420-sd_640_360_25fps.mp4",
      thumbnail:
        "https://imgs.search.brave.com/pOaBQnGdotrnHtF_0NMASNCS6LazIYQ19AmbcrWTQmE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGVjaHNtaXRoLmNv/bS9ibG9nL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzAyL1RT/Qy10aHVtYm5haWwt/ZXhhbXBsZS0xMDI0/eDU3Ni5wbmc",
    },
  ];

  // States to track play/pause for each video
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    Array(videoData.length).fill(false)
  );

  const [videoCount, setVideoCount] = useState<number>(1); // Default to 1 video

  // Refs for each video
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handlePlayPauseToggle = (index: number) => {
    const updatedPlaying = [...isPlaying];

    if (updatedPlaying[index]) {
      videoRefs.current[index]?.pause();
    } else {
      // Pause other videos
      videoRefs.current.forEach((video, idx) => {
        if (idx !== index) video?.pause();
      });

      updatedPlaying.forEach((_, idx) => {
        if (idx !== index) updatedPlaying[idx] = false;
      });

      videoRefs.current[index]?.play();
    }

    updatedPlaying[index] = !updatedPlaying[index];
    setIsPlaying(updatedPlaying);
  };

  // Update videoCount based on screen size
  const updateVideoCount = useCallback(() => {
    const width = window.innerWidth;
    console.log("Window Width:", width);
    if (width < 620) {
      setVideoCount(1); // Mobile view
    } else if (width < 1024) {
      setVideoCount(2); // Tablet view
    } else {
      setVideoCount(3); // Desktop view
    }
    console.log("Video Count:", videoCount);
  }, [videoCount]);

  useEffect(() => {
    updateVideoCount();
    window.addEventListener("resize", updateVideoCount);
    return () => {
      window.removeEventListener("resize", updateVideoCount);
    };
  }, [updateVideoCount]);

  return (
    <>
      <div
        id="repos"
        className="relative bg-white md:-mt-5 lg:mt-0 pt-24 pb-5 lg:pt-28 w-full h-auto"
      >
        {/* Container */}
        <div className="w-[94vw] lg:w-[94vw] max-w-[1440px] overflow-hidden h-[450px] sm:h-[430px] lg:h-[580px] xl:h-[650px] mx-auto rounded-[30px] relative">
          <img
            src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/66017f425a91654f12e4b20c_template-section-bg.webp"
            alt=""
            className="w-auto sm:h-auto sm:w-full h-full"
            style={{ filter: "hue-rotate(-5deg) saturate(1.3)" }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start p-4 lg:p-8 xl:p-14 bg-[#021734] bg-opacity-50">
            <span className="bg-blue-400 bg-opacity-30 backdrop-blur-sm rounded-full lg:rounded-lg px-2.5 lg:px-3 py-1 lg:py-1.5 mt-6 lg:mt-8 text-white text-[10px] lg:text-[13px] font-medium lg:font-semibold uppercase">
              Repositories
            </span>
            <p className="text-white text-[22px] lg:text-[55px] lg:w-[750px] font-medium text-center mx-auto mt-5 leading-8 lg:leading-[60px]">
              Get started in minutes with 200+ free video templates
            </p>
            <Button
              color="primary"
              className="rounded-[9px] w-[130px] lg:w-[190px] min-h-[34px] lg:min-h-[50px] mt-5 lg:mt-10 border-[2px] border-slate-200 text-blue-950 text-[12px] lg:text-[16px] bg-white"
            >
              All Repositories
              <img
                className="w-5 lg:w-7 -ml-3 brightness-0 animate-left-right"
                src={Code}
                alt=""
              />
            </Button>

            {/* Video List */}
            <div className="w-full h-full mt-12 lg:mt-16 flex flex-wrap justify-center items-center gap-x-8">
              {videoData.slice(0, videoCount).map((data, index) => (
                <div
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full"
                  key={index}
                >
                  <div className="relative group">
                    {/* Thumbnail */}
                    {!isPlaying[index] && (
                      <img
                        src={data.thumbnail}
                        alt="Video Thumbnail"
                        className="top-0 left-0 w-full h-full object-cover rounded-xl cursor-pointer transition-all duration-1000 ease-in-out"
                        onClick={() => handlePlayPauseToggle(index)}
                      />
                    )}

                    {/* Video */}
                    <video
                      ref={(el) => (videoRefs.current[index] = el!)}
                      className="rounded-xl w-full cursor-pointer transition-all duration-1000 ease-in-out"
                      onClick={() => handlePlayPauseToggle(index)}
                      loop
                      muted
                      style={{ display: isPlaying[index] ? "block" : "none" }}
                    >
                      <source src={data.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play Button */}
                    {!isPlaying[index] && (
                      <button
                        onClick={() => handlePlayPauseToggle(index)}
                        className="absolute top-[38px] lg:top-[64px] left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white p-[3px] rounded-full hover:bg-opacity-100 transition-all duration-1000 ease-in-out group"
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-[#2166c6] pl-1 border border-gray-200 rounded-full transition-all duration-1000 ease-in-out">
                          <img src={PlayIcon} alt="Play" className="w-5 h-5" />
                        </div>
                        <div
                          className="relative overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-1000 ease-in-out"
                          style={{ width: "fit-content" }}
                        >
                          <span className="px-2.5 text-sm font-bold text-slate-800">
                            Play
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repositories;
