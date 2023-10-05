import { View, Text , Pressable} from 'react-native'
import React from 'react'

function pressedFunction(){

}


export default function PressableButton({children, pressedFunction, pressedStyle, defaultStyle}) {
    return( 
    <Pressable 
        onPress={pressedFunction} 
        style = {({pressed})=> 
        [
            styles.defaultStyle,
            { 
            backgroundColor: pressed
                ? '#add'
                : 'red',
            opacity: pressed
                ? 0.5
                : 1
            },
        ]        
    }>
        
    </Pressable>)
}

const styles = StyleSheet.create({
    defaultStyle: {
      flexDirection: "row",
      backgroundColor: "#aaa",
      marginBottom: 20,
      borderRadius: 5,
      alignItems: "center",
    },
  });