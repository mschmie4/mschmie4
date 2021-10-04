import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const FishInput=(props)=>{

    const [newFish, setFish]=useState('');
    
    const fishInputHandler=(enteredText)=>{
        setFish(enteredText);
    }
    const addFish=()=>{
        props.onAddFish(newFish);
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
                onChangeText={fishInputHandler}/>  
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

export default FishInput;