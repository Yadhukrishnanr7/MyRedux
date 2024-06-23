import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstPgView, FourthPgView, SecondPgView, ThirdPgView } from '../modules/componants';
import { Text, View } from 'react-native';
import { AppStyles } from '../common';
import Header from '../common/header';

const Stack = createNativeStackNavigator();

export function MyStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="FirstPage" component={FirstPgView}
                options={{
                    header: () => <Header title={"Personal Details"} />
                }} />
            <Stack.Screen name="SecondPg" component={SecondPgView} options={{
                header: () => <Header title={"Education Status"} />
            }} />
            <Stack.Screen name="ThirdPg" component={ThirdPgView}
                options={{
                    header: () => <Header title={"Previous Skills"} />
                }} />
            <Stack.Screen name="FourthPg" component={FourthPgView}
                options={{
                    header: () => <Header title={"Enterd Details"} />
                }} />
        </Stack.Navigator>
    );
}