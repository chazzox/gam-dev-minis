import { useApplication } from "@pixi/react";
import { Application } from "pixi.js";

type BetterApplicationState =
    | {
          app: Application;
          isInitialised: true;
          isInitialising: false;
      }
    | {
          app: Partial<Application>;
          isInitialised: false;
          isInitialising: true;
      }
    | {
          app: Partial<Application>;
          isInitialised: false;
          isInitialising: false;
      };

const useApplicationSafe = () => {
    const application = useApplication() as BetterApplicationState;
    return application;
};

export default useApplicationSafe;
