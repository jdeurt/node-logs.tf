import Tf2Team from "../Tf2Team";
export interface Tf2RoundWinEvent {
    type: "round_win";
    time: number;
    team: Tf2Team;
}
export default Tf2RoundWinEvent;
