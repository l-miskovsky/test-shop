import { CartItem } from "../types/CartItem";

interface Props {
  cartItems: CartItem[];
}

const OrderSummaryList: React.FC<Props> = ({ cartItems }) => {
  return (
    <ul>
      {cartItems.map(({ product, quantity }) => (
        <li key={product.id}>
          <p>
            {quantity}x {product.name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default OrderSummaryList;
