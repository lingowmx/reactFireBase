import { Link } from "react-router-dom";
import { Product } from "../types";

interface ItemProps {
  item: Product
}

export const Item:React.FC<ItemProps> = ({ item }) => {
  return (
    <li className="w-50 flex flex-col mb-2 rounded-lg justify-center items-center border border-black ">
      <img className="rounded-t-lg" src={item.image} alt={item.name} />
      <div
        className="w-full flex flex-col justify-center items-center"
        key={item.id}
      >
        <p className="w-full text-center">{item.name}</p>
        <span>${item.price}</span>
        <div className="w-full flex items-start ml-2 mb-2 mt-2">
          <Link
            className="w-20 border border-white rounded-lg bg-purple-300 text-black cursor-pointer"
            to={`/item/${item.id}`}>
            More
          </Link>
        </div>
      </div>
    </li>
  );
};
