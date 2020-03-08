import Tf2Class from "./Tf2Class";
import Tf2PlayerStats from "./Tf2PlayerStats";
import Tf2RoundData from "./Tf2RoundData";
import LogsChatData from "./LogsChatData";
import LogsKillstreakData from "./LogsKillstreakData";
import { SteamId64 } from "./SteamId64";

export interface LogDataV3Scheme {
    version: number,
    teams: {
        Red: {
            score: number,
            kills: number,
            deaths: number,
            dmg: number,
            charges: number,
            drops: number,
            firstcaps: number,
            caps: number
        },
        Blue: {
            score: number,
            kills: number,
            deaths: number,
            dmg: number,
            charges: number,
            drops: number,
            firstcaps: number,
            caps: number
        }
    },
    /**
     * Length of the game in seconds
     */
    length: number,
    players: {
        [playerId: string]: Tf2PlayerStats
    },
    /**
     * Matches player IDs to their names
     */
    names: {
        [playerId: string]: string
    },
    rounds: Tf2RoundData[],
    healspread: {
        [medicId: string]: {
            [playerId: string]: number
        }
    },
    classkills: {
        [playerId: string]: {
            [className in Tf2Class]: number
        }
    },
    classdeaths: {
        [playerId: string]: {
            [className in Tf2Class]: number
        }
    },
    classkillassists: {
        [playerId: string]: {
            [className in Tf2Class]: number
        }
    },
    chat: LogsChatData[],
    info: {
        map: string,
        supplemental: true,
        total_length: number,
        hasRealDamage: boolean,
        hasWeaponDamage: boolean,
        hasAccuracy: boolean,
        hasHP: boolean,
        hasHP_real: boolean,
        hasHS: boolean,
        hasHS_hit: boolean,
        hasBS: boolean,
        hasCP: boolean,
        hasSB: boolean,
        hasDT: boolean,
        hasAS: boolean,
        hasHR: boolean,
        hasIntel: boolean,
        AD_scoring: boolean,
        notifications: [],
        title: string,
        date: number,
        uploader: {
            id: SteamId64,
            name: string,
            info: string
        }
    },
    killstreaks: LogsKillstreakData[]
};

export default LogDataV3Scheme;