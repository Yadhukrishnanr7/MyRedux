import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppStyles } from '../../common'
import { AppImages } from '../../common/typography'
import { useDispatch } from 'react-redux'
import { AddEducationDetails } from '../../redux/action'

const SecondPgView = ({ navigation }) => {
  const [data, setData] = useState({
    school: "",
    university: "",
    cgpa: "",
    school_address: ""
  })
  const dispatch = useDispatch()
  return (
    <View style={AppStyles.main}>
      <Text style={AppStyles.textStyle}>School</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, school: text }))} />
      <Text style={AppStyles.textStyle}>University</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, university: text }))} />
      <Text style={AppStyles.textStyle}>CGPA</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, cgpa: text }))} />
      <Text style={AppStyles.textStyle}>School Address</Text>
      <TextInput style={[AppStyles.inputStyle, { height: 200 }]}
        onChangeText={(text) => setData(() => ({ ...data, school_address: text }))} />
      <TouchableOpacity style={AppStyles.fwdArrowContainer}
        onPress={() => {
          dispatch(AddEducationDetails(data))
          navigation.navigate('ThirdPg')
        }}
      >
        <Image source={AppImages.goForward} style={AppStyles.imgSize} />
      </TouchableOpacity>
    </View>
  )
}

export default SecondPgView

const styles = StyleSheet.create({})