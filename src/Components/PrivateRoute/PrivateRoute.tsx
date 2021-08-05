import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { Context } from "../../Context/Context";

const PrivateRoute = ({ children, ...rest }: any) => {
  const { userData } = useContext(Context);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
