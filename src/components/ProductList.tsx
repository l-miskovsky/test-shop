import { useDispatch } from "react-redux";
import { Product } from "../types/Product";
import { addToCart } from "../slices/ShoppingCart";
import Price from "./Price";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    console.log(`ADD ${product.id} to cart.`);
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <img src="./logo192.png" alt={product.name} />
          <h2>{product.name}</h2>
          <Price value={product.unit_price_incl_vat} />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
