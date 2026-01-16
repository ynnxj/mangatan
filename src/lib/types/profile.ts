export interface Profile {
  name: string;
  img: string;
  desc: string;
  likes: string[];
  favSong: {
    title: string;
    artist: string;
    songLink: string;
  };
  favImg: string;
  listIcon?: string;
  listGif?: string;
  divider?: string;
  themeClass: string;
}
