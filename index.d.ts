// index.d.ts
export interface ProgressBarOptions {
  color?: string;
  height?: number;
}
export function initProgressBar(options?: ProgressBarOptions): void;
