import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ goal, deleteHandler, pressHandler }) {
  function deletePressed() {
    deleteHandler(goal.id);
  }

  function goalPressed(){
    pressHandler(goal.id);
    console.log("I am pressed!");
  }
  return (
    <Pressable 
        // style={styles.goalContainer} 
        onPress={goalPressed} 
        android_ripple={{color:"#ddd"}}
        style = {({pressed})=> 
        [
            styles.goalContainer,
            { 
            backgroundColor: pressed
                ? '#add'
                : 'red',
            opacity: pressed
                ? 0.5
                : 1
            },
        ]        
    }
    >   
        <Text style={styles.text}>{goal.text}</Text>
        {/* <View style={{ height: "100%" }}> */}
        <Button color="black" title="X" onPress={deletePressed} />
        {/* </View> */}
    </Pressable>
  );
}



const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    backgroundColor: "#aaa",
    marginBottom: 20,
    borderRadius: 5,
    alignItems: "center",
  },

  text: {
    color: "#a09",
    padding: 5,
    fontSize: 30,
  },

  pressed: {
    backgroundColor: "#ff0000",
  }
});