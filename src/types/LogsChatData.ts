import LogsSteamId from "./LogsSteamId";

export interface LogsChatData {
    steamid: LogsSteamId | "Console";
    name: string;
    msg: string;
};

export default LogsChatData;