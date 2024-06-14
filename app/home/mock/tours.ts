interface Tours {
  id: number;
  address: string;
  title: string;
  rating: number;
  noOfReviews: number;
  time: string;
  price: number;
  image: string;
  avatar: string;
  discount?: boolean;
  discountPrice?: number;
}

export const tours: Tours[] = [
  {
    id: 1,
    address: "Los Angeles",
    title: "Two Hour Walking Tour of Manhattan",
    rating: 5,
    noOfReviews: 3,
    time: "10 hours",
    price: 200.00,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_bdc6c80b-450x300.jpg",
    discount: true,
    discountPrice: 150.00,
  },
  {
    id: 2,
    address: "Nevada",
    title: "America Parks Trial end Rapid City",
    rating: 5,
    noOfReviews: 3,
    time: "8 hours",
    price: 150.00,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/90375_5bd5787b-450x300.jpg",
  },
  {
    id: 3,
    address: "San Francisco",
    title: "Northern California Summer 2019",
    rating: 5,
    noOfReviews: 3,
    time: "8 hours",
    price: 150.00,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/190695_3f41dcd7-450x300.jpg",
  },
  {
    id: 4,
    address: "Nevada",
    title: "Los Angeles to San Francisco Express",
    rating: 5,
    noOfReviews: 3,
    time: "8 hours",
    price: 180.00,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/169671_f486e545-450x300.jpg",
  },
  {
    id: 5,
    address: "San Francisco",
    title: "New York: Museum of Modern Art",
    rating: 5,
    noOfReviews: 3,
    time: "8 hours",
    price: 180.00,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/169671_f486e545-450x300.jpg",
  },
  {
    id: 6,
    address: "Nevada",
    title: "Los Angeles to San Francisco Express",
    rating: 5,
    noOfReviews: 3,
    time: "8 hours",
    price: 180.00,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/brown-horse-with-black-leather-strap-450x300.jpg",
  },
  {
    id: 7,
    address: "Philadelphia",
    title: "Trip of New York - Discover America",
    rating: 5,
    noOfReviews: 3,
    time: "10 hours",
    price: 160.0,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Free-Woman-Wearing-White-Dress-Standing-Near-Building-Stock-Photo-450x300.jpg",
  },
  {
    id: 8,
    address: "Los Angeles",
    title: "Two Hour Walking Tour of Manhattan",
    rating: 5,
    noOfReviews: 3,
    time: "10 hours",
    price: 200.0,
    avatar:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg",
    image:
      "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/51480_bdc6c80b-450x300.jpg",
    discount: true,
    discountPrice: 150.0,
  },
];
