import Tf2Team from "../Tf2Team";

export interface Tf2PointCapEvent {
    type: "pointcap",
    time: number,
    team: Tf2Team,
    point: number
};

export default Tf2PointCapEvent;