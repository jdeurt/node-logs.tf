import { LogSearchApiSuccessResponse } from "../types/LogSearchApiResponse";
export declare type LogsTfSearchApiHandlerOptionNames = "title" | "map" | "uploader" | "players" | "pageSize";
export interface LogsTfSearchApiHandlerOptions {
    [optionName: string]: string | string[] | number | undefined;
    title?: string;
    map?: string;
    uploader?: string;
    players?: string[];
    pageSize?: number;
}
export declare class LogsTfSearchApiHandler {
    private _options;
    private _currentPageNum;
    constructor(options: LogsTfSearchApiHandlerOptions);
    private _hasOption;
    page(pageNumber?: number): Promise<LogSearchApiSuccessResponse["logs"]>;
    /**
     * Moves to the next page
     */
    next(): Promise<{
        id: number;
        title: string;
        map: string;
        date: number;
        views: number;
        players: number;
    }[]>;
    /**
     * Moves to the previous page
     */
    prev(): Promise<{
        id: number;
        title: string;
        map: string;
        date: number;
        views: number;
        players: number;
    }[]>;
}
export default LogsTfSearchApiHandler;
