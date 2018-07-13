import React, { Component } from 'react';
import styled from 'styled-components';
import logo from 'assets/Jacob-50.png';
import logoWhite from 'assets/Jacob-white-50.png';
import HamburgerMenu from 'components/ui/HamburgerMenu';

class Header extends Component {
    state = {
        open: false,
    };

    toggleMenu = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { open } = this.state;
        return (
            <HeaderWrapper>
                <nav className='nav-left'>
                    <span>
                        <a href=''>About</a>
                    </span>
                    <span>
                        <a href=''>Portfolio</a>
                    </span>
                </nav>
                <img className='logo__blue' src={logo} alt='logo' />
                <img className='logo__white' src={logoWhite} alt='logo' />
                <nav className='nav-right'>
                    <span>
                        <a href=''>UX Talks</a>
                    </span>
                    <span>
                        <a href=''>Resume</a>
                    </span>
                </nav>
                <HamburgerMenu onClick={this.toggleMenu} className={open ? 'open' : ''} />
            </HeaderWrapper>
        );
    }
};

const HeaderWrapper = styled.header`
    height: 58px;
    background-color: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    z-index:10;

    nav {
            display: none;
            span {
                padding: 15px;

                &:hover {
                    a {
                        /* transition: font-weight 0.5s ease-in-out; */
                        opacity: 1;
                        &:after {
                            transform: rotate3d(0, 0, 0, 90deg)
                        }
                    }
                }
            }
            a {
                color: white;
                text-decoration: none;
                font-size: 18px;
                position: relative;
                opacity: 0.7;
                transition: opacity 0.3s ease-in-out;

                &:after {
                    content:'';
                    position: absolute;
                    bottom: -7px;
                    left:0;
                    background-color: white;
                    height:3px;
                    width: 100%;
                    pointer-events: none;
                    transform: rotate3d(0, 1, 0, 90deg);
                    transition: transform 0.3s ease-in-out;
                }
            }
        }

    img {
        height: 50px;
        width: 50px;

        &:logo {
            &__blue {
                display: block;
            }
            &__white {
                display: none;
            }
        }
    }


/* tablet */
    @media screen and (min-width: 768px) {
    padding: 0 28px ;
    }

/* desktop */
    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        background-color: transparent;
        top: 20px;

        nav {
            display: block;
        }
        
        img {
        height: 50px;
        width: 50px;

        &.logo {
            &__blue {
                display: none;
            }
            &__white {
                display: block;
            }
        }
    }
    }
`;


export default Header;