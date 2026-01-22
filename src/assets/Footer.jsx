
const Footer = () => {
    return (
        <div className="flex flex-col items-center pb-15 bg-gray-100 pt-15">
           <h1 className="text-3xl text-blue-500 font-bold">Auction<span className="font-bold text-yellow-400">Gallery</span></h1> 
           <div className="flex gap-3 mt-4 mb-4 text-xl">
            <p>Bid.</p>
            <p>win.</p>
            <p>Own.</p>
           </div>
           <div className="flex gap-5 mb-4">
             <a className="btn btn-ghost  font-light">Home</a>
    <a className="btn btn-ghost  font-light">Auctions</a>
      <a className="btn btn-ghost  font-light">Categories</a>
       <a className="btn btn-ghost font-light">How to works</a>
           </div>
           <h3>©2025AuctionHub. All rights reserved.</h3>
        </div>
    );
};

export default Footer;