interface Props {
  value: number;
  currency?: string;
  decimals?: number;
  bold?: boolean;
  large?: boolean;
}
const Price: React.FC<Props> = ({
  value,
  currency = "€",
  decimals = 2,
  bold = false,
  large = false,
}) => {
  return (
    <span className={`${bold ? "font-bold" : ""} ${large ? "text-3xl" : ""}`}>
      {value.toFixed(decimals)} {currency}
    </span>
  );
};

export default Price;
