const WeatherDetailCard = ({ label, value, className, imageUrl}) => {
    return (
        <div className={`p-4 sm:p-6 md:p-8  bg-blue-100 rounded-lg shadow-lg text-center max-w-lg ${className}`}>
            <img src={imageUrl} className="animate-pulse"/>
            <h3 className="sm:text-sm md:text-md lg:text-lg text-lg font-semibold text-gray-700">{label}</h3>
            <p className="text-lg font-bold text-gray-900">{value}</p>
        </div>
    );
};

export default WeatherDetailCard;

