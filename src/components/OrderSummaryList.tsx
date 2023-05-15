import { OrderItem } from "../types/OrderItem";

interface Props {
  items: OrderItem[];
}

const OrderSummaryList: React.FC<Props> = ({ items }) => {
  return (
    <ul className="divide-y-2 divide-gray-200">
      {items.map(({ product, quantity }) => (
        <li key={product} className="p-4">
          <p>
            <span>{quantity}x</span>
            <span className="pl-8">{product}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default OrderSummaryList;
