const En_Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-30 text-white">
          <div className="text-center">
            <p className="text-sm uppercase">Call us on our Hotline</p>
            <h1 className="mt-2 text-4xl font-bold">1622</h1>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-2 gap-6 py-8 px-6 md:grid-cols-4">
          <div className="text-center">
            <svg
              className="mx-auto h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 016 6v4a6 6 0 11-12 0V8a6 6 0 016-6z" />
            </svg>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">252,768</h2>
            <p className="text-lg text-gray-600">Population</p>
          </div>
          <div className="text-center">
            <svg
              className="mx-auto h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 016 6v4a6 6 0 11-12 0V8a6 6 0 016-6z" />
            </svg>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">46,251</h2>
            <p className="text-lg text-gray-600">Households</p>
          </div>
          <div className="text-center">
            <svg
              className="mx-auto h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 016 6v4a6 6 0 11-12 0V8a6 6 0 016-6z" />
            </svg>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">635</h2>
            <p className="text-lg text-gray-600">Area (Hectares)</p>
          </div>
          <div className="text-center">
            <svg
              className="mx-auto h-10 w-10 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 016 6v4a6 6 0 11-12 0V8a6 6 0 016-6z" />
            </svg>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">18</h2>
            <p className="text-lg text-gray-600">Constituencies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default En_Home;
