import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe_area}>
      <View style={styles.all_container}>
        <ScrollView>
          <Text style={styles.title}>Bienvenue sur mon application !</Text>
          <Text style={styles.small_title}>
            Développée avec React Native / Expo !
          </Text>
          <View style={styles.list_container}>
            <Text style={styles.small_title}> Objectif de ce test :</Text>
            <FlatList
              data={[
                { key: "Développement sur smartphone" },
                { key: "Cards avec scroll horizontal" },
                { key: "Inclure des boutons" },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.item}>
                  <Text style={styles.bullet}>● </Text> {item.key}
                </Text>
              )}
            />
            <View style={styles.last_item}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.937"
                height="15.002"
                viewBox="0 0 8.937 15.002"
                style={styles.last_item_image}
              >
                <Path
                  d="M8.8-8.6a.563.563,0,0,0,0-.8L1.922-16.336a.563.563,0,0,0-.8,0L.2-15.408a.563.563,0,0,0,0,.8L5.752-9,.2-3.389a.563.563,0,0,0,0,.8l.928.928a.563.563,0,0,0,.8,0Z"
                  transform="translate(-0.032 16.501)"
                />
              </Svg>
              <Text style={styles.last_item_text}>
                {" "}
                Livraison git ou repo public
              </Text>
            </View>
            <Text style={styles.small_title}> Option</Text>
            <FlatList
              data={[{ key: "Ajout d'une Modal Profil" }]}
              renderItem={({ item }) => (
                <Text style={styles.item}>
                  <Text style={styles.bullet}>● </Text> {item.key}
                </Text>
              )}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.button_style}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.text_button}>Découvrir Feelity</Text>
          <View style={styles.img_button}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.937"
              height="15.002"
              viewBox="0 0 8.937 15.002"
            >
              <Path
                d="M8.8-8.6a.563.563,0,0,0,0-.8L1.922-16.336a.563.563,0,0,0-.8,0L.2-15.408a.563.563,0,0,0,0,.8L5.752-9,.2-3.389a.563.563,0,0,0,0,.8l.928.928a.563.563,0,0,0,.8,0Z"
                transform="translate(-0.032 16.501)"
              />
            </Svg>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    backgroundColor: "#fff",
  },
  all_container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  title: {
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    fontSize: 42,
    margin: 10,
  },
  small_title: {
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    fontSize: 26,
    margin: 10,
  },
  item: {
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    fontSize: 18,
    padding: 15,
  },
  last_item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "4%",
    marginBottom: "5%",
  },
  last_item_image: {
    marginLeft: 18,
  },
  last_item_text: {
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
  },
  bullet: {
    fontSize: 13,
  },
  list_container: {
    marginTop: "5%",
  },
  button_style: {
    width: "90%",
    height: 79,
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 22,
    marginTop: "auto",
    marginBottom: "5%",
    alignSelf: "center",
  },
  text_button: {
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    fontSize: 18,
  },
  img_button: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});
