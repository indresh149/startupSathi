import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const StartUpScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', {name, education, skills});
    navigation.navigate('homeScreen' as never);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Galgotias University', value: '1'},
    {label: 'Amity University', value: '2'},
    {label: 'IIT Delhi', value: '3'},
    {label: 'IIT Bombay', value: '4'},
    {label: 'IIT Kanpur', value: '5'},
    {label: 'IIT Kharagpur', value: '6'},
  ]);

  const [openSkills, setOpenSkills] = useState(false);
  const [valueSkills, setValueSkills] = useState(null);
  const [itemsSkills, setItemsSkills] = useState([
    {label: 'React Native', value: '1'},
    {label: 'React Js', value: '2'},
    {label: 'Node Js', value: '3'},
    {label: 'Express Js', value: '4'},
    {label: 'MongoDB', value: '5'},
    {label: 'Firebase', value: '6'},
    {label: 'AWS', value: '7'},
    {label: 'Azure', value: '8'},
    {label: 'Google Cloud', value: '9'},
    {label: 'Python', value: '10'},
    {label: 'Django', value: '11'},
    {label: 'Flask', value: '12'},
    {label: 'Machine Learning', value: '13'},
    {label: 'Deep Learning', value: '14'},
    {label: 'Data Science', value: '15'},
    {label: 'Data Analyst', value: '16'},
    {label: 'Data Engineer', value: '17'},
    {label: 'Data Architect', value: '18'},
    {label: 'Data Modeler', value: '19'},
    {label: 'Data Admin', value: '20'},
    {label: 'Data Security', value: '21'},
  ]);

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text>Education:</Text>
      <DropDownPicker
        style={styles.input}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <Text>Skills:</Text>
      {!open && (
        <DropDownPicker
          style={styles.input}
          multiple={true}
          open={openSkills}
          value={valueSkills}
          items={itemsSkills}
          setOpen={setOpenSkills}
          setValue={setValueSkills}
          setItems={setItemsSkills}
        />
      )}
      <TouchableOpacity onPress={handleSubmit} style={styles.startupButton}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: deviceHeight / 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  startupButton: {
  width: deviceWidth * 0.8,
  height: deviceHeight / 15,
  backgroundColor: '#1B75BB',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  marginTop: 40,
}
});

export default StartUpScreen;
