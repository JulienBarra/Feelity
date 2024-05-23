import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import Svg, { G, Path } from "react-native-svg";

const logo_feelity = (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="147.289"
    height="25.85"
    viewBox="0 0 147.289 25.85"
  >
    <G
      id="Groupe_11"
      data-name="Groupe 11"
      transform="translate(-69.965 -259.597)"
    >
      <G
        id="Groupe_2"
        data-name="Groupe 2"
        transform="translate(132.021 259.597)"
      >
        <G id="Groupe_1" data-name="Groupe 1" transform="translate(0 0)">
          <Path
            id="Tracé_1"
            data-name="Tracé 1"
            d="M254.5,261.338h13.379v3.015h-9.954v5.065h9.749v3.015h-9.749v8.431H254.5Z"
            transform="translate(-254.497 -260.752)"
            fill="#fff"
          />
          <Path
            id="Tracé_2"
            data-name="Tracé 2"
            d="M307.731,275.267c4.245,0,6.968,3.25,6.968,7.7v.732h-10.92a4.283,4.283,0,0,0,4.508,3.893,5.984,5.984,0,0,0,4.011-1.552l1.406,2.02a8.243,8.243,0,0,1-5.738,2.05,7.423,7.423,0,0,1-.234-14.843Zm-3.981,6.265h7.963a3.782,3.782,0,0,0-3.982-3.747A3.9,3.9,0,0,0,303.75,281.532Z"
            transform="translate(-285.069 -269.997)"
            fill="#fff"
          />
          <Path
            id="Tracé_3"
            data-name="Tracé 3"
            d="M356.229,275.267c4.245,0,6.968,3.25,6.968,7.7v.732h-10.92a4.283,4.283,0,0,0,4.508,3.893,5.984,5.984,0,0,0,4.011-1.552l1.405,2.02a8.242,8.242,0,0,1-5.738,2.05,7.423,7.423,0,0,1-.234-14.843Zm-3.981,6.265h7.963a3.782,3.782,0,0,0-3.982-3.747A3.9,3.9,0,0,0,352.248,281.532Z"
            transform="translate(-317.258 -269.997)"
            fill="#fff"
          />
          <Path
            id="Tracé_4"
            data-name="Tracé 4"
            d="M400.166,261.338h3.074v19.527h-3.074Z"
            transform="translate(-351.179 -260.752)"
            fill="#fff"
          />
          <Path
            id="Tracé_5"
            data-name="Tracé 5"
            d="M420.016,261.5a1.9,1.9,0,1,1,1.9,1.9A1.918,1.918,0,0,1,420.016,261.5Zm.381,4.069h3.074v14.14H420.4Z"
            transform="translate(-364.354 -259.597)"
            fill="#fff"
          />
          <Path
            id="Tracé_6"
            data-name="Tracé 6"
            d="M439.338,279.545v-8.168H437v-2.693h2.342V264.82h3.074v3.864h2.869v2.693h-2.869v7.407c0,.966.469,1.669,1.347,1.669a1.981,1.981,0,0,0,1.375-.5l.732,2.313a4.053,4.053,0,0,1-2.9.908A3.261,3.261,0,0,1,439.338,279.545Z"
            transform="translate(-375.624 -263.064)"
            fill="#fff"
          />
          <Path
            id="Tracé_7"
            data-name="Tracé 7"
            d="M466.887,294.512a1.915,1.915,0,0,0,2.02-1.23l.7-1.61-5.8-14.316h3.278l4.128,10.6,4.128-10.6h3.308l-6.822,16.687a4.733,4.733,0,0,1-4.859,3.191,8.714,8.714,0,0,1-1.727-.2v-2.752A6.159,6.159,0,0,0,466.887,294.512Z"
            transform="translate(-393.423 -271.384)"
            fill="#fff"
          />
        </G>
      </G>
      <G
        id="Groupe_3"
        data-name="Groupe 3"
        transform="translate(83.178 260.037)"
      >
        <Path
          id="Tracé_8"
          data-name="Tracé 8"
          d="M109.257,275.56l8.354-4.778-8.354-4.857v-5.019l11.305,7.227v5.218l-11.305,7.227Z"
          transform="translate(-109.257 -260.906)"
          fill="#fff"
        />
      </G>
      <G
        id="Groupe_4"
        data-name="Groupe 4"
        transform="translate(96.392 260.037)"
      >
        <Path
          id="Tracé_9"
          data-name="Tracé 9"
          d="M159.854,265.925,151.5,270.7l8.354,4.858v5.018l-11.3-7.227v-5.218l11.3-7.227Z"
          transform="translate(-148.549 -260.906)"
          fill="#fff"
        />
      </G>
      <G
        id="Groupe_7"
        data-name="Groupe_7"
        transform="translate(109.605 260.037)"
      >
        <G id="Groupe_6" data-name="Groupe 6" transform="translate(0 0)">
          <G id="Groupe_5" data-name="Groupe 5">
            <Path
              id="Tracé_10"
              data-name="Tracé 10"
              d="M187.84,275.56l8.354-4.778-8.354-4.857v-5.019l11.305,7.227v5.218l-11.305,7.227Z"
              transform="translate(-187.84 -260.906)"
              fill="#fff"
            />
          </G>
        </G>
      </G>
      <G
        id="Groupe_10"
        data-name="Groupe_10"
        transform="translate(69.965 260.037)"
      >
        <G id="Groupe_9" data-name="Groupe 9" transform="translate(0 0)">
          <G id="Groupe_8" data-name="Groupe 8">
            <Path
              id="Tracé_11"
              data-name="Tracé 11"
              d="M81.27,265.925,72.917,270.7l8.354,4.858v5.018l-11.305-7.227v-5.218l11.305-7.227Z"
              transform="translate(-69.965 -260.906)"
              fill="#fff"
            />
          </G>
        </G>
      </G>
    </G>
  </Svg>
);

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.all_container}>
      <Modal
        style={styles.modal}
        isVisible={modalVisible}
        swipeDirection="right"
        animationInTiming={300}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        hideModalContentWhileAnimating={true}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={() => setModalVisible(false)}
        onSwipeComplete={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.principal_view}>
            <Text style={styles.modal_title}>Profil</Text>
            <Text style={styles.modal_content}>
              Merci pour ce test technique ! J'ai appris pas mal de choses et
              c'est toujours agréable de pouvoir s'entraîner !
            </Text>
            <Text style={styles.modal_content}>
              Je vous remercie encore pour l'opportunité que vous m'avez donnée
              de discuter du poste d'alternant développeur frontend lors de
              notre entretien. Je me reconnais totalement dans l'esprit et dans
              les valeurs de Feelity. J'ai réellement apprécié nos échanges et
              je suis très enthousiaste à l'idée de pouvoir rejoindre votre
              équipe et participer à vos projets !
            </Text>
            <Text style={styles.modal_content}>
              J'espère que cette petite application vous plaira !
            </Text>
            <TouchableOpacity
              style={styles.button_style_modal}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <View style={styles.img_button_modal}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8.937"
                  height="15.002"
                  viewBox="0 0 8.937 15.002"
                >
                  <Path
                    id="Tracé_13"
                    data-name="Tracé 13"
                    d="M8.8-8.6a.563.563,0,0,0,0-.8L1.922-16.336a.563.563,0,0,0-.8,0L.2-15.408a.563.563,0,0,0,0,.8L5.752-9,.2-3.389a.563.563,0,0,0,0,.8l.928.928a.563.563,0,0,0,.8,0Z"
                    transform="translate(8.968 -1.499) rotate(180)"
                    fill="#fff"
                  />
                </Svg>
              </View>
              <Text style={styles.text_button_modal}>Swiiiiiiiiiiipe</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <View style={styles.container_logo_button}>
          <TouchableOpacity
            style={styles.img_button}
            onPress={() => navigation.navigate("Brief")}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="8.937"
              height="15.002"
              viewBox="0 0 8.937 15.002"
            >
              <Path
                id="Tracé_13"
                data-name="Tracé 13"
                d="M8.8-8.6a.563.563,0,0,0,0-.8L1.922-16.336a.563.563,0,0,0-.8,0L.2-15.408a.563.563,0,0,0,0,.8L5.752-9,.2-3.389a.563.563,0,0,0,0,.8l.928.928a.563.563,0,0,0,.8,0Z"
                transform="translate(8.968 -1.499) rotate(180)"
                fill="#fff"
              />
            </Svg>
          </TouchableOpacity>
          <View style={styles.logo}>{logo_feelity}</View>
        </View>
      </View>
      <View style={styles.services_container}>
        <Text style={styles.services_title}>Services</Text>
        <ScrollView
          horizontal={true}
          style={styles.zone}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.first_card}>
            <Image source={require("../images/Rectangle 9/Rectangle 9.png")} />
          </View>
          <View style={styles.card}>
            <Image
              source={require("../images/Rectangle 10/Rectangle 10.png")}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.articles_container}>
        <Text style={styles.articles_title}>Articles</Text>
        <Text style={styles.articles_content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
          amet malesuada ex, consectetur convallis erat. Sed viverra id metus in
          eleifend
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button_style_bottom}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={styles.text_button_bottom}>Mon profil</Text>
        <View style={styles.img_button_bottom}>
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
  );
}

