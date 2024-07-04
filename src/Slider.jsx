// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from '../src/assets/cheerful-redhead-girl-posing-against-white-wall.jpg';
import img2 from '../src/assets/cheerful-woman-with-dark-wavy-hairstyle-black-striped-outfit-hat-laughing-looking-into-camera-pink-background.jpg';
import img3 from '../src/assets/young-african-american-woman-wearing-casual-clothes-inviting-enter-smiling-natural-with-open-hand.jpg';
import img4 from '../src/assets/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg';
import './Slider.css'; 

const Slider = () => {
    return (
        <div>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slideContent">
            <img src={img1} alt="Slide 1" />
            <div className="overlay"></div>
            <div className="text">ATG User Profile</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <img src={img2} alt="Slide 2" />
            <div className="overlay"></div>
            <div className="text">Users from different Job sector</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <img src={img3} alt="Slide 3" />
            <div className="overlay"></div>
            <div className="text">Find out easily any user</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContent">
            <img src={img4} alt="Slide 4" />
            <div className="overlay"></div>
            <div className="text">Have a nice day </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;
