import axios from "axios";
import { LogSearchApiResponse, LogSearchApiSuccessResponse } from "../types/LogSearchApiResponse";

export type LogsTfSearchApiHandlerOptionNames = "title" | "map" | "uploader" | "players" | "pageSize";

export interface LogsTfSearchApiHandlerOptions {
    [optionName: string]: string | string[] | number | undefined,

    title?: string,
    map?: string,
    uploader?: string,
    players?: string[],
    pageSize?: number
};

export class LogsTfSearchApiHandler {
    private _options: LogsTfSearchApiHandlerOptions;
    private _currentPageNum: number;

    constructor(options: LogsTfSearchApiHandlerOptions) {
        this._options = options;
        this._currentPageNum = 0;
    }

    private _hasOption(optionName: LogsTfSearchApiHandlerOptionNames) {
        return this._options[optionName] !== undefined;
    }

    async page(pageNumber: number = 0): Promise<LogSearchApiSuccessResponse["logs"]> {
        const params: {
            title?: string,
            map?: string,
            uploader?: string,
            player?: string,
            offset?: number,
            limit?: number
        } = {};

        if (this._hasOption("title")) {
            params.title = this._options.title;
        }

        if (this._hasOption("map")) {
            params.map = this._options.map;
        }

        if (this._hasOption("uploader")) {
            params.uploader = this._options.uploader;
        }

        if (this._hasOption("players")) {
            params.player = this._options.players!.join(",");
        }

        if (this._hasOption("pageSize")) {
            params.limit = this._options.pageSize;
            params.offset = this._options.pageSize! * pageNumber;
        } else {
            params.limit = 100;
            params.offset = this._options.pageSize! * pageNumber;
        }

        const response = await axios.get("https://logs.tf/api/v1/log", {
            params,
            responseType: "json"
        });

        const data: LogSearchApiResponse = response.data;

        return new Promise((resolve, reject) => {
            if (data.success === true) {
                this._currentPageNum = pageNumber;

                resolve(data.logs);
            } else {
                reject(data.error);
            }
        });
    }

    /**
     * Moves to the next page
     */
    async next() {
        return await this.page(this._currentPageNum + 1);
    }

    /**
     * Moves to the previous page
     */
    async prev() {
        return await this.page(this._currentPageNum - 1);
    }
}

export default LogsTfSearchApiHandler;