const styles = StyleSheet.create({
  all_container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#000000",
    height: "30%",
    paddingTop: "20%",
  },
  container_logo_button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  img_button: {
    position: "absolute",
    left: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: "#4A4A4A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
  },
  button_style_bottom: {
    width: "90%",
    height: 79,
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 22,
    marginTop: "auto",
    alignSelf: "center",
    marginBottom: "10%",
  },
  text_button_bottom: {
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    fontSize: 18,
  },
  img_button_bottom: {
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
  services_container: {
    marginTop: -150,
    zIndex: 1,
  },
  services_title: {
    fontSize: 42,
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    margin: 20,
  },
  zone: {
    width: "100%",
    height: "32%",
    flexDirection: "row",
  },
  card: {
    width: 300,
    height: "80%",
    backgroundColor: "white",
    margin: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  first_card: {
    width: 300,
    height: "80%",
    backgroundColor: "white",
    margin: 15,
    marginLeft: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  articles_title: {
    fontSize: 42,
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    margin: 20,
  },
  articles_content: {
    fontSize: 18,
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    color: "#000000",
    margin: 20,
  },
  articles_container: {
    marginTop: -30,
  },
  modal: {
    margin: 0,
    justifyContent: "center",
  },
  principal_view: {
    backgroundColor: "#FFFFFF",
    height: "90%",
    width: "100%",
    marginLeft: "20%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  modal_title: {
    fontSize: 42,
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    margin: 20,
  },
  modal_content: {
    fontSize: 18,
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    color: "#000000",
    margin: 20,
    width: "70%",
  },
  button_style_modal: {
    width: "70%",
    height: 79,
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderRadius: 22,
    marginTop: "auto",
    marginBottom: "10%",
    marginLeft: "5%",
  },
  text_button_modal: {
    fontFamily: "Roboto_800Regular",
    fontWeight: "bold",
    fontSize: 18,
  },
  img_button_modal: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    borderRadius: 12,
    backgroundColor: "#4A4A4A",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});
