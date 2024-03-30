import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import rncStyles from 'rncstyles';
import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LocalData() {
  const [text, setText] = useState<any>('');
  const [list, setList] = useState<any>('');

  const add = async () => {
    try {
      list.push(text);
      const jsonValue = JSON.stringify(list);
      await AsyncStorage.setItem('todos', jsonValue);
      getData();
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('todos');
      let data = jsonValue != null ? JSON.parse(jsonValue) : null;
      setList([...data]);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <View style={[rncStyles.h100, rncStyles.bgLight, rncStyles.p2]}>
        <Text>Local Data </Text>
        <View>
          <TextInput
            onChangeText={e => {
              setText(e);
            }}
            style={[rncStyles.input, rncStyles.border1]}
            placeholder="Todo"
          />
          <TouchableOpacity onPress={add}>
            <Text
              style={[
                rncStyles.textBold,
                rncStyles.fs5,
                rncStyles.ms1,
                rncStyles.textPrimary,
              ]}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
