import React from 'react';
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {Container} from "../../components/Container";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'

const items = ['Home','About me','Skills','Project','Contacts',]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.StyledHeader>
            <Container>
                {width <= breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}
            </Container>
        </S.StyledHeader>
    );
};

