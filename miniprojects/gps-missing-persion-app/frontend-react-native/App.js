import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, Alert, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default function App() {
  const [markers, setMarkers] = useState([]);
  const [form, setForm] = useState({ name: '', age: '', lat: '', lon: '' });

  useEffect(() => {
    axios.get('http://10.0.2.2:5000/missing')  // For Android emulator. Use your IP for real device.
      .then(res => setMarkers(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  function submitPerson() {
    axios.post('http://10.0.2.2:5000/report', form)
      .then(() => {
        Alert.alert("Submitted!");
        setMarkers([...markers, form]);
      })
      .catch(() => Alert.alert("Submission failed."));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Missing Person Tracker</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.77,
          longitude: -122.42,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
      >
        {markers.map((p, i) => (
          <Marker key={i} coordinate={{ latitude: parseFloat(p.lat), longitude: parseFloat(p.lon) }}>
            <View style={{ alignItems: 'center' }}>
              <Image
                source={{ uri: p.image_url || 'https://via.placeholder.com/40' }}
                style={{ width: 40, height: 40, borderRadius: 20 }}
              />
              <Text>{p.name}</Text>
            </View>
          </Marker>
        ))}
      </MapView>

      <ScrollView style={styles.form}>
        <TextInput placeholder="Name" style={styles.input} onChangeText={text => setForm({ ...form, name: text })} />
        <TextInput placeholder="Age" style={styles.input} keyboardType="numeric" onChangeText={text => setForm({ ...form, age: text })} />
        <TextInput placeholder="Latitude" style={styles.input} keyboardType="numeric" onChangeText={text => setForm({ ...form, lat: text })} />
        <TextInput placeholder="Longitude" style={styles.input} keyboardType="numeric" onChangeText={text => setForm({ ...form, lon: text })} />
        <Button title="Report Missing Person" onPress={submitPerson} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  map: { width: '100%', height: '60%' },
  form: { padding: 10 },
  input: { borderBottomWidth: 1, marginBottom: 10 },
  title: { fontSize: 20, textAlign: 'center', marginBottom: 10 }
});
