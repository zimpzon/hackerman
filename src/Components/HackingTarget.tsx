import { ProgressBar } from "react-bootstrap";

interface HackingTargetProps {
  name: string;
  count: number;
}

// Name, count, price, progress bar (background?)
function HackingTarget(props: HackingTargetProps) {
  return (
    <>
      <ProgressBar></ProgressBar>
    </>
  );
}

export default HackingTarget;
