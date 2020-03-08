import { createReadStream } from "fs";

export class LogFile {
    private _filePath: string;

    constructor(path: string) {
        this._filePath = path;
    }

    stream() {
        return createReadStream(this._filePath, {
            encoding: "utf8"
        });
    }
}