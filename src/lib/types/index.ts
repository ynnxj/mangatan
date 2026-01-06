export interface Gig {
  _id: string;
  title: string;
  date: string;
  location: string;
  venue_link: string;
  tickets_link: string;
}

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
