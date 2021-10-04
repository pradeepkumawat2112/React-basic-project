import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (childern, ...rest) => {
    const Auth = false;
    return (
        <Route {...rest} render={() => Auth ? (childern) : (<Redirect to={'/Login'} />)} />
    );
}

export default PrivateRoute;