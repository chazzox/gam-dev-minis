import { useExtend } from "@pixi/react";
import { Container, Graphics } from "pixi.js";
import { useCallback } from "react";
import { useApplicationSafe } from "src/hooks";

const Square = () => {
    useExtend({ Graphics, Container });
    const { app, isInitialised } = useApplicationSafe();

    const drawCallback = useCallback(
        (graphics: Graphics) => {
            if (!isInitialised) return;
            graphics.clear();
            graphics.setFillStyle({ color: "red" });
            graphics.rect(
                app.screen.width / 2 - 50,
                app.screen.height / 2 - 50,
                100,
                100
            );
            graphics.fill();
        },
        [app, isInitialised]
    );

    return (
        <container>
            <graphics draw={drawCallback} />
        </container>
    );
};

export default Square;
