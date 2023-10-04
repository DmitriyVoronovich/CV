import React from 'react';
import {S} from '../HeaderMenu_Styles'
import {useTranslation} from "react-i18next";

const menu = [
    {
        title: "home",
        href: 'home',
        offset: 10
    },
    {
        title: "aboutMe",
        href: 'about',
        offset: 15

    },
    {
        title: "skills",
        href: 'skills',
        offset: 15
    },
    {
        title: "project",
        href: 'project',
        offset: 25
    },
    {
        title: "contacts",
        href: 'contacts',
        offset: 40
    },
]

type MenuPropsType = {
    onClick?: () => void
}

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {

    const { t } = useTranslation();

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
                        {t(item.title)}
                    </S.NavLink>
                </S.MenuItem>)
            })}
        </ul>
    );
};