import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { useEffect, useState } from "react";
import UserContext from "./src/Context/UserContext";
import { getToken } from "./src/api/storage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkToken = async () => {
    const token = await getToken();
    if (token) setIsAuthenticated(true);
  };

  useEffect(() => {
    checkToken();
  }, []);
  return (
    <NavigationContainer>
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <QueryClientProvider client={new QueryClient()}>
          <MainNavigation />
        </QueryClientProvider>
      </UserContext.Provider>
    </NavigationContainer>
  );
}
