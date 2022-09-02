import * as PIXI from "pixi.js";
import { useEffect, useState } from "react";
import { icons } from "../assets";
import GameState from "./GameState";
import bl from "./bl";

type pixiesType = {
  app: PIXI.Application;
  imageEffectFilter: PIXI.Filter;
  imageEffectUniforms: any;
  imageEffectSprite: PIXI.Sprite;
};

export function usePixi() {
  const [pixies, setPixies] = useState<pixiesType>();

  useEffect(() => {
    const pixiCanvas = document.getElementById(
      "pixiCanvas"
    ) as HTMLCanvasElement;
    if (!pixiCanvas) throw new Error("pixiCanvas not found");

    const shaderCode = document.getElementById(
      "cpuShader"
    ) as HTMLScriptElement;
    if (!shaderCode) throw new Error("shaderCode not found");

    const uniforms = {
      progress: 0,
      count: 0,
      // 5:1 - 40, 8; 30, 6; etc.
      cols: 30,
      rows: 6,
    };
    const app = new PIXI.Application({
      backgroundColor: 0x707070,
      view: pixiCanvas,
      width: 1000,
      height: 1000,
    });

    const filter = new PIXI.Filter(undefined, shaderCode.innerText, uniforms);

    const spr = new PIXI.Sprite();
    spr.width = app.view.width;
    spr.height = app.view.height;
    spr.filters = [filter];
    app.stage.addChild(spr);
    PIXI.Texture.fromURL(icons.get("white-circle")).then((tex) => {
      spr.texture = tex;
    });

    const pix: pixiesType = {
      app: app,
      imageEffectUniforms: uniforms,
      imageEffectFilter: filter,
      imageEffectSprite: spr,
    };

    setPixies(pix);

    app.ticker.add(() => {
      pix.imageEffectUniforms.count = GameState.cpuCount;
      pix.imageEffectUniforms.progress = bl.instance.tickCount % 10000;
    });
  }, []);

  return pixies;
}
