import { useSelector } from "react-redux";
import Button from "./Button";
import { selectCartSize } from "../slices/ShoppingCart";
import { useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartBadge = () => {
  const cartSize = useSelector(selectCartSize);
  const navigate = useNavigate();

  if (cartSize === 0) {
    return null;
  }

  return (
    <Button onClick={() => navigate("/cart")}>
      <ShoppingCartOutlinedIcon />
      <span className="ml-2 inline-block whitespace-nowrap rounded-full bg-red-700 p-1 text-[0.75em] leading-none">
        {cartSize}
      </span>
    </Button>
  );
};

export default CartBadge;
