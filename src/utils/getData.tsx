import { Product } from "../types";

export const getData = async (): Promise<Product[]> => {
  const productos = "/mockaroo_data.json";
  try {
    const response = await fetch(productos);
    if (!response.ok) {
      throw new Error("Loading error");
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Loading error", error);
    return [];
  }
};

export const getDataId = async (id: number): Promise<Product | null> => {
  const productos = "/mockaroo_data.json";
  try {
    const response = await fetch(productos);
    if (!response.ok) {
      throw new Error("error not found");
    }
    const data: Product[] = await response.json();
    const item = data.find((el) => el.id === id) || null
    return item
  } catch (error) {
    console.error("Loading error", error);
    return null
  }
};

export const getDataCategory = async (category: string): Promise<Product | null> => {
  const productos = "/mockaroo_data.json";
  try {
    const response = await fetch(productos);
    if (!response.ok) {
      throw new Error("error not found");
    }
    const data: Product[] = await response.json();
    const item = data.find((el) => el.category === category) || null
    return item
  } catch (error) {
    console.error("Loading error", error);
    return null
  }
};