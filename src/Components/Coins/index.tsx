import GameState from "../../Code/GameState";
import "./index.css";

function Coins(): JSX.Element {
  const progress = GameState.current.coinProgress;
  return (
    <>
      <div className="coinArea">
        <div className="rebootCoins">
          <div>Coins gained on reboot: 0</div>
          <div className="progressBack">
            <div
              className="progressFill"
              style={{ height: "24px", width: progress * 100 + "%" }}
            />
          </div>
          <button>Reboot</button>
        </div>
        <div className="currentCoins">
          <div id="buttCoinText">0 / x</div>
          <div id="buttCoinTextLabel">Coin</div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}

export default Coins;
