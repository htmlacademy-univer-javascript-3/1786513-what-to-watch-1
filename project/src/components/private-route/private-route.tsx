import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  hasAccess?: boolean;
};

function PrivateRoute({ children, hasAccess }: PrivateRouteProps): JSX.Element {
  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
