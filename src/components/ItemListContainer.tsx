import { getData } from "../utils/getData";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { Product } from "../types";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Product[]>([]);
  const category = useParams().category;
  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setItems(
          category ? data.filter((prod) => prod.category.toUpperCase() === category.toUpperCase()) : data
        );
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [category]);
  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="bg-gray-300">
      <ItemList items={items} />
    </div>
  );
};
