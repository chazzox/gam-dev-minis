import { Application } from "@pixi/react";
import DeviceNotSupported from "components/DeviceNotSupported";
import Square from "components/Square";

import { useWindowSize } from "./hooks";
import { Fragment } from "react";

const MOBILE_BREAKPOINT = 640;

function App() {
    const [width, height] = useWindowSize();

    if (width < MOBILE_BREAKPOINT) {
        return <DeviceNotSupported />;
    }

    return (
        <Application resizeTo={window}>
            {/* ensures remounting on resize, i'd like for a better way, but pixi does not allow :( */}
            <Fragment key={`${width}-${height}`}>
                <Square />
            </Fragment>
        </Application>
    );
}

export default App;
