import "./index.css";

interface CpuTabsProps {
  children: React.ReactNode;
}
function CpuTabs(props: CpuTabsProps): JSX.Element {
  return (
    <>
      <div className="tabLine">
        <div className="tabControl">Cores</div>
        <div className="tabControl">Upgrades (0)</div>
      </div>
      <div className="tabBody">{props.children}</div>
    </>
  );
}

export default CpuTabs;
