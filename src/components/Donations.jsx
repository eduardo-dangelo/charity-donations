import React from 'react'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import styled from 'styled-components'
import Loader from './Loader'

const DonationsContainer = styled.div`
  margin-top: 30px;
`;

const DonorInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`;

const DonorContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 15px;
  
  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }
  
  &:last-child {
  
    ${DonorInfo} {
      border-bottom: none;
    }
  }
  
  h3 {
    color: #ac29b5;
    margin: 0;
  }
 
`;


const Text = styled.div`
  max-width: 300px;
  
  p {
    margin-top: 0;
  }
`;

const DonationLoader = styled.div`
  text-align: left;
  width: auto;
  float: left;
  
  svg {
    font-size: 2rem;
  }
`

class Donations extends React.Component {
  render() {
    const { donations } = this.props
    return (
      <>
        <h3>Donations</h3>
        <DonationsContainer>
          <Fade bottom cascade>
            <div>
              {donations.length > 0 && donations.map((donation, key) => {
                return (
                  <DonorContainer key={key}>
                    <img src={donation.imageUrl} alt={donation.donorDisplayName}/>
                    <DonorInfo>
                      <Text>
                        <h2>{donation.donorDisplayName}</h2>
                        <p>{donation.message}</p>
                      </Text>
                      <h3>
                        <Flip top cascade>
                          <div>
                            {donation.amount && `£${donation.amount.toFixed(2)}`}
                          </div>
                        </Flip>
                      </h3>
                    </DonorInfo>
                  </DonorContainer>
                )
              })}
            </div>
          </Fade>
          {donations.length === 0 && (
            <DonationLoader>
              <Loader/>
            </DonationLoader>
          )}

        </DonationsContainer>
      </>
    )
  }
}

export default Donations
