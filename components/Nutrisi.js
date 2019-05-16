import React from 'react';
import { StyleSheet, Text, View, Button, Picker } from 'react-native';

export default class Nutrisi extends React.Component {
  static navigationOptions = {
    title: 'Cek Nutrisi Balita',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#F16A53',
    },
  };
  constructor(props) {
    super(props);
    this.state = { 
      language: null,
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Nutrisi</Text>
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

