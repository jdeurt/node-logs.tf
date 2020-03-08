import SteamId from "steamid";

export function isValidId(id: string): boolean {
    try {
        const steamId = new SteamId(id);

        return steamId.isValid();
    } catch {
        return false;
    }
};

export function toId64(id: string) {
    const steamId = new SteamId(id);

    return steamId.getSteamID64();
}

export function toId3(id: string) {
    const steamId = new SteamId(id);

    return steamId.getSteam3RenderedID();
}