import { IconBowlSpoon, IconParking, IconSwimming, IconWash, IconWifi } from "@tabler/icons-react";

export const getFacitiyIcon = (facility: string) => {
    switch (facility) {
        case 'Laundry Service':
            return <IconWash size={24} stroke={1.5} />;
        case 'Swimming Pool':
            return <IconSwimming size={24} stroke={1.5} />;
        case 'Free Wifi':
            return <IconWifi size={24} stroke={1.5} />;
        case 'Free Parking':
            return <IconParking size={24} stroke={1.5} />;
        case 'Resturant':
            return <IconBowlSpoon size={24} stroke={1.5} />;
        default:
            return '';
    }
}

