import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {RFPercentage} from 'react-native-responsive-fontsize';

const registerValidationSchema = yup.object().shape({
  firstname: yup.string().required('First Name is required'),
  lastname: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is required'),
  phonenumber: yup
    .string()
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactlt 10 digits')
    .required('Phone Number is required')
    .matches(/^[0-9]+$/, 'Must be only digits'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
    ),
  confirmpassword: yup
    .string()
    .required('Confirm Password is required')
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const SignUpScreen = ({navigation}: {navigation: any}) => {
  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmpassword: '',
      }}
      validationSchema={registerValidationSchema}
      onSubmit={values => console.log(values)}>
      {({handleChange, values, errors, setFieldTouched, touched}) => (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.input}
              value={values.firstname}
              placeholder="Enter firstname"
              onChangeText={handleChange('firstname')}
              onBlur={() => setFieldTouched('firstname')}
            />
            {errors.firstname && touched.firstname && (
              <Text style={styles.errors}>{errors.firstname}</Text>
            )}

            <TextInput
              style={styles.input}
              value={values.lastname}
              placeholder="Enter lastname"
              onChangeText={handleChange('lastname')}
              onBlur={() => setFieldTouched('lastname')}
            />
            {errors.lastname && touched.lastname && (
              <Text style={styles.errors}>{errors.lastname}</Text>
            )}

            <TextInput
              style={styles.input}
              value={values.email}
              placeholder="Enter email"
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              autoCapitalize="none"
            />
            {errors.email && touched.email && (
              <Text style={styles.errors}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              value={values.phonenumber}
              placeholder="Enter Phonenumber"
              onChangeText={handleChange('phonenumber')}
              onBlur={() => setFieldTouched('phonenumber')}
              keyboardType="numeric"
            />
            {errors.phonenumber && touched.phonenumber && (
              <Text style={styles.errors}>{errors.phonenumber}</Text>
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

            <TextInput
              style={styles.input}
              value={values.confirmpassword}
              placeholder="Confirm password"
              onChangeText={handleChange('confirmpassword')}
              onBlur={() => setFieldTouched('confirmpassword')}
              secureTextEntry
            />
            {errors.confirmpassword && touched.confirmpassword && (
              <Text style={styles.errors}>{errors.confirmpassword}</Text>
            )}

            <TouchableOpacity
              onPress={() => navigation.navigate('homeScreen')}
              style={styles.loginButton}>
              <Text style={styles.textStyle}>Register</Text>
            </TouchableOpacity>

            <View style={styles.bottomTextView}>
              <Text style={styles.bottomText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
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
    color: '#53C1BA',
    marginLeft: 5,
  },
  errors: {
    color: 'red',
  },
  bottomTextView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  bottomText: {
    fontFamily: 'zwodrei',
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

export default SignUpScreen;
