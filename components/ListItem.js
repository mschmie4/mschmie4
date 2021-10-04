import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem=(props)=>{
    return(
        <TouchableOpacity activeOpacity={0.8} onLongPress={props.onDelete}>
            <View style={styles.listItemStyle}>
                <Text>{props.index+1}) {props.value}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create ({
    listItemStyle: {
      borderWidth: 1, 
      borderColor: 'blue', 
      padding: 5,
      backgroundColor:"#abc",
      marginVertical:5,
    },
  });

  export default ListItem;
