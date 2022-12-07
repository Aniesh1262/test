import React, { useEffect, useState } from "react";
import "../App.css";
import { Link, Redirect, Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ShowsSlice } from "../redux/shows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const ShowCard = ({ shows }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedShow, setSelectedShow] = useState();
  const dispatch = useDispatch();
  console.log("selectedShow", selectedShow);

  const proceedWithShow = (item) => {
    setSelectedShow(item);
    dispatch(ShowsSlice.actions.updatedSelectedShow(item));
  };

  return (
    <div className="displayShows">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={4}
        spaceBetween={20}
      >
        {shows.length !== 0 &&
          shows.map((item, index) => (
            <SwiperSlide
              style={{
                width: 400,
                height: 400,
                textAlign: "center",
              }}
              key={index}
            >
              {item.name}
              <Link to="/show-details" onClick={() => proceedWithShow(item)}>
                <div className="img" style={{ cursor: "pointer" }}>
                  <img src={item.image} />
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ShowCard;
