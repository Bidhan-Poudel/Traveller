interface UserReview {
    id: number
    name: string
    review: string
    rating: number
    avatar: string
    date: string
}


export const userReviews: UserReview[] = [
    {
        id: 1,
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
        rating: 5,
        avatar: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg',
        date: '2022-04-01'
    },
    {
        id: 2,
        name: 'Jane Doe',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
        rating: 4,
        avatar: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg',
        date: '2022-04-02'
    },
    {
        id: 3,
        name: 'John Doe',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non.',
        rating: 5,
        avatar: 'https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/32.jpg',
        date: '2022-04-03'
    }
]