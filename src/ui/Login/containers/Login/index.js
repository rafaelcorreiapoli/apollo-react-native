import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import LoginForm from '../../components/LoginForm'
import waitLoading from '../../../Shared/hocs/waitLoading'

const query = gql`
query allRestaurantes {
  allRestaurantes {
    id
    nome
    backgroundUrl
  }
}
`


// export default graphql(query)(LoginForm)
export default LoginForm
