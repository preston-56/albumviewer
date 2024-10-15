import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarProps, NavbarLink } from '@/components/interfaces/NavbarProps';

const Navbar: React.FC<NavbarProps> = ({ title = "Album Viewer", links }) => {
    return (
        <nav className="bg-gray-800 p-4">
            <h1 className="text-white">{title}</h1>
            <ul className="flex space-x-4">
                {links.map((link: NavbarLink, index: number) => (
                    <li key={index}>
                        <Link to={link.path} className="text-white hover:text-gray-300">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
