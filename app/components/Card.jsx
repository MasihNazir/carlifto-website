function Card() {
  return (
    <>
      <div className="card m-2 h-[350px] w-[200px] rounded-lg bg-white shadow-lg">
        <div className="top">
          <img
            className="h-[200px] w-[200px] object-cover  p-2"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204"
            alt="img"
          />
        </div>
        <div className="bottom bg- flex flex-col items-start justify-center p-3">
          <div className="title my-1 text-xs font-semibold">
            Apple iPhone 13 (128GB) - Midnight
          </div>
          <div className="category my-1 text-xs font-light">
            5.4 cm (6.1-inch) display1
          </div>

          <div className="pricing flex items-center">
            <div className="price ">$1000</div>
            <div className="ml-2 text-xs ">
              $<del>1320</del>
            </div>
          </div>
          <div className="my-2 flex items-center">
            <button className="mr-1 rounded-lg border px-3 py-1 text-xs ">
              Buy Now
            </button>
            <button className="rounded-lg border px-3 py-1 text-xs ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
