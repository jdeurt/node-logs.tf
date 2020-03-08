import Tf2Class from "./Tf2Class";
import Tf2Team from "./Tf2Team";

export type Tf2Weapon = string;

export type Tf2Event = Tf2MedicDeathEvent | Tf2UberchargeEvent | Tf2MedicDropEvent | Tf2PointCapEvent | Tf2RoundWinEvent;

export type LogsSteamId = string;

export interface LogsChatData {
    steamid: LogsSteamId | "Console";
    name: string;
    msg: string;
};

export interface LogsKillstreakData {
    steamid: LogsSteamId,
    streak: number,
    time: number
};

export interface Tf2UberchargeEvent {
    type: "charge",
    medigun: "medigun" | "kritzkrieg" | "vaccinator" | "quickfix",
    time: number,
    steamid: string,
    team: Tf2Team
};

export interface Tf2MedicDeathEvent {
    type: "medic_death",
    time: number,
    team: Tf2Team,
    steamid: LogsSteamId,
    killer: LogsSteamId
};

export interface Tf2PointCapEvent {
    type: "pointcap",
    time: number,
    team: Tf2Team,
    point: number
};

export interface Tf2MedicDropEvent {
    type: "drop",
    time: number,
    team: Tf2Team,
    steamid: LogsSteamId
};

export interface Tf2RoundWinEvent {
    type: "round_win",
    time: number,
    team: Tf2Team
};

export interface Tf2ClassStats {
    type: Tf2Class,
    kills: number,
    assists: number,
    deaths: number,
    dmg: number,
    weapon: {
        [weapon: string]: {
            kills: number,
            dmg: number,
            /**
             * Average damage per shot
             */
            avg_dmg: number,
            shots: number,
            hits: number
        } | number,
        total_time: number
    }
};

export interface Tf2PlayerStats {
    team: Tf2Team,
    class_stats: Tf2ClassStats
    kills: number,
    deaths: number,
    assists: number,
    suicides: number,
    /**
     * A string representing a float
     */
    kapd: string,
    /**
     * A string representing a float
     */
    kpd: string,
    dmg: number,
    dmg_real: number,
    dt: number,
    dt_real: number,
    hr: number,
    lks: number,
    as: number,
    dapd: number,
    dapm: number,
    ubers: number,
    ubertypes: {},
    drops: number,
    medkits: number,
    medkits_hp: number,
    backstabs: number,
    headshots: number,
    headshots_hit: number,
    sentries: number,
    heal: number,
    cpc: number,
    ic: number
};

export interface Tf2RonudData {
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
    rounds: Tf2RonudData,
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
            id: string,
            name: string,
            info: string
        }
    },
    killstreaks: LogsKillstreakData[]
}