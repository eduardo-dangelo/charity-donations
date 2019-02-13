import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../redux/CharityReducer'

const HeaderContainer = styled.div`
  background: #fdfdfe;
  border-bottom: 1px solid;
  color: #989898;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0;
  font-weight: 300;
`;

class Header extends React.Component {
  handleChange(e) {
    const { actions } = this.props
    actions.getCharity(e.target.value)
    actions.getCharityDonations(e.target.value)
  }

  render() {
    return (
      <HeaderContainer>
        <Title>Charity Donations</Title>
        <select onChange={this.handleChange.bind(this)}>
          <option value="183092">British Heart Foundation</option>
          <option value="2116">Macmimlan Cancer Support</option>
          <option value="2357">Cancer Research UK</option>
          <option value="13441">Ofam</option>
          <option value="183560">National Trust</option>
          <option value="1870">Save the Children</option>
        </select>
      </HeaderContainer>
    )
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(Header);