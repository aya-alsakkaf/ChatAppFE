import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Auth/Login";
import Register from "../../Screens/Auth/Register";
import NAVIGATION from "..";
import { useContext } from "react";
import UserContext from "../../Context/UserContext";
import Logout from "../../Screens/Auth/Logout";

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const { isAuthenticated } = useContext(UserContext);
  return (
    <Stack.Navigator>
      {isAuthenticated ? (
        <>
          <Stack.Screen name={NAVIGATION.AUTH.LOGOUT} component={Logout} />
        </>
      ) : (
        <>
          <Stack.Screen name={NAVIGATION.AUTH.LOGIN} component={Login} />
          <Stack.Screen name={NAVIGATION.AUTH.REGISTER} component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
