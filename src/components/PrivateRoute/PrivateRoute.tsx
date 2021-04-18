import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({ children, ...rest }: React.PropsWithChildren<{path: any}>) {
  let auth: any = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
