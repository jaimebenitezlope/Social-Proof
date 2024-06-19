import styled from "styled-components";

const StyledDiv= styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
h3{
    color: #512051;
}
background-color: #F7F2F7;
margin-top: 10px;
border-radius: 10px;
`

const StyledImg =styled.div`
display: flex;
flex-direction: row;
img{
    margin-right: 5px;
    margin-top: 10px;
}

`


export {StyledDiv, StyledImg}