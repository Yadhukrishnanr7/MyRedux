import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";

const FourthPgView = () => {
  // const selector = useSelector((state) => state.getPersonalDetails)
  // console.log(selector, "selector");


  const addDataToFirebase = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), selector);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      // console.log(querySnapshot, "querySnapshot");
      let myData = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        myData.push(doc.data())
      });
      console.log(myData, "myData");
    }
    catch { err => console.log(err); }

    // try {
    //   const docRef = doc(db, "users",);
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //   } else {
    //     // docSnap.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }
    // catch {
    //   (err) => console.log(err, "error");
    // }
  }



  return (
    <View>
      <Text>FourthPgView</Text>
      <TouchableOpacity onPress={() => addDataToFirebase()}>
        <Text>add data</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FourthPgView

const styles = StyleSheet.create({})