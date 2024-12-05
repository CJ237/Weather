
const CurrentWeather = ({ weather }) => (
  <div className=" p-6 bg-blue-100 rounded-lg shadow-lg  text-center max-w-lg mx-auto ">
      <h1 className="text-3xl font-bold">{weather.city.toUpperCase()}</h1>
      <h3 className="text-xl font-semibold">{weather.date}</h3>
      <img src={weather.iconUrl} alt="Weather icon" className="mx-auto" />
      <p className="text-xl">{weather.temp}°F</p>
      <p className="text-xl">Feels like {weather.feelsLike}°F</p>
  </div>
);
export default CurrentWeather;


