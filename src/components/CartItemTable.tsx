import { useDispatch } from "react-redux";
import { deleteFromCart, updateQuantity } from "../slices/ShoppingCart";
import EmptyCart from "./EmptyCart";
import { CartItem } from "../types/CartItem";
import Price from "./Price";
import { useMemo } from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
interface Props {
  cartItems: CartItem[];
}

const CartItemTable: React.FC<Props> = ({ cartItems }) => {
  const dispatch = useDispatch();

  const vatSummary = useMemo(() => {
    const vatGroupTotals = cartItems.reduce((acc, { product, quantity }) => {
      const currentTotal = acc[product.vat_category]?.total || 0;
      const sumCost = product.unit_price_incl_vat * quantity;
      const vat = sumCost - sumCost / (1 + product.vat_category / 100);
      return {
        ...acc,
        [product.vat_category]: {
          rate: product.vat_category,
          total: currentTotal + vat,
        },
      };
    }, {} as Record<number, { rate: number; total: number }>);
    const vatTotal = Object.values(vatGroupTotals).reduce(
      (acc, { total }) => acc + total,
      0
    );
    const cartTotal = cartItems.reduce(
      (acc, { product, quantity }) =>
        acc + product.unit_price_incl_vat * quantity,
      0
    );
    return {
      vatGroups: Object.values(vatGroupTotals),
      total: cartTotal,
      vatTotal,
    };
  }, [cartItems]);

  const handleQuantityChange = (productId: number, quantity: number) => {
    const productStock = cartItems.find((item) => item.product.id === productId)
      ?.product.stock_quantity;
    if (!productStock) return;

    if (quantity === 0) {
      dispatch(deleteFromCart(productId));
    } else if (quantity > productStock) {
      dispatch(updateQuantity({ productId, quantity: productStock }));
    } else {
      dispatch(updateQuantity({ productId, quantity }));
    }
  };

  const handleDeleteFromCart = (productId: number) => {
    dispatch(deleteFromCart(productId));
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="rounded-l-md py-3 pl-4 text-left">Item</th>
            <th className="py-3 text-left">Quantity</th>
            <th className="py-3 text-right">Unit Price incl. VAT</th>
            <th className="py-3 text-right">VAT</th>
            <th className="py-3 pr-4 text-right">Total</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-200 border-b-2 border-gray-200">
          {cartItems.map(({ product, quantity }) => (
            <tr key={product.id}>
              <td className="py-3 pl-4">{product.name}</td>
              <td className="flex items-center gap-2 py-3">
                <input
                  className="h-12 w-12 rounded border border-gray-400 text-center"
                  type="number"
                  value={quantity}
                  onChange={(event) =>
                    handleQuantityChange(
                      product.id,
                      parseInt(event.target.value)
                    )
                  }
                />
                <button onClick={() => handleDeleteFromCart(product.id)}>
                  <DeleteOutlinedIcon />
                </button>
              </td>
              <td className="py-3 text-right">
                <Price value={product.unit_price_incl_vat} />
              </td>
              <td className="py-3 text-right">{product.vat_category}%</td>
              <td className="py-3 pr-4 text-right text-lg">
                <Price value={product.unit_price_incl_vat * quantity} />
              </td>
            </tr>
          ))}
          <tr>
            <td />
            <td />
            <td />
            <td className="py-3 text-right">Total excl. VAT</td>
            <td className="py-3 pr-4 text-right text-lg">
              <Price value={vatSummary.total - vatSummary.vatTotal} />
            </td>
          </tr>
          {vatSummary.vatGroups
            .filter(({ total }) => total > 0)
            .map(({ rate, total }) => (
              <tr key={rate}>
                <td />
                <td />
                <td />
                <td className="py-3 text-right">VAT {rate}%</td>
                <td className="py-3 pr-4 text-right text-lg">
                  <Price value={total} />
                </td>
              </tr>
            ))}
          <tr>
            <td />
            <td />
            <td />
            <td className="py-3 text-right">Total</td>
            <td className="py-3 pr-4 text-right text-lg">
              <Price value={vatSummary.total} bold />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CartItemTable;
