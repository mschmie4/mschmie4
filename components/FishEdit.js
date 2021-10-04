import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal, Alert} from 'react-native';

const FishEdit=(props)=>{

    const [newFish, setFish]=useState('');
    async function updateFish() {
        const response = await fetch("http://10.0.2.2:8080/rest/fishservice/updatefish",
        {
          method:'PUT',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({id:props.fishToEdit.id,breed:newFish, weight:"1100"})
        });
        Alert.alert("New Fish added");
        // const responseData = await response.json();
        // console.log(responseData);
        // setFishList(fishList=>[...fishList, responseData]);
    }
    const fishInputHandler=(enteredText)=>{
        setFish(enteredText);
    }

    //Async function can be written in two ways
    // async function addFish(){
    const addFish = async()=>{
        //await must be inside async function
        //Without await the call of onAddFish might be too early
        await updateFish();
        props.onEditFish(newFish);
        setFish('');
    }
    const cancelFish=()=>{
        props.onCancelFish();
        // setFish('');
    }
    return (
        <Modal visible={props.visibility} animationType="slide">
        <View style={styles.formStyle}>
            <TextInput placeholder="Fish's name" 
                style={styles.inputStyle} 
                onChangeText={fishInputHandler}
                defaultValue={props.fishToEdit.breed}
                />  
            <View style={styles.buttonView}>
                <View style={styles.button}>
                <Button color='red' title="Cancel" onPress={cancelFish}/>
                </View>
                <View style={styles.button}>
                <Button color='green' title="Add" onPress={addFish}/>
                </View>
            </View>
        </View>
        </Modal>
    );
}

const styles=StyleSheet.create({
    formStyle: {
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:"center"
      },
      inputStyle: {
        borderWidth: 2, 
        borderColor: 'red', 
        padding: 10,
        width:'80%',
        marginBottom:10,
      },
      buttonView:{
        width:'60%',
        flexDirection: 'row',
        justifyContent:"space-around",
      },
      button:{
        width:'40%',
      }
});

export default FishEdit;
