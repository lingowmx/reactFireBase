import { useEffect, useState } from "react";
import { Product } from "../types";
import { getDataId } from "../utils/getData";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

// interface itemIdProps {
//   id: number;
// }

export const ItemDetailContainer = () => {
  const [item, setItem] = useState<Product | null>(null);
  const id = useParams().id
  // console.log(id)
  useEffect(() => {
    const fetchData = async () => { 
      const data = await getDataId(Number(id));
      // console.log(data);
      setItem(data);
    };
    fetchData();
  }, [id]);

  return <div className="flex items-center justify-center mt-4">{item && <ItemDetail item={item} />}</div>;
};
