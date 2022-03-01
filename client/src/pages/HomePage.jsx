import React from 'react'
import styled from 'styled-components';

const Block = styled.div`
  background-color: white;
  text-align: center;
  padding: 10px;
  margin: 5px;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: normal;
  margin-top: 5px;
  color: #222222;
`
const SubTitle = styled.h4`
  color: #C0C0C0;
`

const HomePage = () => {
    return (
        <Block>
            <Title>Home Page</Title>
            <SubTitle>Click on the nav bar to view other pages</SubTitle>
        </Block>
    )
}

export default HomePage