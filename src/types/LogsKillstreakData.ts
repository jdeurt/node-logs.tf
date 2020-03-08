import LogsSteamId from "./LogsSteamId";

export interface LogsKillstreakData {
    steamid: LogsSteamId,
    streak: number,
    time: number
};

export default LogsKillstreakData;