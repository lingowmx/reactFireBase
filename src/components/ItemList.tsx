import { Item } from "./Item";
import { Product } from "../types";
import { toCapital } from "../utils/helpers";

interface ItemListProps {
  items: Product[];
  titulo: string;
}
//Aqui uso REACT FC para dejar claro que itemList es un componente de react
export const ItemList = ({ items, titulo }: ItemListProps) => {
  return (
    <div className="w-72 mx-auto">
      <h2>{toCapital(titulo || "Productos")}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          return (
            <div key={item.id} className="flex justify-center items-center">
              <Item item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
