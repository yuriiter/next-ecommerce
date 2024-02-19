export class Timeout {
  private callback: () => unknown;
  private delay: number = 0;

  private totalTime: number = 0;
  private timeoutId: ReturnType<typeof setTimeout>;
  private lastStartTimestamp: number;
  private lastPauseTimestamp: number | null = null;

  constructor(callback: () => unknown, delay: number) {
    this.callback = callback;
    this.delay = delay;
    this.lastStartTimestamp = Date.now();
    this.timeoutId = setTimeout(callback, delay);
  }

  public pause = () => {
    if (this.getIsPaused()) return;

    this.lastPauseTimestamp = Date.now();
    this.totalTime += this.lastPauseTimestamp - this.lastStartTimestamp;
    clearTimeout(this.timeoutId);
  };

  public resume = () => {
    if (!this.getIsPaused()) return;

    const timeLeft = this.delay - this.totalTime;

    this.lastStartTimestamp = Date.now();
    this.lastPauseTimestamp = null;
    this.timeoutId = setTimeout(this.callback, Math.max(timeLeft, 0));
  };

  public getIsPaused = () => this.lastPauseTimestamp !== null;
}
