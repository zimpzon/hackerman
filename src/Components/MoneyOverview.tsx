import { MoneyState } from "../Code/GameStateTypes";

function MoneyOverview(state: MoneyState) {
  return (
    <>
      <div className="MoneyOverview">
        <div className="currentMoney">${state.amount.toString()}</div>
        <div>per second: ${state.incomePerSec.toString()}</div>
      </div>
    </>
  );
}

export default MoneyOverview;
