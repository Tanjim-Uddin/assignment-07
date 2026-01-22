
const Navbar = () => {
    return (
        <>
    <div className="navbar bg-base-100 py-8 shadow-sm">
  <div className="navbar-start ml-10">
   <h1 className="text-4xl text-blue-500 font-bold">Auction<span className="font-bold text-yellow-400">Gallery</span></h1>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-2xl font-medium">Home</a>
    <a className="btn btn-ghost text-2xl font-medium">Auctions</a>
      <a className="btn btn-ghost text-2xl font-medium ">Categories</a>
       <a className="btn btn-ghost text-2xl font-medium">How to works</a>
  </div>
  <div className="navbar-end gap-2">
    <button className=" btn btn-ghost btn-circle">
      <img className="h-10 w-10"src="user-1.png" alt="" />
    </button>
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
  </div>
</div>
        </>
    );
};

export default Navbar;