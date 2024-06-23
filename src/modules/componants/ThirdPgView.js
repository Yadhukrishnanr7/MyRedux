import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppStyles } from '../../common'
import { AppImages } from '../../common/typography'
import { useDispatch } from 'react-redux'
import { AddPreviousSkills } from '../../redux/action'

const ThirdPgView = ({ navigation }) => {
  const [data, setData] = useState({
    skills: "",
    experiance: "",
    expected_lpa: "",
    known_plg: ""
  })
  const dispatch = useDispatch()
  return (
    <View style={AppStyles.main}>
      <Text style={AppStyles.textStyle}>Skills</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, skills: text }))} />
      <Text style={AppStyles.textStyle}>Experiance</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, experiance: text }))} />
      <Text style={AppStyles.textStyle}>Expected LPA</Text>
      <TextInput style={AppStyles.inputStyle}
        onChangeText={(text) => setData(() => ({ ...data, expected_lpa: text }))} />
      <Text style={AppStyles.textStyle}>Known Programming Languages</Text>
      <TextInput style={[AppStyles.inputStyle, { height: 200 }]}
        onChangeText={(text) => setData(() => ({ ...data, known_plg: text }))} />
      <TouchableOpacity style={AppStyles.fwdArrowContainer}
        onPress={() => {
          dispatch(AddPreviousSkills(data))
          navigation.navigate('FourthPg')
        }}
      >
        <Image source={AppImages.goForward} style={AppStyles.imgSize} />
      </TouchableOpacity>
    </View>
  )
}

export default ThirdPgView

const styles = StyleSheet.create({})