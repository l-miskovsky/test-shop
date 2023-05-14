interface Props {
  value: number;
  currency?: string;
  decimals?: number;
  bold?: boolean;
}
const Price: React.FC<Props> = ({
  value,
  currency = "€",
  decimals = 2,
  bold,
}) => {
  return (
    <span className={`${bold && "font-bold"}`}>
      {value.toFixed(decimals)} {currency}
    </span>
  );
};

export default Price;
