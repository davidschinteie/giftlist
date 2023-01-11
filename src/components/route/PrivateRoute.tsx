import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <>
        <Navigate to="/sign-in" replace />
      </>
    );
  }

  return <>{children}</>;
};

export { PrivateRoute };
