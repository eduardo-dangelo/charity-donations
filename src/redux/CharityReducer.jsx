import axios from 'axios'
const SET_CHARITY = 'SET_CHARITY'
const SET_DONATIONS = 'SET_DONATIONS'
const SET_LOADING_STATUS = 'SET_LOADING_STATUS'
const SET_ERROR = 'SET_ERROR'

const initialValues = {
  isLoading: false,
  donations: [],
  charity: {},
  error: null,
}

export function reducer(state = initialValues, action) {
  switch (action.type){
    case SET_CHARITY:
      return {
        ...state,
        charity: action.payload
      }
    case SET_DONATIONS:
      return {
        ...state,
        donations: action.payload
      }
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const loading = (status) => ({ type: SET_LOADING_STATUS, payload: status })
const setCharity = (charity) => ({ type: SET_CHARITY, payload: charity })
const setDonations = (donations) => ({ type: SET_DONATIONS, payload: donations })
const setError = (error) => ({ type: SET_CHARITY, payload: error })

const getCharity = (charityId) => {
  const appId = process.env.REACT_APP_API_KEY
  const url = `https://api.justgiving.com/${appId}/v1/charity/${charityId}`

  return (dispatch) => {
    dispatch(loading(true))

    return axios.get(url)
      .then((response) => {
        dispatch(loading(false))
        dispatch(setCharity(response.data))
      })
      .catch((e) => {
        dispatch(loading(false))
        dispatch(setError(e))
      })
  }
}

const getCharityDonations = (charityId) => {
  const appId = process.env.REACT_APP_API_KEY
  const url = `https://api.justgiving.com/${appId}/v1/charity/${charityId}/donations`

  return (dispatch) => {
    dispatch(loading(true))
    return axios.get(url)
      .then((response) => {
        dispatch(loading(false))
        dispatch(setDonations(response.data))
      })
      .catch((e) => {
        dispatch(loading(false))
        dispatch(setError(e))
      })
  }
}

export const actions = {
  getCharity,
  getCharityDonations
}