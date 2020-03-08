import { LogDataV3Scheme } from "../types/LogDataV3Scheme";

export class LogDataHandler {
    data: LogDataV3Scheme;

    constructor(logData: LogDataV3Scheme) {
        this.data = logData;
    }
}

export default LogDataHandler;