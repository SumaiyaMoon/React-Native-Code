// Import necessary modules and RNC Styles
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import rncStyles from 'rncstyles';

// Define your functional component
export default function SingleProduct({navigation, route}: any) {
  // State variables for quantity and comments
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState('');

  // Event handlers for increment and decrement buttons
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  let obj = route.params;
  // JSX structure using RNC Styles
  return (
    <ScrollView>
      <View style={[rncStyles.h100, rncStyles.bgWhite, rncStyles.p2]}>
        <View style={[rncStyles.flexCenter, rncStyles.mb2]}>
          <Image
            resizeMode="contain"
            style={[rncStyles.rounded, {width: '80%', height: 200}]}
            source={{
              uri: obj.image,
            }}
          />
        </View>

        <View style={rncStyles.mb2}>
          <Text
            style={[rncStyles.fs3, rncStyles.textPrimary, rncStyles.textBold]}>
            {obj.title}
          </Text>
        </View>

        <View style={rncStyles.mb2}>
          <Text style={rncStyles.textSecondary}>{obj.description}</Text>
        </View>

        <View style={rncStyles.mb2}>
          <Text
            style={[rncStyles.fs4, rncStyles.textPrimary, rncStyles.textBold]}>
            {obj.price}
          </Text>
        </View>

        <View style={[rncStyles.flexRow, rncStyles.mb2]}>
          <TouchableOpacity
            style={[rncStyles.btnPrimary, rncStyles.rounded, rncStyles.p1]}
            onPress={handleDecrement}>
            <Text style={[rncStyles.textWhite, rncStyles.textCenter]}>-</Text>
          </TouchableOpacity>

          <View
            style={[
              rncStyles.btnPrimary,
              rncStyles.rounded,
              rncStyles.p1,
              rncStyles.mx2,
            ]}>
            <Text style={[rncStyles.textWhite, rncStyles.textCenter]}>
              {quantity}
            </Text>
          </View>

          <TouchableOpacity
            style={[rncStyles.btnPrimary, rncStyles.rounded, rncStyles.p1]}
            onPress={handleIncrement}>
            <Text style={[rncStyles.textWhite, rncStyles.textCenter]}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[rncStyles.btnPrimary, rncStyles.rounded, rncStyles.p2]}>
          <Text style={[rncStyles.textWhite, rncStyles.textCenter]}>
            Add to Cart
          </Text>
        </TouchableOpacity>

        <View style={rncStyles.mb2}>
          <Text
            style={[
              rncStyles.mt4,
              rncStyles.fs5,
              rncStyles.textPrimary,
              rncStyles.textBold,
            ]}>
            Reviews and Comments
          </Text>

          <TextInput
            placeholder="Add a comment..."
            style={[
              rncStyles.input,
              rncStyles.p1,
              rncStyles.mt2,
              rncStyles.border1,
              rncStyles.borderPrimary,
              rncStyles.rounded,
            ]}
            multiline={true}
            value={comment}
            onChangeText={text => setComment(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
}
