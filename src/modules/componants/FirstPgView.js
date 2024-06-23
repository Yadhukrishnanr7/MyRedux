import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppStyles } from '../../common'
import { AppImages } from '../../common/typography'
import { useDispatch } from 'react-redux'
import { AddPersonalDetails } from '../../redux/action'

const FirstPgView = ({ navigation }) => {
  const [data, setData] = useState({
    first_name: "",
    second_name: "",
    age: "",
    address: ""
  })
  const dispatch = useDispatch()
  return (
    <View style={AppStyles.main}>
      <Text style={AppStyles.textStyle}>First Name</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, first_name: text }))}
      />
      <Text style={AppStyles.textStyle}>Last Name</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, last_name: text }))} />
      <Text style={AppStyles.textStyle}>Age</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, age: text }))} />
      <Text style={AppStyles.textStyle}>Address</Text>
      <TextInput style={[AppStyles.inputStyle, { height: 200 }]}
        multiline={true}
        onChangeText={(text) => setData(() => ({ ...data, address: text }))} />
      <TouchableOpacity style={AppStyles.fwdArrowContainer}
        onPress={() => {
          dispatch(AddPersonalDetails(data))
          navigation.navigate('SecondPg')
        }}
      >
        <Image source={AppImages.goForward} style={AppStyles.imgSize} />
      </TouchableOpacity>
    </View>
  )
}

export default FirstPgView

const styles = StyleSheet.create({})