import { useEffect, useState } from "react";
import { getProducts } from "./Service/ProductsApi";
import type { Product } from "./Service/ProductsApi";
import { Card } from "./Components/Card";
import "./App.css";

export const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  console.log(products);
  return (
    <div>
      <h1>Categorias</h1>
      <nav>
        {categories.map((category) => (
          <button
            className="ButtonCategory"
            key={category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      <div>
        <h2>Productos</h2>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
