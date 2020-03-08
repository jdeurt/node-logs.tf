export interface LogsTfApiSuccessResponse {
    success: true,
    log_id: number,
    url: string
};

export interface LogsTfApiErrorResponse {
    success: false,
    error: string
};

export type LogsTfApiResponse = LogsTfApiErrorResponse | LogsTfApiSuccessResponse;

export default LogsTfApiResponse;