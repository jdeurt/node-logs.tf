export interface LogSearchApiSuccessResponse {
    success: true,
    results: number,
    total: number,
    parameters: {
        player: string | null,
        uploader: string | null,
        title: string | null,
        map: string | null,
        limit: number,
        offset: number
    },
    logs: {
        id: number,
        title: string,
        map: string,
        date: number,
        views: number,
        players: number
    }[]
};

export interface LogSearchApiErrorResponse {
    success: false,
    error: string
};

export type LogSearchApiResponse = LogSearchApiSuccessResponse | LogSearchApiErrorResponse;

export default LogSearchApiResponse;