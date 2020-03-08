import Tf2Team from "../Tf2Team";
import LogsSteamId from "../LogsSteamId";

export interface Tf2MedicDropEvent {
    type: "drop",
    time: number,
    team: Tf2Team,
    steamid: LogsSteamId
};

export default Tf2MedicDropEvent;