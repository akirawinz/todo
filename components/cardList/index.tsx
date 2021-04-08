import Card from "@components/card";
const CardList = ({ cardList }: any) => {
  if (cardList.length === 0) {
    return (
      <>
        <div className="mt-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          No entry :)
        </div>
      </>
    );
  } else {
    return <Card cardList={cardList} />;
  }
};

export default CardList;
