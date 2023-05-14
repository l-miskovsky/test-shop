import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Your shopping cart is currently empty.</p>
      <button onClick={() => navigate("/")}>Continue shopping</button>
    </div>
  );
};

export default EmptyCart;
