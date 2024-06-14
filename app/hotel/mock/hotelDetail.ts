interface HotelDetail {
  id: number;
  rating: number;
  name: string;
  address: string;
  noOfReviews: number;
  image: string[];
  description: string[];
  amenities: string[];
  reviewsData: ReviewsData[];
  popularFacilities: string[];
  roomTypes: RoomTypes[];
  floor: number;
  noOfRooms: number;
  bars: number;
}

interface ReviewsData {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
}

interface RoomTypes {
  id: number;
  name: string;
  price: number;
  image: string;
  beds: number;
  guests: number;
  children: number;
  type: string;
  category: string;
}

export const hotelDetail: HotelDetail[] = [
  {
    id: 1,
    rating: 4,
    name: "Castello Castole Hotel",
    address: "New York City",
    noOfReviews: 3,
    image: [
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Aerial-view.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/3-restaurants-breakfast-lunch-and-dinner-served-Chinese-cuisine-1.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/3-restaurants-breakfast-lunch-and-dinner-served-Chinese-cuisine.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Sundeck.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Terracepatio-1.png",
    ],
    description: [
      `Whether you’re a tourist or traveling on business, Hotel WBF Kitasemba WEST is a great choice for accommodation when visiting Osaka. The excitement of the city center is only away. With its convenient location, the property offers easy access to the city’s must-see destinations.`,

      `Hotel WBF is renowned for its quality services and friendly staff, and Hotel WBF Kitasemba WEST lives up to expectations. Facilities like free Wi-Fi in all rooms, 24-hour security, daily housekeeping, laundromat, taxi service are readily available for the convenience of each guest.`,

      `Experience high quality room facilities during your stay here. Some rooms include humidifier, complimentary tea, towels, clothes rack, slippers to help guests recharge after a long day. The property’s host of recreational offerings ensures you have plenty to do during your stay. Hotel WBF Kitasemba WEST is a smart choice for travelers to Osaka, offering a relaxed and hassle-free stay every time.`,
    ],
    amenities: ["Toiletries", "Coffee maker", "Resturant", "Front Desk"],
    reviewsData: [
      {
        id: 1,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 4,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 3,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 3,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 5,
        review: "Excellent",
        date: "2022-04-15",
      },
    ],
    popularFacilities: [
      "Laundry Service",
      "Swimming Pool",
      "Free Wifi",
      "Free Parking",
      "Resturant",
    ],
    roomTypes: [
      {
        id: 1,
        name: "Deluxe Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Deluxe",
        category: "Room",
      },
      {
        id: 2,
        name: "Superior Room",
        price: 212.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Superior",
        category: "Room",
      },
      {
        id: 3,
        name: "Suite Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-21-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Suite",
        category: "Room",
      },
    ],
    floor: 3,
    noOfRooms: 20,
    bars: 2,
  },
  {
    id: 2,
    rating: 3,
    name: "Hotel WBF Hommachi",
    address: "Los Angeles",
    noOfReviews: 3,
    image: [
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-21-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-2-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-1-450x300.png",
    ],
    description: [
      `Whether you’re a tourist or traveling on business, Hotel WBF Kitasemba WEST is a great choice for accommodation when visiting Osaka. The excitement of the city center is only away. With its convenient location, the property offers easy access to the city’s must-see destinations.`,

      `Hotel WBF is renowned for its quality services and friendly staff, and Hotel WBF Kitasemba WEST lives up to expectations. Facilities like free Wi-Fi in all rooms, 24-hour security, daily housekeeping, laundromat, taxi service are readily available for the convenience of each guest.`,

      `Experience high quality room facilities during your stay here. Some rooms include humidifier, complimentary tea, towels, clothes rack, slippers to help guests recharge after a long day. The property’s host of recreational offerings ensures you have plenty to do during your stay. Hotel WBF Kitasemba WEST is a smart choice for travelers to Osaka, offering a relaxed and hassle-free stay every time.`,
    ],
    amenities: ["Toiletries", "Coffee maker", "Resturant", "Front Desk"],
    reviewsData: [
      {
        id: 1,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 4,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 3,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 3,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 5,
        review: "Excellent",
        date: "2022-04-15",
      },
    ],
    popularFacilities: [
      "Fitness Centre",
      "Swimming Pool",
      "Free Wifi",
      "Free Parking",
      "Room Service",
    ],
    roomTypes: [
      {
        id: 1,
        name: "Deluxe Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Deluxe",
        category: "Room",
      },
      {
        id: 2,
        name: "Superior Room",
        price: 212.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Superior",
        category: "Room",
      },
      {
        id: 3,
        name: "Suite Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-21-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Suite",
        category: "Room",
      },
    ],
    floor: 3,
    noOfRooms: 20,
    bars: 2,
  },
  {
    id: 3,
    rating: 5,
    name: "Vnahomes Aparhotel",
    address: "San Francisco",
    noOfReviews: 4,
    image: [
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-21-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-2-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-1-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-1-450x300.png",
    ],
    description: [
      `Whether you’re a tourist or traveling on business, Hotel WBF Kitasemba WEST is a great choice for accommodation when visiting Osaka. The excitement of the city center is only away. With its convenient location, the property offers easy access to the city’s must-see destinations.`,

      `Hotel WBF is renowned for its quality services and friendly staff, and Hotel WBF Kitasemba WEST lives up to expectations. Facilities like free Wi-Fi in all rooms, 24-hour security, daily housekeeping, laundromat, taxi service are readily available for the convenience of each guest.`,

      `Experience high quality room facilities during your stay here. Some rooms include humidifier, complimentary tea, towels, clothes rack, slippers to help guests recharge after a long day. The property’s host of recreational offerings ensures you have plenty to do during your stay. Hotel WBF Kitasemba WEST is a smart choice for travelers to Osaka, offering a relaxed and hassle-free stay every time.`,
    ],
    amenities: ["Toiletries", "Coffee maker", "Resturant", "Front Desk"],
    reviewsData: [
      {
        id: 1,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 4,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 3,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 3,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 5,
        review: "Excellent",
        date: "2022-04-15",
      },
    ],
    popularFacilities: [
      "Fitness Centre",
      "Swimming Pool",
      "Free Wifi",
      "Free Parking",
      "Room Service",
    ],
    roomTypes: [
      {
        id: 1,
        name: "Deluxe Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Deluxe",
        category: "Room",
      },
      {
        id: 2,
        name: "Superior Room",
        price: 212.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Superior",
        category: "Room",
      },
      {
        id: 3,
        name: "Suite Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-21-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Suite",
        category: "Room",
      },
    ],
    floor: 3,
    noOfRooms: 20,
    bars: 2,
  },
  {
    id: 4,
    rating: 3,
    name: "TreeHouse Villas",
    address: "California City, CA, USA",
    noOfReviews: 2,
    image: [
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-2-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-1-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-2-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-1-450x300.png",
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Bar-on-property-1-1-450x300.png",
    ],
    description: [
      `Whether you’re a tourist or traveling on business, Hotel WBF Kitasemba WEST is a great choice for accommodation when visiting Osaka. The excitement of the city center is only away. With its convenient location, the property offers easy access to the city’s must-see destinations.`,

      `Hotel WBF is renowned for its quality services and friendly staff, and Hotel WBF Kitasemba WEST lives up to expectations. Facilities like free Wi-Fi in all rooms, 24-hour security, daily housekeeping, laundromat, taxi service are readily available for the convenience of each guest.`,

      `Experience high quality room facilities during your stay here. Some rooms include humidifier, complimentary tea, towels, clothes rack, slippers to help guests recharge after a long day. The property’s host of recreational offerings ensures you have plenty to do during your stay. Hotel WBF Kitasemba WEST is a smart choice for travelers to Osaka, offering a relaxed and hassle-free stay every time.`,
    ],
    amenities: ["Toiletries", "Coffee maker", "Resturant", "Front Desk"],
    reviewsData: [
      {
        id: 1,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 4,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 2,
        name: "Jane Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 3,
        review: "Excellent",
        date: "2022-04-15",
      },
      {
        id: 3,
        name: "John Doe",
        avatar:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
        rating: 5,
        review: "Excellent",
        date: "2022-04-15",
      },
    ],
    popularFacilities: [
      "Fitness Centre",
      "Swimming Pool",
      "Free Wifi",
      "Free Parking",
      "Room Service",
    ],
    roomTypes: [
      {
        id: 1,
        name: "Deluxe Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-12-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Deluxe",
        category: "Room",
      },
      {
        id: 2,
        name: "Superior Room",
        price: 212.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-1-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Superior",
        category: "Room",
      },
      {
        id: 3,
        name: "Suite Room",
        price: 159.0,
        image:
          "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/feature-21-450x300.png",
        beds: 2,
        guests: 2,
        children: 1,
        type: "Suite",
        category: "Room",
      },
    ],
    floor: 3,
    noOfRooms: 20,
    bars: 2,
  },
];
