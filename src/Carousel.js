import React,{useState,useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper';
import './Carousel.css'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Slide from './Slide';
import db from './firebase/firebase'


function Carousel() {
  SwiperCore.use(Navigation);
  const [charms, setcharms] = useState([]);
  useEffect(() => {
    db.collection("Charms").onSnapshot((snapshot) =>
      setcharms(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
    return (
      <div className="carousel">
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      className="carousel__slider"
    >
      {
        charms.map(({img,price}) =>
        <SwiperSlide><Slide key={img} image={img} price={price}/></SwiperSlide>
        )}
    </Swiper>
    </div>
    )
}

export default Carousel
