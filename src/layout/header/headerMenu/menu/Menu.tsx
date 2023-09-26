import React from 'react';
import {S} from '../HeaderMenu_Styles'

const menu = [
    {
        title: 'Home',
        href: 'home'
    },
    {
        title: 'About me',
        href: 'about'
    },
    {
        title: 'Skills',
        href: 'skills'
    },
    {
        title: 'Project',
        href: 'project'
    },
    {
        title: 'Contacts',
        href: 'contacts'
    },
]

export const Menu: React.FC = () => {

    return (
        <ul>
            {menu.map((item, index) => {
                return (<S.MenuItem key={index}>
                    <S.NavLink to={item.href}
                               smooth={true}
                               activeClass="active"
                               spy={true}
                               offset={10}>
                        {item.title}
                    </S.NavLink>
                </S.MenuItem>)
            })}
        </ul>
    );
};