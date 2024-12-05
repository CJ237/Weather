

const AboutPage = () => {

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-6 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">About Our Weather App</h1>
          <p className="mt-2 text-lg">Discover why we built it and what it offers.</p>
        </div>
      </header>
 
      {/* Main Content */}
      <main className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Vision Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              The weather impacts our lives every single day. Whether planning a family picnic, a long drive, or a simple walk
              in the park, knowing what the skies hold is vital. Our weather app was created to empower users with precise,
              real-time weather data, ensuring you can make informed decisions no matter the situation.
            </p>
          </section>

          {/* Why We Built This Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Why We Built This</h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
              <li>
                <strong>Simplicity:</strong> Most weather apps are cluttered. We wanted a clean, user-friendly experience.
              </li>
              <li>
                <strong>Accuracy:</strong> Trustworthy and real-time forecasts are essential, and we prioritized delivering reliable data.
              </li>
              <li>
                <strong>Community:</strong> This app was designed with families and communities in mind, ensuring you can plan with peace of mind.
              </li>
              <li>
                <strong>Innovation:</strong> Combining modern design with powerful features, our app bridges convenience and technology.
              </li>
            </ul>
          </section>

          {/* Mission Section */}
          <section className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              We aim to provide a weather solution that’s not just functional but also delightful to use. Whether you’re a
              busy parent, an outdoor enthusiast, or someone just trying to avoid the rain, our app is built for you.
            </p>
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-6 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg">© 2024 Weather App. Built for everyone under the sun.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
