import { Item } from "./Item";
import { Product } from "../types";
import { toCapital } from "../utils/helpers";

interface ItemListProps {
  items: Product[];
  titulo: string
}
//Aqui uso REACT FC para dejar claro que itemList es un componente de react
export const ItemList = ({ items, titulo }: ItemListProps) => {
  return (
    <div className="w-full">
      <h2>{toCapital(titulo || "Productos")}</h2>
      <ul className="w-full flex flex-col items-center">
        {items.map((item) => {
          return <Item item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
