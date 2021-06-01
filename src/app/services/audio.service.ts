import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  songEndedSubject = new EventEmitter<void>();
  private audio = new Audio();
  private progressionListeners: ((p: number) => void)[] = [];

  constructor() {
    this.setVolume(0.1);
    this.audio.addEventListener('timeupdate', () => {
      this.progressionListeners.forEach((value) =>
        value((this.audio.currentTime / this.audio.duration) * 100)
      );
    });
    this.audio.addEventListener('ended', () => {
      this.songEndedSubject.emit();
    });
  }

  play(): Promise<void> {
    return this.audio.play();
  }

  pause(): void {
    this.audio.pause();
  }

  stop(): void {
    this.audio.src = '';
  }

  setVolume(volume: number): void {
    this.audio.volume = volume;
  }

  setSrc(src: string): void {
    this.audio.src = src;
  }

  setCurrentTime(currentTime: number): void {
    this.audio.currentTime = currentTime;
  }

  pauseAtPosition(position: number): void {
    this.audio.pause();
    this.setCurrentTime(position / 1000);
  }

  addProgressionListener(callback: (p: number) => void): void {
    this.progressionListeners.push(callback);
  }
}
