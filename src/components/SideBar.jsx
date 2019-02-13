import React from 'react'
import styled from 'styled-components'

const Sidebar = styled.div`
  width: 200px;
  margin-right: 30px;
`;
const Description = styled.p`
  text-align: justify;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 15px;
  
  img {
    flex: 1;
    width: 100%;
  }
`;

class SideBar extends React.Component {
  render() {
    const { charity } = this.props
    return (
      <Sidebar>
        <LogoContainer>
          <img src={charity.logoAbsoluteUrl} alt=""/>
        </LogoContainer>
        <Description>
          {charity.description}
        </Description>
      </Sidebar>
    )
  }
}

export default SideBar