interface Product {
  id: number;
  title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}   


export const getProducts = async  (): Promise<Product[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
   
    const products = await response.json();
    return products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};