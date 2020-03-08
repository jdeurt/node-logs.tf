import Tf2Class from "./Tf2Class";
export interface Tf2ClassStats {
    type: Tf2Class;
    kills: number;
    assists: number;
    deaths: number;
    dmg: number;
    weapon: {
        [weapon: string]: {
            kills: number;
            dmg: number;
            /**
             * Average damage per shot
             */
            avg_dmg: number;
            shots: number;
            hits: number;
        } | number;
        total_time: number;
    };
}
export default Tf2ClassStats;
