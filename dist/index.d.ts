import { LogFile } from "./structs/LogFile";
import { SteamId64 } from "./types/SteamId64";
import { LogsTfSearchApiHandler } from "./structs/LogsTfSearchApiHandler";
import { LogDataHandler } from "./structs/LogDataHandler";
export * from "./helpers/steamid";
export * from "./structs/LogDataHandler";
declare interface SearchOptions {
    title: string;
    map: string;
    /**
     * 64-bit Steam ID of the uploader
     */
    uploader: SteamId64;
    /**
     * Array of 64-bit Steam IDs
     */
    players: SteamId64[];
}
export declare class LogsTfClient {
    private _apiKey;
    constructor(apiKey: string);
    logFileFrom(filePath: string): LogFile;
    upload(logFile: LogFile, options: {
        title: string;
        map: string;
        uploader?: string;
        updatelog?: string;
    }): Promise<number>;
    getSearchResults({ title, map, uploader, players }: Partial<SearchOptions>): LogsTfSearchApiHandler;
    getLogData(logId: string): Promise<LogDataHandler>;
}
export default LogsTfClient;
