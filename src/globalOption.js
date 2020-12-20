import path from "path";
import Timecapsule from "./timecapsule.js";

export const globalOption = {
    interval: 1000,
    setInterval(n) { Timecapsule.globaloption.interval = n; return this },
    location: null,
    setLocation(loc) { Timecapsule.globaloption.location = path.resolve(loc); return this },
}