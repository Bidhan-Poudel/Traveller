import {
  IconMail,
  IconMailbox,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

// const data = [
//   {
//     title: "Services",
//     links: [
//       { label: "Become a Supplier", link: "#" },
//       { label: "Contact Us  ", link: "#" },
//       { label: "Terms And Condition", link: "#" },
//       { label: "Track Your Booking", link: "#" },
//     ],
//   },
//   {
//     title: "Contact",
//     links: [
//       { label: `+977-1-4437187`,  link: "#" },
//       { label: `support@suyatra.com.np`, link: "#" },
//       { label: `P.O.Box No. 21255`, link: "#" },
//       {
//         label: `Narayanhiti Palace Meuseum North Gate Rd 414/2F, Lazimpat, Kathmandu, Nepal`,
//         link: "#",
//       },
//     ],
//   },
//   {
//     title:"Icon",
//     links:[
//         {label: <IconPhone size={20} />, link: "#"},
//         {label: <IconMail size={20} />, link: "#"},
//         {label: <IconMailbox size={20} />, link: "#"},
//         {label: <IconMapPin size={20} />, link: "#"},
//     ]
//   }
// ];
// export default data;
const size = "16";

export const suyatraFooter = {
  data: "Affordable and hassle-free bookings for your holiday plans. SuYatra is curated for travellers and makes it easy, stress-free, and enjoyable for you to plan your next trip.",
};

export const serviceLinks = [
  {
    title: "Services",
    links: [
      { label: "Become a Supplier", link: "#" },
      { label: "Contact Us  ", link: "#" },
      { label: "Terms And Condition", link: "#" },
      { label: "Track Your Booking", link: "#" },
    ],
  },
];

export const contactLinks = [
  {
    title: "Contact",
    links: [
      { label: `+977-1-4437187`, icons: <IconPhone size={size} />, link: "#" },
      {
        label: `support@suyatra.com.np`,
        icons: <IconMail size={size} />,
        link: "#",
      },
      {
        label: `P.O.Box No. 21255`,
        icons: <IconMailbox size={size} />,
        link: "#",
      },
      {
        label: `Narayanhiti Palace Meuseum North Gate Rd 414/2F, Lazimpat, Kathmandu, Nepal`,
        icons: <IconMapPin size={size} />,
        link: "#",
      },
    ],
  },
];
