"use client"
import styled from 'styled-components'

export const SecaoImagens = styled.section`
`
export const MainImage = styled.div`
        width: 300px;
        height: 300px;
        position: relative;
`
export const SecondImage = styled.div`
`
export const Suspensa = styled.div`
position: absolute;
top: 0; right: 0; bottom: 0; left: 0;
margin: auto;
width: 300px;
height: 300px;
z-index: 2;
`
export const Overlay = styled.div`
position: fixed;
top: 0; bottom: 0; right: 0; left: 0;
background-color: rgba(0,0,0, .5);
z-index: 1;
`

export const SecaoValores = styled.section`

`