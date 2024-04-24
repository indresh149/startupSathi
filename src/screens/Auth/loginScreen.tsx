import {Formik} from 'formik';
import {useState} from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RFPercentage} from 'react-native-responsive-fontsize';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is required'),
  password: yup.string().required('Password is required'),
});

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  }

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => {
        AsyncStorage.setItem('islogin', true.toString());
        navigation.navigate('homeScreen');
      }}
      validationSchema={loginValidationSchema}>
      {({
        handleChange,
        values,
        errors,
        setFieldTouched,
        touched,
        isValid,
      }) => (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.logo}>
              <Text style={styles.textshowHeader}>WELCOME</Text>
            </View>

            <View style={styles.wrapper}>
              <TextInput
                style={styles.input}
                value={values.email}
                placeholder="Enter email"
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
              />
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}

              <TextInput
                style={styles.input}
                value={values.password}
                placeholder="Enter password"
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}

              <TouchableOpacity
                onPress={() => navigation.navigate('homeScreen')}
                style={styles.loginButton}>
                <Text style={styles.textStyle}>Login</Text>
              </TouchableOpacity>

              <View style={styles.bottomTextView}>
                <Text style={styles.textshow}>Don't have an account? </Text>
                <TouchableOpacity onPress={switchAuthModeHandler}>
                  <Text style={styles.link}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
    fontFamily: 'zwodrei',
    padding: 5,
  },
  link: {
    fontFamily: 'zwodrei',
  },
  textshowHeader: {
    fontFamily: 'zwodrei',
    fontSize: RFPercentage(8),
    marginBottom: 10,
    color: '#1B75BB',
  },
  textshowLogin: {
    color: '#1B75BB',
    fontFamily: 'zwodrei',
    fontSize: RFPercentage(3),
    marginBottom: 10,
  },
  logo: {
    marginTop: deviceHeight / 4.5,
    maxHeight: 400,
    marginBottom: 10,
    alignSelf: 'center',
  },
  errors: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  textshow: {
    fontFamily: 'zwodrei',
  },
  bottomTextView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginButton: {
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
});

export default LoginScreen;
