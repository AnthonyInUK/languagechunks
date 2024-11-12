type NavLink = {
    href: string;
    label: string;
};

export const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/favourites', label: 'My favourite topics' },
    { href: '/profile', label: 'profile' },
    { href: '/topics', label: 'topic' }
];