export interface NavbarLink {
    name: string;
    path: string;
}

export interface NavbarProps {
    title?: string;
    links: NavbarLink[];
}
