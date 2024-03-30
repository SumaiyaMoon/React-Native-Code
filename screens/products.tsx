import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import rncStyles from 'rncstyles';

export default function Products({navigation}: any) {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <ScrollView>
        <View>
          <Text>Data from Fake Store API:</Text>
          {data &&
            data.map((product: any) => (
              <TouchableOpacity
                key={product.id}
                onPress={() => navigation.navigate('SingleProduct', product)}>
                <View style={[rncStyles.flexCenter, rncStyles.mb2]}>
                  <Image
                    resizeMode="contain"
                    style={[rncStyles.rounded, {width: '80%', height: 200}]}
                    source={{
                      uri: product.image,
                    }}
                  />
                </View>

                <View style={rncStyles.mb2}>
                  <Text
                    style={[
                      rncStyles.fs3,
                      rncStyles.textPrimary,
                      rncStyles.textBold,
                    ]}>
                    {product.title}
                  </Text>
                </View>

                <View style={rncStyles.mb2}>
                  <Text style={rncStyles.textSecondary}>
                    {product.description}
                  </Text>
                </View>

                <View style={rncStyles.mb2}>
                  <Text
                    style={[
                      rncStyles.fs4,
                      rncStyles.textPrimary,
                      rncStyles.textBold,
                    ]}>
                    {product.price}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
