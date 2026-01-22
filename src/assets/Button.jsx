import { useEffect, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Button = ({ handleFavouriteItem, handleremoveFavouriteItem, item, favourites }) => {
  const isFavourite = favourites.some(fav => fav.id === item.id);
  const [disabled, setDisabled] = useState(false);
  
useEffect(() => {
    if (!isFavourite) {
      setDisabled(false);
    }
  }, [isFavourite]);

  const handleClick = () => {
    handleFavouriteItem(item);
    setDisabled(true); // disable until removed
  };

  return (
    <button
      disabled={disabled}
      onClick={() => {
        isFavourite ? handleremoveFavouriteItem(item) : handleClick();
      }}
      className={`p-2 ${disabled ? "cursor-not-allowed" : ""}`}
    >
      {isFavourite ? (
        <IoIosHeart className="text-red-500 text-3xl" />
      ) : (
        <IoIosHeartEmpty className="text-gray-500 text-3xl cursor-pointer" />
      )}
    </button>
  );
};

export default Button;
