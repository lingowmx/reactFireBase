import { Product } from "../types";
import { getData } from "../utils/getData";
import { ItemCounter } from "./ItemCounter";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
import { useEffect, useState } from "react";
interface itemProps {
  item: Product;
}

export const ItemDetail = ({ item }: itemProps) => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const data = await getData();
        const related = data.filter(
          (prod) =>
            prod.category.toLowerCase() === item.category.toLowerCase() &&
            prod.id !== item.id
        );
        console.log(related);
        setRelatedProducts(related);
      } catch (error) {
        console.error("Error fetching related products", error);
      }
    };
    fetchRelatedProducts();
  }, [item]);

  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    if (quantity < item.stock) {
      setQuantity(quantity + 1);
    }
  };

  return (
    <section>
      <div className="w-72 flex flex-col border border-black rounded-lg gap-2">
        <div className="flex justify-center items-center">
          <img src={item.image} alt={item.name} className="" />
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold">{item.name}</h2>
          <p className="font-stretch-100%">{item.description}</p>
          <div className="flex justify-between">
            <span className="text-sm font-semibold">{item.category}</span>
            <ItemCounter
              quantity={quantity}
              handleRemove={handleRemove}
              handleAdd={handleAdd}
            />
          </div>
          {/* <div className="w-36 flex justify-between text-center">
          <PrevButton />
          <NextButton />
        </div> */}
        </div>
      </div>
      <div>
        {relatedProducts.length > 0 && (
          <div>
            <h3>Productos relacionados</h3>
            {relatedProducts.map((prod) => (
              <div key={prod.id}>{prod.name}</div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
