import { useDispatch } from "react-redux";
import { Product } from "../types/Product";
import { addToCart } from "../slices/ShoppingCart";
import Price from "./Price";
import Button from "./Button";

interface Props {
  product: Product;
}

const ProductListItem: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    console.log(`ADD ${product.id} to cart.`);
  };

  const randomizedWidth = 420 + Math.round(Math.random() * 10);
  const randomizedHeight = 260 + Math.round(Math.random() * 10);
  return (
    <>
      <img
        src={`https://placehold.co/${randomizedWidth}x${randomizedHeight}/png`}
        alt={product.name}
        className="h-[265px] w-[425px] object-contain"
      />
      <h2 className="py-2 font-bold">{product.name}</h2>
      <div className="flex items-center justify-between">
        <Price value={product.unit_price_incl_vat} />
        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
      </div>
    </>
  );
};

export default ProductListItem;
