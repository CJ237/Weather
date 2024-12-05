import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const HourlyWeather = ({ hourlyData }) => (
    <div className=" mt-6 bg-blue-300 rounded-2xl shadow-lg ">
        <h2 className="text-2xl font-bold mb-4 ml-5">Hourly Forecast</h2>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
            }}
        >
            {hourlyData.map((hour, index) => (
                <SwiperSlide key={index} className="text-center mb-14 mt-5">
                    <p>{hour.time}</p>
                    <img src={hour.iconUrl} alt="Weather icon" className="mx-auto animate-pulse" />
                    <p>{hour.temp}°F</p>
                    <p>Feels Like: {hour.feelsLike}°F</p>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
export default HourlyWeather;