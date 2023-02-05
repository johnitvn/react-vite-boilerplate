import { Component, ReactNode } from 'react'
import Error from '../../components/errors/Error'

export default class UnAuthorized extends Component {
  render(): ReactNode {
    return <Error code={401} />
  }
}
