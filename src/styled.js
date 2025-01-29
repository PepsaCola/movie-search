import {styled} from "styled-components";
import {Link, NavLink} from "react-router-dom";

export const HomeImg = styled.img`
    width: 100%;
    max-height: 350px;
`
export const HomeItem = styled.li`
`

export const Title = styled.h2`
    font-size: 26px;
    text-align: center;
    margin: 20px 0;
    color: white;
`

export const ItemTitle = styled.h3`
    color: white;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const HomeList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`
export const NavigateLink = styled(NavLink)`
    text-decoration: none;
    font-size: 30px;
    font-weight: bold;
    color: white;
    &.active {
        color: orange;
    }
`
export const DefaultLink = styled(Link)`
    display: block;
    width: calc((100% - 120px)/5);
    background-color: #00274D;
    border-radius: 15px;
    padding: 10px;
    box-sizing: border-box;
    text-decoration: none;
    border: 2px solid transparent;
    &:hover{
        border: orange 2px solid;
    }
`

export const Detail = styled.div`
    padding: 20px 80px ;
    border-bottom: #00274D 1px solid;
`

export const BackLink = styled(Link)`
    background-color: #00274D;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 15px;
`

export const DetailInfoDiv = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 30px;
    
`

export const DetailImg = styled.img`
    max-width: 20%;`
export const DetailInfoWrap = styled.div`
    width: 50%;`
export const DetailTitle = styled.h2``
export const DetailP = styled.p`
    margin-bottom: 20px;
`
export const DetailH3 = styled.h3``
export const DetailH4 = styled.h4``

export const DetailAdd = styled.div`
    padding: 20px 80px ;
    border-bottom: #00274D 1px solid;
`
export const DetailAddLink = styled(Link)`
    text-decoration: none;
    &:hover {
        color: orange;
    }`
export const DetailList = styled.ul`
    
`
export const DetailItem = styled.li``
export const CastList = styled.ul`
    padding: 20px 80px ;
    display: flex;
    width: 100%;
    overflow: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
`
export const CastItem = styled.li`

`
export const CastImg = styled.img`
    max-width: 15%;
`
export const CastH3 = styled.h3``
export const CastP = styled.p``

export const ReviewsList = styled.ul`
    padding: 20px 80px ;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;  
    `
export const ReviewItem = styled.li`
    background: rgba(0, 39, 77, 0.5);
    padding: 10px;
    border-radius: 15px;
    width: 51%;
`
export const ReviewTitle = styled.h3`
    color:orange;
    margin-bottom: 10px;
`
export const ReviewText = styled.p`
    
`

export const Input = styled.input`
    border: 2px solid transparent;
    background-color: #00274D;
    border-radius: 15px;
    padding: 10px;
    display: block;
    margin: 20px auto ;
    width: 20%;
    &:focus{
        color: orange;
        border-color: orange;
        outline: none;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 20px auto ;
`
export const Button = styled.button`
    background: rgba(0, 39, 77, 0.5);
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
    &:hover {
        background: rgba(255, 165, 0, 0.5);
    }
`