import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import rncStyles from 'rncstyles';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function UploadScreen() {
  const [imageUri, setImageUri] = useState(
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLff4uOnrrHn6eqrsbTZ3N25vsHHy82zuLvr7e7c3+DV2NnQ09W8wcPMz9FRQ01gAAADeUlEQVR4nO2b23LjIAxAuYibMfj//3ZxkqZJmtggWyKzw3no9PGMEAJLRIjBYDAYDAaDwWAwGAwGg4EQACBUjFFd/vsGANScXbiS/Sy6awFYH7SRd4zWLqmuXmCdfDC6eRmZ+2kVJf1q9BOvTlog/N8o/WrJ1MEKbPistKIzv1PaNLoGKzI7LR+y6RnLuYTgt5fuHixGK0hVcbrEis1prlUqseJyEnVrd5Xi2oOuQUoaz5FWsLQ4lXrFUturk/yGo1eqrQa/mEQuZRuVVqjXrz1Qa6iorVozaoU4q1q33i1UxCezQzhR16qIcSpMlFIJs3qlgFKuH2SclFkI12/COZVjmVAKMAVhhbIoWGSkZFBkTi23uxfoMh1XOlcIyyfm4LtJ0d3V/zep+RulCCP1lYmOPPokZUkQ8xcWT9y9c4XymJmwUpQH8hRwTqRXT+z2I6wIAn1N0LTfWLgPh0x6RwePChTdIXORipj9F0idcPuPvkWFKOqaWEkgUp2hlwe2NatIz70bU1PLsywe5YfoHdWU6yaQ1qgfGlr7K0wDmqmho6BntkFItRVPF/3GzqzvHidOJ6GqtiBrnFYqVpDdaf8bsMsUGebNxDIu9pi3b43bjVw6GF2YbNbvtIz0PR9xgPLhOVzGyLD0fu8Cwi7ZaK2NWf+GvNjveBlULOycUppjcfwKo6I0PdI3TtenXDYtPjt3uc6E4HL2yxzV+ryrg9Gk5iJTsnzlMc9Lahnpsk8RJkYxEDF5qZ9k/paF4paXqFgiBlP0Tm76PBaskBO1VomRN2/r5YaYzpawlAKkN6/dKrRM8ESVAkqQ0C3PEi6Ce/H2Y7caLZlPfrdUjrjGTHqHdmdqQaq8k+9QonVWboEN2P7rXy1zToXA9ck+a7nj9QHiOSv3YHX4lQmkY3vuvZY/5uRPy6YnK3ekO4R8hrBvJfGJ1diJagJbss5O8ScM7rOQMk4riFgBtZM0zdmOHxfX09rzx0+LGzCuaQFx0452q7ZeEXLY2GzVkOwTQ0JdCfVSzUMFNPULCJnLqVBZF2BmC1T90BQ7UkdaVYUK0M80cFJ1WUV1X/lA1eRNsSqVD6+a2zH+5Q8St5/qE+rlwREqUh24naTc7zJgfi5wjP39x3JneZHa/b0Px+Xulf2iwHnu/bAnpYLmZ3f2rTqw5zQYDAaDwaAD/wANKir9WY4qAQAAAABJRU5ErkJggg==',
  );
  const openCamera = async () => {
    let res: any = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
    });
    let file = res.assets[0];
    console.log(file);
    setImageUri(`data:image/png;base64,${file.base64}`);
  };

  const openGallery = async () => {
    let res: any = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
    });
    let file = res.assets[0];
    console.log(file);
    setImageUri(`data:image/png;base64,${file.base64}`);
  };

  return (
    <>
      <View style={[rncStyles.h100, rncStyles.bgLight, rncStyles.flexCenter]}>
        <Text style={[rncStyles.fs3]}>Upload Image</Text>
        <View style={[rncStyles.flexRow]}>
          <TouchableOpacity
            style={[
              rncStyles.p2,
              rncStyles.bgWhite,
              rncStyles.rounded,
              rncStyles.shadow3,
              rncStyles.m1,
            ]}>
            <Icon
              onPress={openCamera}
              name="camera"
              size={30}
              color="#4F8EF7"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              rncStyles.p2,
              rncStyles.bgWhite,
              rncStyles.rounded,
              rncStyles.shadow3,
              rncStyles.m1,
            ]}>
            <Icon
              onPress={openGallery}
              name="photo-library"
              size={30}
              color="#4F8EF7"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text>Selected Image</Text>
          <Image
            style={[rncStyles.p2, rncStyles.m1, styles.image]}
            source={{uri: imageUri}}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
