import LoginForm from '../../components/LoginForm'
import { connect } from 'react-redux'
import { loginWithPassword } from '../../actions'

const mapDispatchToProps = dispatch => ({
  loginWithPassword() {
    dispatch(loginWithPassword())
  }
})
// export default graphql(query)(LoginForm)
export default connect(null, mapDispatchToProps)(LoginForm)
