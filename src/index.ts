import { LogFile } from "./structs/LogFile";
import axios from "axios";
import { LogsTfApiResponse } from "./types/LogsTfApiResponse";
import { SteamId64 } from "./types/SteamId64";
import { LogsTfSearchApiHandler } from "./structs/LogsTfSearchApiHandler";
import { LogDataV3Scheme } from "./types/LogDataV3Scheme";
import { LogDataHandler } from "./structs/LogDataHandler";

export * from "./helpers/steamid";
export * from "./structs/LogDataHandler";

declare interface SearchOptions {
    title: string,
    map: string,
    /**
     * 64-bit Steam ID of the uploader
     */
    uploader: SteamId64,
    /**
     * Array of 64-bit Steam IDs
     */
    players: SteamId64[]
};

export class LogsTfClient {
    private _apiKey: string;

    constructor(apiKey: string) {
        this._apiKey = apiKey;
    }

    logFileFrom(filePath: string) {
        return new LogFile(filePath);
    }

    async upload(logFile: LogFile, options: { title: string, map: string, uploader?: string, updatelog?: string }): Promise<number> {
        const uploadResponse = await axios.post("https://logs.tf/upload", {
            ...options,
            logfile: logFile.stream(),
            key: this._apiKey
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            responseType: "json"
        });

        const data: LogsTfApiResponse = uploadResponse.data;

        return new Promise((resolve, reject) => {
            if (data.success === true) {
                resolve(data.log_id);
            } else {
                reject(data.error);
            }
        });
    }

    getSearchResults({title, map, uploader, players}: Partial<SearchOptions>) {
        return new LogsTfSearchApiHandler({
            title,
            map,
            uploader,
            players
        });
    }

    async getLogData(logId: string) {
        const response = await axios.get(`https://logs.tf/api/v1/log/${logId}`, {
            responseType: "json"
        });

        const data: LogDataV3Scheme = response.data;

        return new LogDataHandler(data);
    }
}

export default LogsTfClient;