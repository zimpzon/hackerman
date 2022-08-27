import images, { icons } from "../../assets";
import "./index.css";

interface NftListProps {
  ownedNfts: string[];
  onClick: (key: string) => void;
}

function NftList(props: NftListProps): JSX.Element {
  const iconQuestionMark = icons.get("question-mark");
  const filterOwned = "";
  const filterUnknown = "contrast(0.1) invert(1)";

  function img(k: string, v: string) {
    const isOwned = props.ownedNfts?.includes(k);

    return (
      <img
        alt="abc"
        key={k}
        src={isOwned ? v : iconQuestionMark}
        onClick={() => {
          props.onClick(k);
        }}
        style={{
          width: "100px",
          height: "100px",
          margin: "3px",
          border: "3px outset grey",
          filter: isOwned ? filterOwned : filterUnknown,
        }}
      />
    );
  }

  return <>{Array.from(images).map(([k, v]) => img(k, v))}</>;
}

export default NftList;
