import { useReducer } from "react";
import { userContext as UserContext } from "./userContext";

export default function UserProvider({ children }) {
  const initialState = {
    user: {
      username: "",
      profile: "",
    },
    lastId: 1,
  };

  const [state, dispatch] = useReducer((prevState, action) => {
    switch (action.type) {
      case "EDIT_USER": {
        const newUser = { ...prevState.user, ...action.payload };
        return {
          ...prevState,
          user: newUser,
          lasId: prevState.lastId + 1,
        };
      }
      case "DELETE_USER": {
        return {
          user: {
            username: "",
            profile: "",
          },
          lastId: 1,
        };
      }
      default:
        return prevState;
    }
  }, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
