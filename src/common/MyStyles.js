import { StyleSheet } from "react-native"

export const AppStyles = StyleSheet.create({
    main: {
        flex: 1,
        margin: 20
    },
    textStyle: {
        fontSize: 16,
        fontWeight: "800",
        marginTop: 10,
        color: "#000"
    },
    inputStyle: {
        width: "100%",
        borderWidth: 1,
    },
    headerStyle: {
        height: 60,
        justifyContent: 'center'
    },
    headerTitle: {
        fontSize: 18,
        color: "black",
        fontWeight: '900',
        alignSelf: 'center'
    },
    fwdArrowContainer: { justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    imgSize: {
        width: 50, height: 50
    }
})