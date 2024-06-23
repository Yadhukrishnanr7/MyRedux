import { NavigationContainer } from "@react-navigation/native";
import { MyStack } from "./RootNavigation";

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}
export default AppNavigation