import * as react from "react";
import {Button, Text, View, StyleSheet} from "react-native";

function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>
        <Button
          title="Get data"
        />
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

  export default SettingsScreen