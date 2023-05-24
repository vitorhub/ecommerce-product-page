"use client"
import styled from 'styled-components'

interface IBoleano {
    enviaBol?: boolean;
}


export const WrapArrowPrevious = styled.div`
    position: absolute;
    left: -25px;
    top: 50%;
    width: 50px; height: 50px;
    background-color: whitesmoke;
    z-index: 13;
    border-radius: 50%;
    cursor: pointer;
`
export const ImageAnterior = styled.img`
    position: absolute;
    z-index: 11;
    top: 0; left: 0; bottom: 0; right: 0;
    margin: auto;
    &:hover {   /* importante para svg */
        filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    }
    transition: filter .5s;
`
export const WrapArrowNext = styled.div`
    position: absolute;
    right: -25px;
    top: 50%;
    width: 50px; height: 50px;
    background-color: whitesmoke;
    z-index: 13;
    border-radius: 50%;
    cursor: pointer;
    `
export const ImageProxima = styled.img`
    position: absolute;
    z-index: 11;
    top: 0; left: 0; bottom: 0; right: 0;
    margin: auto;
    &:hover {
        filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
    }
    transition: filter .5s;
`

export const Suspensa = styled.div`
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
margin: 10px auto;
width: 500px;
height: 500px;
z-index: 2;
background-color: red;
`
export const WrapImages = styled.div`
background-color: azure;
img{
    border-radius: 20px;
}
`

export const Overlay = styled.div`
position: fixed;
top: 0; bottom: 0; right: 0; left: 0;
background-color: rgba(120,0,0, .5);
z-index: 1;
`

export const SecondImageSuspensa = styled.div`
width: 90%;
height: fit-content;
z-index: 10;
margin: auto;
margin-top: 520px;
position: relative;
background-color: blue;
display: flex;
justify-content: space-between;
gap: 10px;
`
export const ImageB = styled.img<IBoleano>`
width: 23%;
display: flex;
flex-direction: row;
border-radius: 10px;
cursor: pointer;
filter: ${props => props.enviaBol ?
        "invert(.9)" :
        ""
    };
&:hover{
    filter: invert(.9);
}
`
