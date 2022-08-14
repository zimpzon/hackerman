function HintText() {
  const hint1: string = "You are hard at work at your desk, clicking keys and moving mice.";

  const hint2: string = "All your clicking has paid off, you can now afford your very own CPU. The first of many.";

  return (
    <>
      <div className="HintText">
        <i>"{hint1}"</i>
      </div>
    </>
  );
}

export default HintText;
