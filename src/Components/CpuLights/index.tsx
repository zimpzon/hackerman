import { useRef } from "react";
import { usePixi } from "../../Code/pixiHook";

function CpuLights(): JSX.Element {
  const ref = useRef<any>(null);
  const pixies = usePixi();

  if (pixies) {
    pixies.imageEffectUniforms.w = ref.current.clientWidth;
    pixies.imageEffectUniforms.h = ref.current.clientHeight;
  }

  return (
    <canvas
      ref={ref}
      style={{ width: "100%", height: "100%" }}
      id="pixiCanvas"
    />
  );
}

export default CpuLights;
