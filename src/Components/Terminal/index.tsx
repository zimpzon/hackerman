import { useEffect } from "react";
import "./index.css";

function Terminal(): JSX.Element {
  useEffect(() => {
    ($("#terminal") as any).terminal(
      {
        hello: function (what: any) {
          this.echo("Hello, " + what + ". Wellcome to this terminal.");
        },
      },
      {
        greetings: "Welcome back CyberPug",
        onBlur: function (t: any) {
          return false;
        },
      }
    );
  });

  return (
    <>
      <div className="tv">
        <div id="terminal"></div>
      </div>
    </>
  );
}

export default Terminal;
