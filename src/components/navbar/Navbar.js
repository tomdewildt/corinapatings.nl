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

    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.md }em) {
        max-height: none;
        flex-basis: auto;
        flex-grow: 0;
    }
`;

const NavbarItems = styled.ul`
    display: flex;
    flex-grow: 1;
    flex-direction: column;

    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.md }em) { flex-direction: row; }
`;

const NavbarItem = styled.li`
    @media only screen and (min-width: ${ ( { theme } ) => theme.breakpoints.md }em) {
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

    &:hover, &.active {
        color: ${ ( { theme } ) => theme.color.grayDarkest };
        background-color: ${ ( { theme } ) => theme.color.grayLight };
    }
`;

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState( false );

    return (
        <NavbarHeader>
            <NavbarContainer>
                <NavbarLogo to="/" />
                <Burger isActive={ isOpen } breakpoint="md" toggle={ () => setIsOpen( !isOpen ) } />
                <NavbarNav isOpen={ isOpen }>
                    <NavbarItems>
                        <NavbarItem>
                            <NavbarLink
                                to="/kracht-inzicht/"
                                activeClassName="active"
                                onClick={ () => setIsOpen( false ) }
                            >
                                Kracht Inzicht
                            </NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink
                                to="/volwassenen/"
                                activeClassName="active"
                                onClick={ () => setIsOpen( false ) }
                            >
                                Volwassenen
                            </NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink
                                to="/kinderen/"
                                activeClassName="active"
                                onClick={ () => setIsOpen( false ) }
                            >
                                Kinderen
                            </NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink
                                to="/opstellingen/"
                                activeClassName="active"
                                onClick={ () => setIsOpen( false ) }
                            >
                                Opstellingen
                            </NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink
                                to="/retraite/"
                                activeClassName="active"
                                onClick={ () => setIsOpen( false ) }
                            >
                                Retraite
                            </NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink
                                to="/hooggevoelig/"
                                activeClassName="active"
                                onClick={ () => setIsOpen( false ) }
                            >
                                Hooggevoelig
                            </NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink
                                to="/#contact"
                                activeClassName="active"
                                onClick={ () => setIsOpen( false ) }
                            >
                                Contact
                            </NavbarLink>
                        </NavbarItem>
                    </NavbarItems>
                </NavbarNav>
            </NavbarContainer>
        </NavbarHeader>
    );
};

export default Navbar;
