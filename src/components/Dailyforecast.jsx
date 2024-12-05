const DailyForecast = ({ dailyData }) => (
    <div className="mt-6 p-4  m-10 max-w-7xl items-center mx-auto bg-blue-300 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">8-Day Forecast</h2>
        <div className="space-y-4 ">
            {dailyData.map((day, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-blue-100 rounded-lg"
                >
                    <p className="text-lg font-semibold">{day.day}</p>
                    <img src={day.iconUrl} alt="Weather icon "className="animate-wiggle" />
                    <p>
                        {day.min}°F / {day.max}°F
                    </p>
                </div>
            ))}
        </div>
    </div>
);
export default DailyForecast;