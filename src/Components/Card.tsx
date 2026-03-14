import type { Product } from "../Service/ProductsApi";
import './Card.css'

export const Card = ({ product }: { product: Product }) => {
  return (
    <div className="card">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <img className="productImage" src={product.image} alt={product.title} />
    </div>
  );
};
