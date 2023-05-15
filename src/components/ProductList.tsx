import { Product } from "../types/Product";
import ProductListItem from "./ProductListItem";

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <ul className="gap-8 flex flex-wrap">
      {products.map((product) => (
        <li key={product.id}>
          <ProductListItem product={product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
