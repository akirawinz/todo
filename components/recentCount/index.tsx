const RecentCount = ({ countData, clearAllData }: any) => (
  <div className="max-w-md mx-auto mt-8 bg-yellow-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <span className="float-left ml-8 mt-2"> Recent count : {countData} </span>
    <button
      className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={(e) => {
        e.preventDefault();
        clearAllData();
      }}
    >
      clear
    </button>
  </div>
);

export default RecentCount;
