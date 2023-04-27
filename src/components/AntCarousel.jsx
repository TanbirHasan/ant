import { Button, Carousel, Space } from "antd";
import React, { useRef } from "react";

const AntCarousel = () => {
  const ref = useRef();
  return (
    <div style={{ width: "auto", height: "400px", backgroundColor: "orange" }}>
      <Carousel
        autoplay
        dots={true}
        dotPosition="bottom"
        pauseOnHover={true}
        pauseOnDotsHover={true}
        ref={ref}
        effect="fade"
      >
        <div className="bg-teal-200 w-full text-center">
          <h1
            className="text-[black] text-2xl"
            style={{
              color: "white",
              lineHeight: "400px",
              backgroundColor: "black",
            }}
          >
            Slide 1
          </h1>
        </div>
        <div className="bg-tomato-200 w-full text-center">
          {" "}
          <h1
            className="text-[black] text-2xl"
            style={{
              color: "white",
              lineHeight: "400px",
              backgroundColor: "black",
            }}
          >
            Slide 2
          </h1>
        </div>
        <div className="bg-orange-200 w-full text-center">
          {" "}
          <h1
            className="text-[black] text-2xl"
            style={{
              color: "white",
              lineHeight: "400px",
              backgroundColor: "black",
            }}
          >
            Slide 4
          </h1>
        </div>
      </Carousel>
      <div className="mt-5 text-center">
        <Space size={12} direction="horizontal">
          <Button onClick={() => ref.current.prev()}>prev</Button>
          <Button onClick={() => ref.current.goTo(0)}>Reset</Button>
          <Button onClick={() => ref.current.next()}>Next</Button>
        </Space>
      </div>
    </div>
  );
};

export default AntCarousel;
