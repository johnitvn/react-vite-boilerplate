import { Component, ReactNode } from 'react'
import Error from '../../components/errors/Error'

export default class NotFound extends Component {
  render(): ReactNode {
    return <Error code={404} />
  }
}
