import { useNavigate } from "react-router-dom";
import Button from "./Button";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Your shopping cart is currently empty.</p>
      <Button onClick={() => navigate("/products")}>Continue shopping</Button>
    </div>
  );
};

export default EmptyCart;
