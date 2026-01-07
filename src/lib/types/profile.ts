export interface Profile {
  name: string;
  img: string;
  desc: string;
  likes: string[];
  favSong: {
    title: string;
    artist: string;
    albumCover: string;
  };
  favImg: string;
  listIcon?: string;
  cdFrameImg?: string;
  themeClass: string;
}
