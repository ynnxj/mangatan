declare global {
  namespace App {
    // Define the type of data available on every page
    interface PageData {
      news?: Post[];
      gigs?: Gig[];
      merch?: Item[];
    }

    // Other interfaces can be extended if needed
    // interface Error {}
    // interface Locals {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
