const En_Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <nav className="hidden space-x-6 md:flex">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Mayor
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Council
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Reports
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Media Center
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            File a complaint
          </button>
          <button className="rounded bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
            Our services
          </button>
          <button className="flex items-center">
            <img
              src="/flags/maldives.png"
              alt="Language"
              className="h-6 w-6 rounded-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default En_Navbar;
