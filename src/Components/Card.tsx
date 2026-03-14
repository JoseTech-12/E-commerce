import type { Product } from "../Service/ProductsApi"

export const Card = ({ product }: { product: Product }) => {
  return (
    <div>
     <h2>{product.title}</h2>
     <p>Price: ${product.price.toFixed(2)}</p>
     <p>Category: {product.category}</p>
     <img src={product.image} alt={product.title} />
    </div>
  )
}
