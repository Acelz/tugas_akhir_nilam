const PageHeader = () => {
  return (
    <>
      <header className="flex flex-wrap w-full py-3 text-sm bg-white sm:justify-start sm:flex-nowrap dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
          <a
            className="flex-none text-xl font-semibold sm:order-1 dark:text-white focus:outline-none focus:opacity-80"
            href="#"
          >
            Brand
          </a>
          <div className="flex items-center sm:order-3 gap-x-2">
            <a
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Beranda
            </a>
            <a
              className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
              href="#"
            >
              Riwayat
            </a>
          </div>
          <div
            id="hs-navbar-alignment"
            className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
            aria-labelledby="hs-navbar-alignment-collapse"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
              <a
                className="font-medium text-blue-500 focus:outline-none"
                href="#"
                aria-current="page"
              >
                APLIPENYTANNIM
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default PageHeader;
