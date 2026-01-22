import Button from "../Button";

const Auction = ({ auctions ,handleFavouriteItem,handleremoveFavouriteItem,favourites}) => {
    // console.log(auctions);
    
    return (
        <>
            {
                auctions.map((auction, index) => {
                    const isLast = index === auctions.length - 1;

                return (

                         
                    <div className={` text-2xl font-medium flex gap-20 items-center   p-6   bg-white border-l-2 border-r-2 border-b-2 border-black ${isLast ? "rounded-bl-2xl rounded-br-2xl " : ""}`} key={auction.id}>

                   <div className="flex gap-5 items-center w-[45%] ">
                 <img className="w-22 h-20 mr-4" src={auction.image} alt="none" />
               <h3>{auction.description}</h3>
                    </div>

                    <div className="flex gap-5 items-center w-[55%] justify-between mr-10">
                    <h4>${auction.currentBidPrice}</h4>
                    <h2>{auction.timeLeft}</h2>
                    <Button handleFavouriteItem={handleFavouriteItem}  item={auction} handleremoveFavouriteItem={handleremoveFavouriteItem} favourites={favourites}></Button>
                    </div>
                    </div>
                    )
                }

                )
         }
        </>
    );
};

export default Auction;