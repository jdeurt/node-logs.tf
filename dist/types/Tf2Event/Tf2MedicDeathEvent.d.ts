import Tf2Team from "../Tf2Team";
import LogsSteamId from "../LogsSteamId";
export interface Tf2MedicDeathEvent {
    type: "medic_death";
    time: number;
    team: Tf2Team;
    steamid: LogsSteamId;
    killer: LogsSteamId;
}
export default Tf2MedicDeathEvent;
