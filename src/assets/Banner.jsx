
const Banner = () => {
    return (
        <>
          <div className="bg-[url('/Banner-min.jpg')] h-140 bg-cover bg-center flex flex-col  items-start justify-center space-y-4 pl-20">
            <h1 className="font-bold text-4xl text-white">Bid on Unique Items from <br />Around the World</h1>
            <p className="text-white text-lg mb-2">Discover rare collectibles, luxury goods, and vintage <br/> treasures in our curated auctions</p>
            <button className="bg-white font-medium mt-2 rounded-full pl-5 pr-3 pt-1 pb-1">Explore more</button></div>  
        </>
    );
};

export default Banner;