import { useState } from "react";
import Calculate from "../Calculate";

const Card = ({ title, value }: { title: string; value: string }) => (
  <div className="flex flex-col p-4 bg-white border shadow-sm rounded-xl md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
    <p className="mt-2 text-gray-500 dark:text-neutral-400">{value}</p>
  </div>
);

const PageMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="grid grid-cols-3 mt-4 place-items-center">
        {["20°C", "20°C", "20°C"].map((value, index) => (
          <Card key={index} title="Suhu" value={value} />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-8 place-items-center">
        <div>
          <Card title="Status Pompa Air" value="20" />
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="inline-flex items-center px-4 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg gap-x-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
            aria-controls="hs-full-screen-modal"
            onClick={toggleModal}
          >
            Perhitungan Algoritma
          </button>
        </div>
      </div>
      {isModalOpen && <Calculate onClose={toggleModal} />}
    </>
  );
};

export default PageMain;
