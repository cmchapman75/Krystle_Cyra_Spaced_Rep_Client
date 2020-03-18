export default {
  
  API_ENPOINT: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_ENDPOINT : 'http://localhost:8000',
  TOKEN_KEY: 'blogful-client-auth-token',
}
