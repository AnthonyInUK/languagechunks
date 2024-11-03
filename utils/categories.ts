import { IconType } from 'react-icons';
import { FaSuitcase, FaCoffee, FaPen, FaGlobe } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

type Category = {
    label: CategoryLabel;
    icon: IconType;
};
export type CategoryLabel =
    | 'Business'
    | 'Professional'
    | 'Daily'
    | 'Test'
    | 'Travel';

export const categories: Category[] = [
    {
        label: 'Business',
        icon: FaSuitcase,
    },
    {
        label: 'Professional',
        icon: FaCoffee,
    },
    {
        label: 'Daily',
        icon: FaPen,
    },
    {
        label: 'Test',
        icon: FaGlobe,
    },
    {
        label: 'Travel',
        icon: MdSchool,
    },
];