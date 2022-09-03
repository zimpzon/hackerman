import "./index.css";

function Buttcoins(): JSX.Element {
  return (
    <>
    <div className="coinArea">
    <div className="rebootCoins">
          <div>Buttcoins gained on reboot: 0</div>
          <div className="progressBack">
          <div className="progressFill" style={{height:"24px",width:"20%"}}/>
        </div>      
        <button>Reboot</button>
    </div>
    <div className="currentCoins">
        <div id="buttCoinText">0 / x</div>
        <div id="buttCoinTextLabel">Buttcoin</div>
      </div>
      <div className="">
    </div>
    </div>
    </>
  );
}

export default Buttcoins;
