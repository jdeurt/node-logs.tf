import { toId3, toId64 } from "./helpers/steamid";
import { LogDataV3Scheme } from "./types/LogDataV3Scheme";
import { LogFile } from "./structs/LogFile";
import axios from "axios";
import { LogsTfApiResponse } from "./types/LogsTfApiResponse";
import { SteamId64 } from "./types/SteamId64";
import { LogsTfSearchApiHandler } from "./structs/LogsTfSearchApiHandler";

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

    search({title, map, uploader, players}: Partial<SearchOptions>) {
        return new LogsTfSearchApiHandler({
            title,
            map,
            uploader,
            players
        });
    }
}

export default LogsTfClient;