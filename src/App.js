import React, { Component } from 'react'
import './App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from './redux/CharityReducer'
import Header from './components/Header'
import CharityInfo from './components/CharityInfo'
import styled from 'styled-components'

const Body = styled.div`
  padding: 15px;
`

class App extends Component {
  componentWillMount() {
    const { actions } = this.props
    actions.getCharity('183092')
    actions.getCharityDonations('183092')
  }

  render() {
    return (
      <>
        <Header/>
        <Body>
          <CharityInfo/>
        </Body>
      </>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
  }),
)(App);
