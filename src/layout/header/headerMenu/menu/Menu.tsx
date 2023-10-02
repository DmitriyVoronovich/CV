import React, {Dispatch, SetStateAction} from 'react';
import {S} from '../HeaderMenu_Styles'

const menu = [
    {
        title: 'Home',
        href: 'home',
        offset: 10
    },
    {
        title: 'About me',
        href: 'about',
        offset: 10

    },
    {
        title: 'Skills',
        href: 'skills',
        offset: 10
    },
    {
        title: 'Project',
        href: 'project',
        offset: 10
    },
    {
        title: 'Contacts',
        href: 'contacts',
        offset: 40
    },
]

type MenuPropsType = {
    onClick?: () => void
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {

    return (
        <ul>
            {menu.map((item, index) => {
                return (<S.MenuItem key={index}>
                    <S.NavLink to={item.href}
                               smooth={true}
                               activeClass="active"
                               spy={true}
                               offset={item.offset}
                               onClick= {props.onClick}>
                        {item.title}
                    </S.NavLink>
                </S.MenuItem>)
            })}
        </ul>
    );
};