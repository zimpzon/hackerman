import { CurrentMoney } from "../Code/GameStateTypes";

interface MoneyOverviewProps {
  money: CurrentMoney
}

function MoneyOverview(props: MoneyOverviewProps) {
  const ss = ''
  return (
    <>
      <div className="currentMoney">${props.money.amount.toString()}</div>
      <div>per second: $0</div>
    </>
  );
}

export default MoneyOverview;
