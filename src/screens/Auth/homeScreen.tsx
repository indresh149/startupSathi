import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();

  const logoutHandler = () => {
    AsyncStorage.removeItem('islogin');
    navigation.navigate('Login' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          logoutHandler();
        }}
        style={styles.logout}>
        <Text style={styles.textlogout}>Logout</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('startup' as never)}
          style={styles.startupButton}>
          <Text style={styles.textStyle}>Looking for startup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('cofounder' as never)}
          style={styles.startupButton}>
          <Text style={styles.textStyle}>Looking for co-founder</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startupButton: {
    width: deviceWidth * 0.8,
    height: deviceHeight / 15,
    backgroundColor: '#1B75BB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontSize: RFPercentage(2.2),
  },
  logout: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#1B75BB',
    padding: 10,
    borderRadius: 20,
  },
  textlogout: {
    fontSize: RFPercentage(2.2),
    color: 'white',
  },
});

export default HomeScreen;
