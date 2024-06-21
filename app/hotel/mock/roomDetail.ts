type roomDetail = {
    id: number,
    rating: number,
    price: number,
    isAvailable: boolean,
    description: string,
    images: string[],
    category: string,
    type: string,
    amenities: string[],
    roomFacilities: RoomFacilities,
    overview: string,
    isBreakfastIncluded: boolean;
    title:string;
}

type RoomFacilities = {
    bedrooms: Bedrooms,
    allowedChildren: AllowedChildren,
    inclusions: string[];
}


type Bedrooms = {
    type: string,
    totalBed: number;
    totalRooms: number;
}

type AllowedChildren = {
    maxAllowedChildren: number;
    totalAllowedGuests: number;
}



export const roomDetails: roomDetail[] = [
    {
        id: 1,
        rating: 4,
        price: 5000,
        isAvailable: true,
        description: `Standard Double Room comprises of 1 Double Bed or 2 Twin Beds, 2 Bedside Tables, a Desk & Chair. The room is furnished with wall to wall carpeting, trendy furnishings and a balcony.

Our ultramodern glass bathroom is equipped with hairdryer, magnifying shaving and make up mirror as well as all the amenities you could possible need during your stay.

A Complimentary Bottle of Wine, Fresh Fruit anda Mineral Water, are provided on arrival. Electric current: 220 Volts. Smoking rooms & inter-connecting rooms are also available`,
        images: ["https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/The-First-Collection-at-Jumeirah-Village-Circle.jpg",
            "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/The-First-Collection-at-Jumeirah-Village-Circle-4.jpg",
            "https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/The-First-Collection-at-Jumeirah-Village-Circle-2.jpg",
        ],
        category: "Standard",
        type: "Single Room",
        amenities: ["Wifi", "TV", "Air Conditioning", "Breakfast"],
        roomFacilities: {
            allowedChildren: {
                maxAllowedChildren: 1,
                totalAllowedGuests: 1
            },
            bedrooms: {
                type: "Single",
                totalBed: 1,
                totalRooms: 1
            },
            inclusions: ['Buffet Breakfast',
                'Bath Amenities',
                'Smart LED TV',
                'Fully air-conditioned rooms',
                'Unlimited Wi-Fi Access',
                'Toiletries',
            ]
        },
        overview: "Single Bed",
        isBreakfastIncluded: true,
        title:"Drishya Special",
    },
]