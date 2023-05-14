import { useDispatch } from "react-redux";
import { deleteFromCart, updateQuantity } from "../slices/ShoppingCart";
import EmptyCart from "./EmptyCart";
import { CartItem } from "../types/CartItem";
import Price from "./Price";

interface Props {
  cartItems: CartItem[];
}

const CartItemList: React.FC<Props> = ({ cartItems }) => {
  const dispatch = useDispatch();

  //TODO: some validity checks
  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
    console.log(`UPDATE ${productId} quantity to ${quantity}.`);
  };

  const handleDeleteFromCart = (productId: number) => {
    dispatch(deleteFromCart(productId));
    console.log(`DELETE ${productId} from cart.`);
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <ul>
      {cartItems.map(({ product, quantity }) => (
        <li key={product.id}>
          <p>{product.name}</p>
          <input
            type="number"
            value={quantity}
            onChange={(event) =>
              handleQuantityChange(product.id, parseInt(event.target.value))
            }
          />
          <button onClick={() => handleDeleteFromCart(product.id)}>
            DELETE
          </button>
          <Price value={product.unit_price_incl_vat} />
          <p>{product.vat_category}%</p>
          <Price value={product.unit_price_incl_vat * quantity} />
        </li>
      ))}
    </ul>
  );
};

export default CartItemList;
