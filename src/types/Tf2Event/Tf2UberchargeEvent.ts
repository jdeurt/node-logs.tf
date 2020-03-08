import Tf2Team from "../Tf2Team";
import { LogsSteamId } from "../LogsSteamId";

export interface Tf2UberchargeEvent {
    type: "charge",
    medigun: "medigun" | "kritzkrieg" | "vaccinator" | "quickfix",
    time: number,
    steamid: LogsSteamId,
    team: Tf2Team
};

export default Tf2UberchargeEvent;