/// <reference types="node" />
export declare class LogFile {
    private _filePath;
    constructor(path: string);
    stream(): import("fs").ReadStream;
}
