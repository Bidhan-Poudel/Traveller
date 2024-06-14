interface Article {
    id: number;
    title:string;
    type:string;
    image:string;
    body:string;
}

export interface ArticleProps {
    data:Article
}

export const article : Article[] = [
    {
        id:1,
        title:"Meet the Steve Jobs of the Travel Industry",
        image:"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-600x400.jpg",
        type:"Travel",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    },
    {
        id:2,
        title:"The Ultimate Cheat Sheet on Travel",
        image:"	https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-1-600x400.png",
        type:"Booking",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    },
    {
        id:3,
        title:"The Best Kept Secrets About Travel",
        image:"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type:"Hotel",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    },
    {
        id:4,
        title:"How to Explain Travel to a Five Year Old",
        image:"	https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-2-600x400.png",
        type:"Stays",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    },
    {
        id:5,
        title:"Meet the Steve Jobs of the Travel Industry",
        image:"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-600x400.jpg",
        type:"Travel",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    },
    {
        id:6,
        title:"The Ultimate Cheat Sheet on Travel",
        image:"	https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-1-600x400.png",
        type:"Booking",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    },
    {
        id:7,
        title:"The Best Kept Secrets About Travel",
        image:"https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-450x300.png",
        type:"Hotel",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    },
    {
        id:8,
        title:"How to Explain Travel to a Five Year Old",
        image:"	https://modmixmap.travelerwp.com/wp-content/uploads/2022/04/Rectangle-3-2-600x400.png",
        type:"Stays",
        body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus id urna tincidunt luctus. Nam nec nunc non"
    }
]