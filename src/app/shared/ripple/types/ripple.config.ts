export interface RippleAnimationConfig {
  enterDuration: number;
  exitDuration: number;
}

export interface RippleConfig {
  color?: string;
  centered?: boolean;
  persistent?: boolean;
  animation?: RippleAnimationConfig;
}
