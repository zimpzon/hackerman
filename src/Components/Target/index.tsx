interface TargetProps {
  name: string;
  count: number;
  price: number;
}

function Target({ name, count, price }: TargetProps) {
  return (
    <>
      <div className="target">
        <div className="targetBulliesImage" />
        <div className="targetData">
          <div className="targetCount">{count}</div>
          <div className="targetName">{name}</div>
          <div className="targetPrice">${price}</div>
        </div>
      </div>
    </>
  );
}

export default Target;
