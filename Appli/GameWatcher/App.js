import {NavigationContainer} from "@react-navigation/native";
import LoginRegisterStack from "./Navigation/Stacks/LoginRegisterStack";

export default function App() {
  return (
      <NavigationContainer>
        <LoginRegisterStack />
      </NavigationContainer>
  );
}

