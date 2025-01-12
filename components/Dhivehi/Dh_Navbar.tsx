import Image from "next/image";
import Link from "next/link";

const Dh_Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4 font-dhivehi text-xl">
          <button className="rounded bg-mediumBlue px-4 py-2 text-white hover:bg-lightBlueGreen">
            ޝަކުވާ ހުށައެޅުމަށް
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <nav className="hidden text-xl space-x-12 md:mr-2 lg:mr-8 md:flex font-dhivehi">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              މީޑިޔާ ސެންޓަރ
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              އިވެންޓް
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500 ">
              ޚިދުމަތް
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              ކައުންސިލް
            </a>
          </nav>
          <Link href="/">
            <Image src="/images/logo.png" alt="Logo" width={70} height={70} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Dh_Navbar;
