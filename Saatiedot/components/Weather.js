import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

const api = {
  url: "https://api.openweathermap.org/data/2.5/weather?",
  key: " ",
  icons: "http://openweathermap.org/img/wn/",
};

const styles = StyleSheet.create({
  temp: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default function Weather(props) {
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    const url =
      api.url +
      "lat=" +
      props.latitude +
      "&lon=" +
      props.longitude +
      "&units=metric" +
      "&appid=" +
      api.key;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.cod === 200) {
          setTemp(data.main.temp);
          setDescription(data.weather[0].description);
          setIcon(api.icons + data.weather[0].icon + "@2x.png");
        } else {
          
          setDescription("Error retrieving weather information.");
          
        }
      })
      .catch((error) => {
        setDescription("Error retrieving weather information.");
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <View>
      {temp && <Text style={styles.temp}>{temp}°C</Text>}
      {icon && (
        <Image
          source={{ uri: icon }}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      )}
      <Text>{description}</Text>
    </View>
  );
}
