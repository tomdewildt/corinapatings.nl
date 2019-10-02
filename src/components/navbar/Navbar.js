import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import Burger from "../burger/Burger";
import NavbarLogo from "./Logo";

const NavbarHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: ${ ( { theme } ) => theme.navbar.z };
    color: ${ ( { theme } ) => theme.color.grayDark };
    background-color: ${ ( { theme } ) => theme.color.grayLightest };
    border-bottom: ${ ( { theme } ) => `1px solid ${ theme.color.grayLight }` };
`;

const NavbarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;

    ${ ( { theme } ) => css`
        @media (max-width: ${ theme.breakpoints.lg }em) {
            padding: 0 ${ theme.navbar.padding }rem;
        }
    ` }
    
    ${ ( { theme } ) => Object.keys( theme.navbar.sizes ).map( ( key ) => css`
        @media only screen and (min-width: ${ theme.breakpoints[ key ] }em) {
            width: ${ theme.navbar.sizes[ key ] }rem;
        }
    ` ) }
`;

const NavbarNav = styled.nav`
    display: flex;
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

const NavbarItems = styled.ul`
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.sm }em) { flex-direction: row; }
`;

const NavbarItem = styled.li`
    &:hover {
        color: ${ ( { theme } ) => theme.color.grayDarkest };
        background-color: ${ ( { theme } ) => theme.color.grayLight };
    }

    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.sm }em) {
        padding-top: 0;
        padding-bottom: 0;
    }
`;

const NavbarLink = styled( Link )`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${ ( { theme } ) => theme.navbar.items.padding }rem 1rem;
    text-decoration: none;
    cursor: pointer;
    color: inherit;
`;

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState( false );
    const toggleIsOpen = () => setIsOpen( !isOpen );

    return (
        <NavbarHeader>
            <NavbarContainer>
                <NavbarLogo to="/" />
                <Burger isActive={ isOpen } breakpoint="sm" toggle={ toggleIsOpen } />
                <NavbarNav isOpen={ isOpen }>
                    <NavbarItems>
                        <NavbarItem>
                            <NavbarLink to="/kracht-inzicht/" onClick={ toggleIsOpen }>Kracht Inzicht</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/volwassenen/" onClick={ toggleIsOpen }>Volwassenen</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/kinderen/" onClick={ toggleIsOpen }>Kinderen</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/hoogsensitiviteit/" onClick={ toggleIsOpen }>Hoogsensitiviteit</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink to="/blog/" onClick={ toggleIsOpen }>Blog</NavbarLink>
                        </NavbarItem>
                    </NavbarItems>
                </NavbarNav>
            </NavbarContainer>
        </NavbarHeader>
    );
};

export default Navbar;