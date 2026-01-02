export interface Gig {
  _id: string;
  title: string;
  date: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  venue_link: string;
  tickets_link: string;
  price: number;
}
