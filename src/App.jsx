import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import './App.css'
import Auctions from './assets/Auctions/Auctions'
import Banner from './assets/Banner'
import Footer from './assets/Footer'
import Navbar from './assets/Navbar'

// 
function App() {
  const [addFavourite, setAddFavourite] = useState([]);
  const [addCurrenBid, setAddCurrentBid] = useState(0);
  const handleFavouriteItem=(item)=>{
   toast.success(`${item.title} added to favourites!`);
    setAddFavourite([...addFavourite,item]);
    setAddCurrentBid(addCurrenBid + item.currentBidPrice);
    
    // setLiked(!liked);
  }
  const handleremoveFavouriteItem=(item)=>{
    const newFavouriteList=addFavourite.filter((favItem)=>favItem.id !== item.id);
    setAddFavourite(newFavouriteList);
    setAddCurrentBid(addCurrenBid - item.currentBidPrice);
  }

  return (
    <>
    <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
      <Navbar></Navbar>
      <Banner></Banner>
      <Auctions handleFavouriteItem={handleFavouriteItem} addFavourite={addFavourite} addCurrenBid={addCurrenBid} handleremoveFavouriteItem={handleremoveFavouriteItem}></Auctions>
      <Footer></Footer>
    </>
  )
}

export default App
