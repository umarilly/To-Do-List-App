// import React from 'react';
// import { Navigate, Route } from 'react-router-dom';

// const UserProtectedRoute = ({ component: Component, ...rest }) => {
//     const isAuthenticated = !!localStorage.getItem('token');

//     return isAuthenticated ? (
//         <Route {...rest} render={(props) => <Component {...props} />} />
//     ) : (
//         <Navigate to="/loginuser" />
//     );
// };

// export default UserProtectedRoute;
