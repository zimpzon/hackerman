import { useEffect } from "react";
import { pics } from "../../assets";
import "./index.css";

function Terminal(): JSX.Element {
  useEffect(() => {
    ($("#terminal") as any).terminal(
      {
        hello: function (what: any) {
          this.echo("Hello " + what);
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
