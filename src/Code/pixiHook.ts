import * as PIXI from "pixi.js";
import { useEffect, useState } from "react";

type pixiesType = {
    app: PIXI.Application
    imageEffectFilter: PIXI.Filter
    imageEffectUniforms: any
    imageEffectSprite: PIXI.Sprite
}

export function usePixi() {
    const [pixies, setPixies] = useState<pixiesType>();

    useEffect(() => {
        const pixiCanvas = document.getElementById("pixiCanvas") as HTMLCanvasElement;
        if (!pixiCanvas) throw new Error("pixiCanvas not found");

        const shaderCode = document.getElementById("cpuShader") as HTMLScriptElement;
        if (!shaderCode) throw new Error("shaderCode not found");
      
        const uniforms = {
            progress: 0,
            count: 2,
            cols: 4,
            rows: 2,
            w: 200,
            h: 200,
        }

        const app = new PIXI.Application({
            backgroundColor: 0x6060a0,
            view: pixiCanvas,
            width: pixiCanvas.width,
            height: pixiCanvas.height
        });

        app.ticker.add(() => {
            uniforms.progress = (Date.now() / 1000) % 1;
            console.log(uniforms.w);
            
        })

        const filter = new PIXI.Filter(
            undefined,
            shaderCode.innerText,
            uniforms,
        )

        const spr = new PIXI.Sprite();
        spr.width = app.view.width;
        spr.height = app.view.height;
        spr.filters = [filter];
        app.stage.addChild(spr);

        const pix: pixiesType = {
            app: app,
            imageEffectUniforms: uniforms,
            imageEffectFilter: filter,
            imageEffectSprite: spr,
        }

        setPixies(pix)
    }, [])

    return pixies
}
