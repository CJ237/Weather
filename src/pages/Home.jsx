import API from '../utils/weatherData';
import { useState } from 'react';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CurrentWeather from '../components/CurrentWeather';
import HourlyWeather from '../components/HourlyWeather';
import DailyForecast from '../components/Dailyforecast';
import WeatherDetailCard from '../components/WeatherDetailCard';
import Barometer from '../assets/images/icons8-barometer-64.png';
import Humidity from '../assets/images/icons8-humidity-50.png';
import Sunrise from '../assets/images/icons8-sunrise-80.png';
import Sunset from '../assets/images/icons8-sunset-80.png';
import UV from '../assets/images/icons8-uv-index-64.png';
import Visibilty from '../assets/images/icons8-visibility-50.png';
import Wind from '../assets/images/icons8-wind-50.png';
import Weather from '../assets/images/icons8-weather-50.png';



const LandingPage = () => {
    const [city, setCity] = useState('');
    const [forecast, setForecast] = useState(null);
    const [error, setError] = useState(null);

    // Load forecast from localStorage on mount
    useEffect(() => {
        const savedForecast = localStorage.getItem('forecast');
        if (savedForecast) {
            setForecast(JSON.parse(savedForecast));
        }
    }, []); // Runs once on component mount

    // Save forecast to localStorage whenever it changes
    useEffect(() => {
        if (forecast) {
            localStorage.setItem('forecast', JSON.stringify(forecast));
        }
    }, [forecast]); // Runs whenever `forecast` changes

    const handleSearchChange = (e) => setCity(e.target.value);

    const handleSearch = () => {
        setError(null);
        API.getCityData(city)
            .then((data) => {
                const currentWeather = {
                    city: city,
                    sunrise: new Date(data.current.sunrise * 1000).toLocaleTimeString(),
                    sunset: new Date(data.current.sunset * 1000).toLocaleTimeString(),
                    dewPoint: data.current.dew_point,
                    uvi: data.current.uvi,
                    temp: data.current.temp,
                    feelsLike: data.current.feels_like,
                    pressure: data.current.pressure,
                    humidity: data.current.humidity,
                    date: new Date(data.current.dt * 1000).toDateString(),
                    iconUrl: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
                    windSpeed: data.current.wind_speed,
                    windDirection: getWindDirection(data.current.wind_deg),
                    min: data.daily[0].temp.min,
                    max: data.daily[0].temp.max,
                    visibility: (data.current.visibility / 1000 * 0.621371).toFixed(1),
                };

                const hourlyData = data.hourly.slice(0, 24).map((hour) => ({
                    time: new Date(hour.dt * 1000).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                    }),
                    temp: hour.temp,
                    feelsLike: hour.feels_like,
                    iconUrl: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,
                }));

                const dailyData = data.daily.map((day) => ({
                    day: new Date(day.dt * 1000).toLocaleDateString('en-US', {
                        weekday: 'long',
                    }),
                    min: day.temp.min,
                    max: day.temp.max,
                    iconUrl: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                }));

                setForecast({ currentWeather, hourlyData, dailyData });
            })
            .catch((err) => {
                setError('City not found. Please try again.');
                console.error(err);
            });
    };

    const getWindDirection = (deg) => {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round(deg / 45) % 8;
        return directions[index];
    };

    return (
        <section className="font-sans p-6 space-y-8">
            {/* Search Section */}
            <div className="flex flex-col items-center mb-6">
                <input
                    onChange={handleSearchChange}
                    value={city}
                    type="text"
                    placeholder="Enter city name..."
                    className="w-full sm:w-96 lg:w-1/2 xl:w-1/3 outline-none bg-white text-gray-600 text-xl px-4 py-3 mb-4 rounded-md shadow-md"
                />
                <button
                    type="button"
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-600"
                >
                    Search
                </button>
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 text-center">{error}</div>}

            {/* Weather Sections */}
            {forecast && (
                <>
                    <CurrentWeather weather={forecast.currentWeather} />
                    <HourlyWeather hourlyData={forecast.hourlyData} />
                    <DailyForecast dailyData={forecast.dailyData} />

                    {/* Additional Weather Details */}
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-8 ">
                        <WeatherDetailCard
                            label="Feels Like"
                            imageUrl={Weather}
                            value={`${forecast.currentWeather.feelsLike}°F`}
                        />
                        <WeatherDetailCard
                            label="UV Index"
                            imageUrl={UV}
                            value={forecast.currentWeather.uvi}
                        />
                        <WeatherDetailCard
                            label="Wind"
                            imageUrl={Wind}
                            value={`${forecast.currentWeather.windSpeed} mph ${forecast.currentWeather.windDirection}`}
                        />
                        <WeatherDetailCard
                            label="Sunrise"
                            imageUrl={Sunrise}
                            value={forecast.currentWeather.sunrise}
                        />
                        <WeatherDetailCard
                            label="Sunset"
                            imageUrl={Sunset}
                            value={forecast.currentWeather.sunset}
                        />
                        <WeatherDetailCard
                            label="Visibility"
                            imageUrl={Visibilty}
                            value={`${forecast.currentWeather.visibility} mi`}
                        />
                        <WeatherDetailCard
                            label="Humidity"
                            imageUrl={Humidity}
                            value={`${forecast.currentWeather.humidity}%`}
                        />
                        <WeatherDetailCard
                            label="Pressure"
                            imageUrl={Barometer}
                            value={`${forecast.currentWeather.pressure} hPa`}
                        />
                    </div>
                </>
            )}
        </section>
    );
};

export default LandingPage;