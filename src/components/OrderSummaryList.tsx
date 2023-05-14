import { CartItem } from "../types/CartItem";
import { OrderItem } from "../types/OrderItem";

interface Props {
  items: OrderItem[];
}

const OrderSummaryList: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map(({ product, quantity }) => (
        <li key={product}>
          <p>
            {quantity}x {product}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default OrderSummaryList;
