interface CalculateProps {
  onClose: () => void;
}
const Calculate = ({ onClose }: CalculateProps) => {
  return (
    <>
      <div
        id="hs-full-screen-modal"
        className="hs-overlay size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
        role="dialog"
        aria-labelledby="hs-full-screen-label"
      >
        <div className="h-full max-w-full max-h-full transition-all duration-500 opacity-100">
          <div className="flex flex-col h-full max-w-full max-h-full bg-white pointer-events-auto dark:bg-neutral-800">
            <div className="flex items-center justify-between px-4 py-3 border-b dark:border-neutral-700">
              <h3
                id="hs-full-screen-label"
                className="py-3 font-bold text-center text-gray-800 dark:text-white"
              >
                Perhitungan Algoritma
              </h3>
              <button
                type="button"
                className="inline-flex items-center justify-center text-gray-800 bg-gray-100 border border-transparent rounded-full size-8 gap-x-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
                aria-label="Close"
                onClick={() => {
                  onClose();
                }}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 p-4 overflow-y-auto">
              <div className="flex flex-col p-4 bg-white border shadow-sm rounded-xl md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  FUZZIFIKASI
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  Detail Fuzzifikasi
                </p>
              </div>
              <div className="flex flex-col p-4 bg-white border shadow-sm rounded-xl md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  INFERENSI
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  Detail Inferensi
                </p>
              </div>
              <div className="flex flex-col p-4 bg-white border shadow-sm rounded-xl md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  DEFUZIFIKASI
                </h3>
                <p className="mt-2 text-gray-500 dark:text-neutral-400">
                  Detail Defuzzifikasi
                </p>
              </div>
            </div>
            <div className="flex items-center justify-end px-4 py-3 mt-auto border-t gap-x-2 dark:border-neutral-700"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculate;
