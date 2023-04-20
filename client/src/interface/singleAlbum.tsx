export interface singleAlbum {
  id: number;
  name: string;
  type: string;
  image: string;
  music: Music;
}

export interface Music {
  singleAlbum: any;
  id: number;
  song: string;
  image: string;
  album: singleAlbum;
}

export interface Albums {
  id: number;
  song: string;
  image: string;
  music: Musics;
  Album: any;
}

export interface Musics {
  id: number;
  song: string;
  image: string;
}
