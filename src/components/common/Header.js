import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Header = ({ headerText }) => {   
    return ( 
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}> {headerText} </Text> 
        </View>  
    ); 
};
  
const styles = StyleSheet.create({
  viewStyle: {
     backgroundColor: '#f8f8f8',  
     justifyContent: 'center',
     alignItems: 'center',
     height: 60,
     paddingTop: 15,
     shadowColor: '#000',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.9,
     elevation: 3,
     position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  }
});

export { Header };
