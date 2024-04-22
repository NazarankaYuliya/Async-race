export interface Car {
    name: string;
    color: string;
    id?: number;
}

export interface EngineStatusResponse {
    velocity: number;
    distance: number;
}

export interface DriveModeResponse {
    success: boolean;
}
