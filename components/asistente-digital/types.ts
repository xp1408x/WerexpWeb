
export interface SolutionOption {
  title: string;
  description: string;
}

export enum AppState {
  IDLE,
  LOADING,
  OPTIONS_RESULT,
  DETAILS_INPUT,
  CONFIRMATION,
  ERROR,
}
