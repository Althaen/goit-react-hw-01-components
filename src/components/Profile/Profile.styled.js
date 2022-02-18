import styled from 'styled-components';

export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 300px;
/* border: 1px solid blue; */
border-radius: 5px;
overflow: hidden;
background-color: #fff;
padding-top: 50px;
margin-bottom: 40px;
margin-left: auto;
margin-right: auto;
box-shadow: 0px 1px 4px 0px rgba(34, 60, 80, 0.2);
`

export const Description = styled.div`
text-align: center;
margin-bottom: 20px;
/* display: flex;
flex-direction: column;
align-content: center;
justify-content: center; */

`
export const Avatar = styled.img`
width: 100px;
height: auto;
border-radius: 50%;
margin: 0 auto 20px auto;
`
export const Name = styled.p`
font-size: large;
font-weight: bold;
margin-bottom: 8px;
`
export const Tag = styled.p`
color: #AAC;
margin-bottom: 8px;
`
export const Location = styled.p`
color: #AAC;
/* margin-bottom: 8px; */
`
export const ProfileStats = styled.ul`
display: flex;
`
export const ProfileStatsItem = styled.li`
display: flex;
flex-direction: column;
background-color: #EEE;
border-top: 1px solid #CCC;
&:not(:last-child) {border-right: 1px solid #CCC;}
align-content: center;
justify-content: center;
width: 33%;
height: 60px;
text-align: center;
`
export const Quantity = styled.span`
/* color: #fff; */
font-size: large;
font-weight: bold;
`
export const Label = styled.span`
color: #AAA;
margin-bottom: 4px;
`