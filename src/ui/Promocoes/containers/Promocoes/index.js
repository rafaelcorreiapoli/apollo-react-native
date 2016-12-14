import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import PromocoesList from '../../components/PromocoesList'
import waitLoading from '../../../Shared/hocs/waitLoading'

const query = gql`
query allPromocoes {
  allPromocaos {
    id
    nome
    imagemUrl
  }
}
`


export default graphql(query, {
  props: ({ data: { allPromocaos, ...props } }) => ({
    ...props,
    promocoes: allPromocaos,
  })
})(waitLoading(PromocoesList))
