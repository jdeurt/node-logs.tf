import Tf2Team from "../Tf2Team";

export interface Tf2UberchargeEvent {
    type: "charge",
    medigun: "medigun" | "kritzkrieg" | "vaccinator" | "quickfix",
    time: number,
    steamid: string,
    team: Tf2Team
};

export default Tf2UberchargeEvent;