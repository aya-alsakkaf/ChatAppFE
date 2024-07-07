import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import HomeNavigation from "./src/navigation/HomeNavigation/HomeNavigation";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      {/* <HomeNavigation /> */}
      <MainNavigation />
    </NavigationContainer>
  );
}
