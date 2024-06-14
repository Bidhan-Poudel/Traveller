interface Destination {
  id: number;
  name: string;
  hotels: number;
  tours: number;
  rentals: number;
  cars: number;
  activities: number;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "California",
    hotels: 14,
    tours: 22,
    rentals: 22,
    cars: 25,
    activities: 18,
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/California.jpg",
  },
  {
    id: 2,
    name: "New York City",
    hotels: 7,
    tours: 15,
    rentals: 15,
    cars: 22,
    activities: 18,
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/New-York-City.jpg",
  },
  {
    id: 3,
    name: "New Jersey",
    hotels: 7,
    tours: 18,
    rentals: 11,
    cars: 14,
    activities: 17,
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/New-Jersey.jpg",
  },
  {
    id: 4,
    name: "Los Angeles",
    hotels: 13,
    tours: 23,
    rentals: 18,
    cars: 21,
    activities: 19,
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Los-Angeles.jpg",
  },
  {
    id: 5,
    name: "San Francisco",
    hotels: 5,
    tours: 13,
    rentals: 15,
    cars: 16,
    activities: 13,
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/San-Francisco.jpg",
  },
  {
    id: 6,
    name: "Nevada",
    hotels: 11,
    tours: 20,
    rentals: 20,
    cars: 18,
    activities: 15,
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Nevada_.jpg",
  },
];
