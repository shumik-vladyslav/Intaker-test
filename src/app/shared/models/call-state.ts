export const enum LoadingState {
    INIT = 'INIT',
    LOADING = 'LOADING',
    LOADED = 'LOADED',
    ERRORED = 'ERRORED'
}
export interface ErrorState {
    error: string;
}

export type CallState = LoadingState | ErrorState;

// Helper function to extract error, if there is one.
export function getError(callState: CallState): string | null {
    if ((callState as ErrorState).error !== undefined) {
        return (callState as ErrorState).error;
    }
    return null;
}