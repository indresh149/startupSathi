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

const CofounderScreen = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', {name, education, skills});
    navigation.navigate('homeScreen' as never);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Bootstrap', value: '1'},
    {label: 'Seed funded', value: '2'},
    {label: 'Series A', value: '3'},
    {label: 'Series B', value: '4'},
    {label: 'Series C', value: '5'},
    {label: 'Series D', value: '6'},
    {label: 'Series E', value: '7'},
    {label: 'Series F', value: '8'},
  ]);

  const [openSector, setOpenSector] = useState(false);
  const [valueSector, setValueSector] = useState(null);
  const [itemsSector, setItemsSector] = useState([
    {label: 'Education', value: '1'},
    {label: 'Information Technology', value: '2'},
    {label: 'Computer Science', value: '3'},
    {label: 'Electronics', value: '4'},
    {label: 'grocery', value: '7'},
  ]);

  return (
    <View style={styles.container}>
      <Text>Startup name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text>Stage of startup:</Text>
      <DropDownPicker
        style={styles.input}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Text>Sector of startup :</Text>
      {!open && (
        <DropDownPicker
          style={styles.input}
          open={openSector}
          value={valueSector}
          items={itemsSector}
          setOpen={setOpenSector}
          setValue={setValueSector}
          setItems={setItemsSector}
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
  },
});

export default CofounderScreen;
