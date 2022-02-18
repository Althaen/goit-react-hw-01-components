import styled from 'styled-components'

export const FriendListContainer = styled.ul`
margin-left: auto;
margin-right: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const FriendListItemContainer = styled.li`
display: flex;
align-items: center;
width: 200px;
height: 60px;
border-radius: 1px;
box-shadow: 0px 1px 4px 0px rgba(34, 60, 80, 0.2);
background-color: #FFF;
&:not(:last-child) {margin-bottom: 5px;}
padding-left: 8px;
`
export const Status = styled.span`
display: block;
background-color: ${(props) => {return props.isOnline ? `green` : `red` }};
width: 8px;
height: 8px;
border-radius: 50%;
margin-right: 8px;
`

export const Name = styled.p`
margin-left: 8px;
font-size: large;
font-weight: bold;
`