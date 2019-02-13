import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import { keyframes } from 'styled-components'
import styled from 'styled-components'

const Spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`;

const LoaderContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  svg {
    font-size: 3rem;
    color: lightgray;
    animation: ${Spin} 1.4s linear infinite;
  }
`;

class Loader extends React.Component {
  render() {
    return (
      <LoaderContainer>
        <FaSpinner/>
      </LoaderContainer>
    )
  }
}

export default Loader
