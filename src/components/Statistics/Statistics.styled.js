import styled from 'styled-components'

const  getRandomColor = function() { 
    return Math.floor(Math.random()*16777215).toString(16);
}
export const StatContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 50px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
`

export const StatisticsTitle = styled.h2`
text-transform: uppercase;
color: #DDD;

`
export const StatList = styled.ul`
display: flex;
`
export const StatListItem = styled.li`
background-color: #${getRandomColor};
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
text-align: center;
width: 60px;
height: 60px;
`
export const Percentage = styled.span`
color: #fff;
font-size: large;
font-weight: bold;
`
export const Label = styled.span`
color: #fff;
margin-bottom: 4px;
`