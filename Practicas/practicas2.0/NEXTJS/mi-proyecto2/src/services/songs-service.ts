import ISong from "@/interfaces/songs-interface";

const SONGS_DATA: ISong[] = [
  { id: 1, name: "Bandito", duration: 3.14, author: "Twenty One Pilots" },
  { id: 2, name: "Summer", duration: 4.23, author: "Calvin Harris" },
  { id: 3, name: "Hey brother", duration: 3.25, author: "Avicci" },
];

class SongService {
  async getAll(): Promise<ISong[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(SONGS_DATA);
      }, 1000);
    });
  }

  async getById(id: number): Promise<ISong> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const song = SONGS_DATA.find((s) => s.id === id);
        if (song) {
          resolve(song);
        } else {
          reject(new Error("Song not found"));
        }
      }, 1000);
    });
  }

  async Save(song: ISong): Promise<ISong> {
    return new Promise((resolve) => {
      setTimeout(() => {
        song.id = SONGS_DATA.length + 1;
        SONGS_DATA.push(song);
        resolve(song);
      }, 1000);
    });
  }

  async Edit(song: ISong): Promise<ISong> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Song received for editing:", song);
        const index = SONGS_DATA.findIndex((s) => s.id === Number(song.id));
        if (index !== -1) {
          SONGS_DATA[index] = song;
          resolve(song);
        } else {
          reject(new Error("Song not found for editing!"));
        }
      }, 1000);
    });
  }
}

export const songService = new SongService();
