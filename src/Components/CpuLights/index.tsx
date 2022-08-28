import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePixi } from "../../Code/pixiHook";

function CpuLights(): JSX.Element {
  const ref = useRef<any>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const pixies = usePixi();

  useEffect(() => {
    if (pixies) {
      pixies.imageEffectUniforms.w = width;
      pixies.imageEffectUniforms.h = height;
      console.log(width);
    }
  }, []);

  useLayoutEffect(() => {
    setWidth(ref.current.clientWidth);
    setHeight(ref.current.clientHeight);
  }, []);
  return (
    <canvas
      ref={ref}
      style={{ width: "100%", height: "200px" }}
      id="pixiCanvas"
    />
  );
}

export default CpuLights;
