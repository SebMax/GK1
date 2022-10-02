import * as react from "react";
import {Button, Text, View, StyleSheet} from "react-native";



function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
        <Button 
        title="Klik mig"
        onPress={() => navigation.navigate('Settings')} />
      </View>
    );
  } 

  //Local styling 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default HomeScreen