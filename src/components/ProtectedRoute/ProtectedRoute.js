import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";

const ProtectedRoute = ({element: Component,...props}) => {
  const navigate = useNavigate();
  const currentUser = React.useContext(CurrentUserContext);
  useEffect(() => {
    if (currentUser == null) {
      navigate("/");
    }
  })
  return <Component {...props} />
};


export default ProtectedRoute;