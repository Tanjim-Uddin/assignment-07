import { useEffect, useState } from 'react';
import { IoHeartOutline } from "react-icons/io5";
import Auction from './Auction.jsx';
const Auctions = ({ handleFavouriteItem, addFavourite,addCurrenBid,handleremoveFavouriteItem }) => {
    const [auctions,setauctions]=useState([]);
   
    useEffect(() =>{
        fetch("items.json").then(res=>(res).json()).then(data=>{
            // console.log(data);
            setauctions(data);
        })
    },
    []); 
    
    return (
        <div className="bg-gray-300 py-10 px-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-950">Active Auctions</h2>
        <p className="text-lg mb-6 ">Discover and bid on extraordinary items</p>

        <div className="flex gap-4 items-start">
            <div className="w-[70%]  ">

      <div className="px-10 py-20 bg-white rounded-2xl text-2xl ">
                  <div className=" border-2 border-black  py-5 px-3 rounded-tl-xl rounded-tr-xl  flex justify-between items-center">
                    <div><h1 className="font-medium ml-4">Items</h1></div>

                    <div className="flex justify-around w-3/5">
                        <h1 className="font-medium">Current Bid</h1>
                        <h1 className="font-medium">Time Left</h1>
                        <h1 className="font-medium">Bid Now</h1>
                    </div>

                </div>
                {/* Auction child component */}
                <Auction auctions={auctions} handleremoveFavouriteItem={handleremoveFavouriteItem}  handleFavouriteItem={handleFavouriteItem} favourites={addFavourite}></Auction>

      </div>
            </div>

            <div className="w-[30%]    bg-white  rounded-2xl ">
                     <div className="text-center py-4  rounded-tl-2xl  flex gap-2  items-center text-3xl justify-center">
                    <IoHeartOutline className=""/>
                    <h2 className="text-blue-900  font-medium">Favorite Items</h2>
                </div>
                <hr  className="border-t-2 w-9/10 mx-auto"/>
                {
                    addFavourite.length===0 ? (<div className="p-5 text-center  shadow-md "><h1 className="font-medium text-xl  px-8 py-2">No favorite yet</h1>
                    <p className="text-[15px]">Click the heart icon on any item to add it to your favorites</p></div> ):
                    (addFavourite.map((item)=>
                    (<div key={item.id}  className="flex justify-between items-start gap-2 w-9/10 mx-auto border-3 rounded-2xl px-5
                    py-4 my-4">
                        <div className="flex gap-5"><div><img src={item.image} className="w-18 h-18 border-3 rounded-2xl" alt="" /></div>
                        <div className="text-lg font-medium flex flex-col gap-0.5">
                            <h1 className="text-xl">{item.description}</h1>
                            <p>${item.currentBidPrice}</p>
                            <p>{item.bidsCount}</p>
                        </div></div>
                        <button onClick={() => {handleremoveFavouriteItem(item)}} className="hover:text-red-400 hover:bg-red-200 bg-gray-300 px-3 py-1.5 text-3xl rounded-full font-medium">X</button>
                    </div>)))
                    
}
                <hr  className="border-t-2 w-9/10 mx-auto"/>
                <div className=" px-3 py-4 flex justify-between w-9/10 mx-auto mt-4 font-medium text-2xl mb-5"><h2>Total bids Amount:</h2>
                <h2>${addCurrenBid}</h2></div>
           
            </div>
        </div>
            
        </div>
    );
};

export default Auctions;
    //  <div className="text-center py-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-md flex  items-center text-2xl justify-center">
    //                 <IoHeartOutline className=""/>
    //                 <h2 className="text-blue-900  font-medium">Favorite Items</h2>
    //             </div><hr  className="border-t-2 w-4/5 mx-auto"/>
    //             <div className="p-5 text-center bg-white  shadow-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"><h1 className="font-medium text-xl  px-8 py-2">No favorite yet</h1>
    //             <p className="text-[15px]">Click the heart icon on any item to add it to your favorites</p></div>
    //             <div className="bg-white px-3 py-4 flex justify-between rounded-bl-2xl rounded-br-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] "><h2>Total bids Amount</h2>
    //             <h2>$0000</h2></div>