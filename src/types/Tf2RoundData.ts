import Tf2Event from "./Tf2Event";
import Tf2Team from "./Tf2Team";

export interface Tf2RoundData {
    start_time: number,
    winner: Tf2Team,
    team: {
        Red: {
            score: number,
            kills: number,
            dmg: number,
            ubers: number
        },
        Blue: {
            score: number,
            kills: number,
            dmg: number,
            ubers: number
        }
    },
    events: Tf2Event[]
};

export default Tf2RoundData;