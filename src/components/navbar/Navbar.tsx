function Navbar() {
  return (
    <>
      <nav className="w-screen flex flex-wrap items-center justify-between bg-blue-200">
        <img src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />
        <div className="flex md:hidden">
          <button id="hamburger">
            <img
              className="toggle block"
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt=""
            />
            <img
              className="toggle hidden"
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt=""
            />
          </button>
        </div>
        <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
          <a
            href=".tt"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Home
          </a>
          <a
            href=".tt"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Products
          </a>
          <a
            href=".tt"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Pricing
          </a>
          <a
            href=".tt"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
