import { Item } from "./Item";
import { Product } from "../types";

interface ItemListProps {
  items: Product[];
}
//Aqui uso REACT FC para dejar claro que itemList es un componente de react
export const ItemList:React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="w-full">
      <h2>Products</h2>
      <ul className="w-full flex flex-col items-center">
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
