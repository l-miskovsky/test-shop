import { Product } from "../types/Product";

interface Props {
  products: Product[];
  onAddToCart: (productId: number) => void;
}

const ProductList: React.FC<Props> = ({ products, onAddToCart }) => {
  const handleAddToCart = (productId: number) => {
    onAddToCart(productId);
    // dispatch({ type: "ADD_TO_CART", payload: productId })
    console.log(`ADD ${productId} to cart.`);
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src="./logo192.png" alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.unit_price_incl_vat.toFixed(2)} €</p>
          <button onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
