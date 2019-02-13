import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CharityInfoBox = styled.div`
  border: 1px solid;
  padding: 15px;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  margin: 15px auto;
  max-width: 800px;
`;

const Sidebar = styled.div`
  width: 200px;
  margin-right: 15px;
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

const BoxBody = styled.div`
  max-width: 600px;
  display: table;
  
  h1, h3 {
    margin-top: 0;
    margin-bottom: 15px;
  }
`;

const DisplayAmountsContainer = styled.div`
  
  > div {
    float: left;
    width: 50%;
  }
`;

const DonorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DonorInfo = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
`;

const Text = styled.div``;

class CharityInfo extends React.Component {
  render() {
    const { charityDonations } = this.props
    const charity = charityDonations.charity
    const donations = charityDonations.donations

    if (!charity) {
      return 'loading'
    }

    return (
      <CharityInfoBox>
        <Sidebar>
          <LogoContainer>
            <img src={charity.logoAbsoluteUrl} alt=""/>
          </LogoContainer>
          <Description>
            {charity.description}
          </Description>
        </Sidebar>
          <BoxBody>
            <h1>{charity.name}</h1>
            <h3>{charity.impactStatementWhat}</h3>
            <h3>{charity.impactStatementWhy}</h3>

            <DisplayAmountsContainer>
              {charity.donationDisplayAmounts && charity.donationDisplayAmounts.map((item) => {
                return (
                  <div key={item.amount}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <button>
                      Donate
                    </button>
                  </div>
                )
              })}
            </DisplayAmountsContainer>
            <div>

            {donations.length > 0 ? donations.map((donation, key ) => {
              return (
                <DonorContainer key={donation.imageUrl}>
                  <DonorInfo>
                    <img src={donation.imageUrl} alt=""/>
                    <Text>
                      <h2>{donation.donorDisplayName}</h2>
                      <p>{donation.message}</p>
                    </Text>
                  </DonorInfo>
                  <h1>£{donation.amount}</h1>
                </DonorContainer>
              )
            }) : (
              <div>
                loading
              </div>
            )}
            </div>

          </BoxBody>
      </CharityInfoBox>
    )
  }
}

export default connect(
  (state) => ({
    charityDonations: state.charityDonations,
  })
)(CharityInfo)