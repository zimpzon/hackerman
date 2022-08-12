function HintText() {
  console.log("hint");

  const hint1: string =
    "Boring work is boring... If only you had a computer, you could hack stuff and get rich...";

  const hint2: string =
    "Nice! Time to buy some hacking targets on the dark web...";

  return (
    <>
      <div className="HintText">
        <i>"{hint1}"</i>
      </div>
    </>
  );
}

export default HintText;
