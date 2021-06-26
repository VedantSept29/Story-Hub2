import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>STORY HUB APP</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>
           I have developed this Story Hub App so that all story writers, authors and book lovers can read and write stories on this platform. The comittee looks forward to tending to your needs and reading your fantastic stories. I hope you enjoy the app!
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#00cbff',
    flex: 1,
  },
  header: {
    backgroundColor: 'gold',
  },
  headerText: {
    fontFamily: 'Comic Sans MS',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'Comic Sans MS',
    fontSize: 20,
    padding: 15,
  },
});
