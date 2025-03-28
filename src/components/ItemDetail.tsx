import { Product } from "../types";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
interface itemProps {
  item: Product;
}

export const ItemDetail: React.FC<itemProps> = ({ item }) => {
  return (
    <div className="w-72 flex gap-2">
      <div className="flex justify-center items-center">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold">{item.name}</h2>
        <p className="font-stretch-100%">{item.description}</p>
        <span className="text-sm font-semibold">{item.category}</span>
        <div className="w-36 flex justify-between text-center">
        <PrevButton/>
        <NextButton/>
        </div>
      </div>
    </div>
  );
};
