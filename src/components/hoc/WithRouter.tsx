import { useLocation, useNavigate, useParams } from 'react-router-dom'

export interface WithRouterInteface {
  location: ReturnType<typeof useLocation>
  navigate: ReturnType<typeof useNavigate>
  params: ReturnType<typeof useParams>
}

/* eslint-disable react-hooks/rules-of-hooks */
export const WithRouter = <P extends {}>(Component: React.ComponentType<P>) => {
  return (props: Omit<P, keyof WithRouterInteface>) => {
    const location = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    return <Component {...(props as P)} {...{ location, navigate, params }} />
  }
}

/* eslint-enable react-hooks/rules-of-hooks */
