import CardList from "../cardList/index";
const Card = ({ cardList }) => {
  return (
    <div className="mt-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {cardList.map(
        (list, index) => {
          return (
            <section key={index}>
              <div className="md:flex mt-2">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={list.icon}
                  />
                </div>
                <div className="p-8">
                  <div className="block mt-1 text-lg leading-tight font-medium text-black">
                    <h1>{list.name}</h1>
                  </div>
                  <div className="uppercase mt-2 tracking-wide text-sm text-indigo-500 font-semibold">
                    {list.weather} - {list.description}
                  </div>
                  <p className="mt-2 text-gray-1000">{list.temp} °C</p>
                  <p className="mt-2 text-gray-500">{list.date}</p>
                </div>
              </div>
            </section>
          );
        }
        // Only do this if items have no stable IDs
      )}
    </div>
  );
};

export default Card;
