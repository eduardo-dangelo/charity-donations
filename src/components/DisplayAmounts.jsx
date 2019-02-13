import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

const DisplayAmountsContainer = styled.div`
  margin: 15px 0;
  width: 100%;
  overflow: auto;
`;

const AmountItem = styled.div`
  float: left;
  width: 50%;
  margin-bottom: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  
  p {
    float: left;
  }
 
  h1 {
    color: #ac29b5;
    font-size: 2.5rem;
    position: relative;
    cursor: pointer;
    float: left;
    
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      background: #ac29b5;
      bottom: 2px;
      transition: .4s ease;
      
    }
    
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;

const ActionButton = styled.button`
  background: #28b12c;
  padding: 8px 25px;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  float: left;
  
  svg {
    margin-left: 5px;
  }
  
  &:before {
    content: "";
    width: 100%;
    height: 100%;
    transform: rotateZ(-45deg);
    background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1), rgba(255,255,255,0));
    position: absolute;
    left: -100%;
    opacity: .2;
  }
  
  &:hover {
    box-shadow: inset 0 2px 8px rgba(0,0,0,0.2);
    
    &:before {
      left: 100%;
      transition: .4s ease;
    }
  }
`;

class DisplayAmounts extends React.Component {
  render() {
    const { charity } = this.props
    return (
      <>
        {charity.donationDisplayAmounts && (
          <DisplayAmountsContainer>
            {charity.donationDisplayAmounts.map((item) => {
              return (
                <AmountItem key={item.amount}>
                  <h1>
                    <Fade cascade>
                      <div>
                        {item.name}
                      </div>
                    </Fade>
                  </h1>
                  <p>{item.description}</p>
                  <ActionButton>
                    Donate
                    <FaCheck />
                  </ActionButton>
                </AmountItem>
              )
            })}
          </DisplayAmountsContainer>
        )}
      </>
    )
  }
}

export default DisplayAmounts
