import styled from 'styled-components' // para styled components

interface IContainer{
    change?: boolean;
    linha?: boolean;
}

export const Container = styled.div<IContainer>`
    background-color: ${props => props.change ? 
    "#161722" : 
    "#FFF"
    };
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-image: ${props => props.change ? 
    "url(/images/bg-desktop-dark.jpg)" : 
    "url(/images/bg-desktop-light.jpg)"
    };
    background-repeat: no-repeat;
    transition: background-image 2s 0s;
    @media (max-width: 430px){
        background-image: ${props => props.change ? 
    "url(/images/bg-mobile-dark.jpg)" : 
    "url(/images/bg-mobile-light.jpg)"
    };
    background-size: 100%;
    }

`