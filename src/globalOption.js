import path from "path";

export const globalOption = {
    interval: 1000,
    setInterval(n) { Timemachine.globaloption.interval = n; return this },
    location: null,
    setLocation(loc) { Timemachine.globaloption.location = path.resolve(loc); return this },
}