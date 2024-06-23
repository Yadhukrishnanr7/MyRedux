import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppStyles } from './MyStyles'

const Header = (props) => {
    return (
        <View style={AppStyles.headerStyle}>
            <Text style={AppStyles.headerTitle}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})