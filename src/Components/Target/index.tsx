interface TargetProps {
  name: string;
  count: number;
  price: number;
}

function Target({ name, count, price }: TargetProps) {
  return (
    <>
      <div className="target">
        <image></image>
        <div>{name}</div>
        <div>{count}</div>
        <div>${price}</div>
      </div>
    </>
  );
}

export default Target;
