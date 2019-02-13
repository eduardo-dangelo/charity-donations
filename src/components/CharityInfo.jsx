import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import SideBar from './SideBar'
import Donations from './Donations'
import DisplayAmounts from './DisplayAmounts'
import Loader from './Loader'

const CharityInfoBox = styled.div`
  border: 1px solid #979797;
  padding: 15px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  margin: auto;
  max-width: 800px;
  background: #fbfcfd;
  border-radius: 4px;
  font-weight: 300;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  min-height: 400px;
`;



const BoxBody = styled.div`
  max-width: 600px;
  width: 100%;
  display: table;
  
  
  h1, h2 {
    padding: 0;
    margin-top: 0;
    margin-bottom: 5px;
    font-weight: 300;
  }
`;

class CharityInfo extends React.Component {
  render() {
    const { charityDonations } = this.props
    const charity = charityDonations.charity
    const donations = charityDonations.donations

    return (
      <CharityInfoBox>
        {charity ? (
          <>
            <SideBar charity={charity}/>
            <BoxBody>
              <h1>{charity.name}</h1>
              <h2>{charity.impactStatementWhat}</h2>
              <h2>{charity.impactStatementWhy}</h2>
              <DisplayAmounts charity={charity}/>
              <Donations donations={donations}/>
            </BoxBody>
          </>
        ) : (
          <Loader/>
        )}
      </CharityInfoBox>
    )
  }
}

export default connect(
  (state) => ({
    charityDonations: state.charityDonations,
  })
)(CharityInfo)