function ProductCard({ card }) {
  return (
    <>
      <div className="flex w-[10rem] flex-col aling-start gap-[0.5]">
        <img
          className="h-[11rem] self-stretch aspect-[176.71/176.71]"
          src={card.img}
          alt={card.title}
        />
        <div className="flex justify-between aling-start self-stretch carousel-font text-xs p-2">
          <div className="flex w-[7rem] flex-col align-start gap-[0.5rem] ">
            <h1>{card.title}</h1>
            <p className="text-[#646464]">{card.material}</p>
          </div>
          <span>{card.price}</span>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
