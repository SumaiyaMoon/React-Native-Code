import {View, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default function MapScreen() {
  return (
    <>
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 24.914364,
            longitude: 67.0556823,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}></MapView>
        <Marker
          coordinate={{
            latitude: 24.914364,
            longitude: 67.0556823,
          }}
        />
      </View>
    </>
  );
}
