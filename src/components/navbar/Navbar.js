import React, { useState } from "react";
import styled, { css } from "styled-components";

import Burger from "../burger/Burger";
import Logo from "./Logo";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${ ( { theme } ) => theme.navbar.z };
    color: ${ ( { theme } ) => theme.color.grayDark };
    background-color: ${ ( { theme } ) => theme.color.grayLightest };
    border-bottom: ${ ( { theme } ) => `1px solid ${ theme.color.grayLight }` };
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    
    ${ ( { theme } ) => Object.keys( theme.navbar.breakpoints ).map( ( key ) => css`
        @media only screen and (min-width: ${ theme.breakpoints[ key ] }em) {
            width: ${ theme.navbar.breakpoints[ key ] }rem;
        }
    ` ) }
`;

const Nav = styled.nav`
    // display: flex;
    max-height: 0;
    flex-basis: 100%;
    flex-grow: 1;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0,1,0.5,1);

    ${ ( { isOpen } ) => isOpen && css`
        max-height: 100vh;
        transition: max-height 0.5s ease-in;
    ` }

    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.sm }em) {
        max-height: none;
        flex-basis: auto;
        flex-grow: 0;
    }
`;

const Items = styled.ul`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.sm }em) {
        flex-direction: row;
    }
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${ ( { theme } ) => theme.navbar.items.padding }rem;

    &:hover {
        color: ${ ( { theme } ) => theme.color.grayDarkest };
        background-color: ${ ( { theme } ) => theme.color.grayLight };
    }

    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.sm }em) {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

const Navbar = () => {
    const [ isOpen, toggleIsOpen ] = useState( false );

    return (
        <Header>
            <Container>
                <Logo to="/" />
                <Burger isActive={ isOpen } breakpoint="sm" toggle={ () => toggleIsOpen( !isOpen ) } />
                <Nav isOpen={ isOpen }>
                    <Items>
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                        <Item>Item 4</Item>
                    </Items>
                </Nav>
            </Container>
        </Header>
    );
};

export default Navbar;
