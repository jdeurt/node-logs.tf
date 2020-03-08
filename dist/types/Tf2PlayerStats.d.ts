import Tf2Team from "./Tf2Team";
import Tf2ClassStats from "./Tf2ClassStats";
export interface Tf2PlayerStats {
    team: Tf2Team;
    class_stats: Tf2ClassStats;
    kills: number;
    deaths: number;
    assists: number;
    suicides: number;
    /**
     * A string representing a float
     */
    kapd: string;
    /**
     * A string representing a float
     */
    kpd: string;
    dmg: number;
    dmg_real: number;
    dt: number;
    dt_real: number;
    hr: number;
    lks: number;
    as: number;
    dapd: number;
    dapm: number;
    ubers: number;
    ubertypes: {};
    drops: number;
    medkits: number;
    medkits_hp: number;
    backstabs: number;
    headshots: number;
    headshots_hit: number;
    sentries: number;
    heal: number;
    cpc: number;
    ic: number;
}
export default Tf2PlayerStats;
