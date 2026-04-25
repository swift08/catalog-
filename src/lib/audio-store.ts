type Listener = (id: string | null) => void;

class AudioStore {
  private activeVideoId: string | null = null;
  private listeners: Set<Listener> = new Set();

  setActiveVideo(id: string | null) {
    this.activeVideoId = id;
    this.listeners.forEach((l) => l(id));
  }

  getActiveVideo() {
    return this.activeVideoId;
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export const audioStore = new AudioStore();
