import React from 'react';
import styled from 'styled-components';
import bg from 'assets/BG_5.jpg';
import downSVG from 'assets/down.svg';
import profilePic from 'assets/Jacob-Heflin-2017.jpg';
const Hero = () => {
    return (<HeroWrapper>
        <Content>
            <Background />
            <h1>Jacob Helfin</h1>
            <h2>User Experiences Design</h2>
            <img className='profile-pic' src={profilePic} alt='Profile Pic' />
            <svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' width='64' height='64'
                viewBox='0 0 64 64'>
                <path strokeLinejoin='bevel'
                    strokeMiterlimit='10' d='M15,24L32,41L49,24' strokeDasharray='49,51' />
            </svg>
        </Content>

    </HeroWrapper>
    );
}
const Background = styled.div`
    background: url(${bg}) #999;
    background-size: cover;
    background-position: center;
    /* padding-top: calc(9/16 * 100%); */
    filter: brightness(0.9);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    z-index: -1;
`;

const Content = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    height: 100vh;

    h1 {
        font-size: 54px;
        margin-bottom: 5px;
    }
    h2 {
        font-size: 27.2px;
        margin-bottom: 55px;
    }
    .profile-pic {
        width: 250px;
        margin-bottom: 25px;
        border-radius: 50%;
        border: 5px solid white;
    }
    svg {
        fill: none;
        stroke: #fff;
        stroke-width: '2';
    }

    @media screen and (min-width: 1024px){
        height: 70vh;
        min-height: 700px;
    }

`;

const HeroWrapper = styled.div`
        overflow: hidden;
    `;

export default Hero;