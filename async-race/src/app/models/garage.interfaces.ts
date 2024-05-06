export interface Car {
    name: string;
    color: string;
    id?: number;
    drive?: boolean;
}

export interface EngineStatusResponse {
    velocity: number;
    distance: number;
}

export interface DriveModeResponse {
    success: boolean;
}
