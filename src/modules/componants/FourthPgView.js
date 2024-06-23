import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const FourthPgView = () => {
  const selector = useSelector((state) => state.getPersonalDetails)
  console.log(selector, "selector");
  return (
    <View>
      <Text>FourthPgView</Text>
    </View>
  )
}

export default FourthPgView

const styles = StyleSheet.create({})