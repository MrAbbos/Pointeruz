import React, { useState } from "react";
import { useMorph } from "react-morph";
import "./Style.css";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import one from "./img/py.jpg";
import two from "./img/js.jpg";
import PageAnimation from "../PageAnimation/PageAnimation";
import { PageOpen } from "../../Animation";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Language() {
  const [toggle, setToggle] = useState(true);
  const [cursor, setCursor] = useState(false);
  const [propSlide, setPropSlide] = useState("");
  const morph = useMorph();
  const maincarousels = [
    {
      id: 1,
      img: one,
      text: "Python",
    },
    {
      id: 2,
      img: two,
      text: "JavaScript",
    },
    {
      id: 3,
      img: one,
      text: "Python",
    },
    {
      id: 4,
      img: two,
      text: "JavaScript",
    },
    {
      id: 5,
      img: one,
      text: "Python",
    },
    {
      id: 6,
      img: two,
      text: "JavaScript",
    },
    {
      id: 7,
      img: one,
      text: "Python",
    },
    {
      id: 8,
      img: two,
      text: "JavaScript",
    },
    {
      id: 9,
      img: one,
      text: "Python",
    },
    {
      id: 10,
      img: two,
      text: "JavaScript",
    },
    {
      id: 11,
      img: one,
      text: "Python",
    },
    {
      id: 12,
      img: two,
      text: "JavaScript",
    },
  ];
  const imageAnim = (slide) => {
    setToggle((p) => !p);
    setPropSlide(slide);
  };
  return (
    <div className={"w-100 ParentNone"}>
      <PageAnimation />
      <motion.div
        // variants={PageOpen}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className={"ParentNone"}
      >
        <div>
          {toggle ? (
            <div>
              <h1>Musojon</h1>
            </div>
          ) : (
            <div>
              <h1>{propSlide.text}</h1>
            </div>
          )}
        </div>
        {toggle ? (
          <div
            style={{ cursor: setCursor ? "grab" : "grabbing" }}
            onClick={() => setCursor((p) => !p)}
            className={"SliderComp"}
          >
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                767: {
                  slidesPerView: 3,
                },
                922: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              slidesPerView={6}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: true,
              }}
              className="mySwiper"
            >
              {maincarousels.map((slide) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <div className="carousel_block">
                      <div onClick={() => imageAnim(slide)}>
                        <img
                          {...morph}
                          key="one"
                          className={"LanguageProg"}
                          src={slide.img}
                          alt={slide.text}
                          style={{ float: "right" }}
                        />
                      </div>
                      <div className="popovers_block">
                        <div className="popovers">
                          <div className="popovers_text">{slide.text}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div style={{ objectFit: "cover" }}>
            <img
              {...morph}
              key="two"
              src={propSlide && propSlide.img}
              alt={propSlide && propSlide.text}
              style={{ float: "right" }}
            />
          </div>
        )}
      </motion.div>
      {!toggle && <button onClick={() => setToggle((p) => !p)}>Back</button>}
    </div>
  );
}

export default Language;
