import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/homeStyles";

import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Home: undefined;
  Viagens: undefined;
  BuscarVoo: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
  return (
    <View style={ styles.container }>
      <Image source={ require("../assets/golicon.png") } style={ styles.logo } />
      <Text style={ styles.greeting }>Olá, DOMINGOS MACHADO</Text>
      <Text style={ styles.title }>Qual o próximo destino?</Text>

      <TouchableOpacity
        style={ styles.searchButton }
        onPress={ () => navigation.navigate("BuscarVoo") }
      >
        <Text style={ styles.searchButtonText }>
          🔍 Buscar voos
        </Text>
      </TouchableOpacity>

      <View style={ styles.menu }>
        <View style={ styles.menuItem }>
          <TouchableOpacity style={ styles.menuIcon }>
            <Text>✈️</Text>
          </TouchableOpacity>
          <Text style={ styles.menuText }>Minhas  viagens</Text>
        </View>
        <View style={ styles.menuItem }>
          <TouchableOpacity style={ styles.menuIcon }>
            <Text>🎟️</Text>
          </TouchableOpacity>
          <Text style={ styles.menuText }>Check-in </Text>
        </View>
        <View style={ styles.menuItem }>
          <TouchableOpacity style={ styles.menuIcon }>
            <Text>📊 </Text>
          </TouchableOpacity>
          <Text style={ styles.menuText }>Status do voo</Text>
        </View>
        <View style={ styles.menuItem }>
          <TouchableOpacity style={ styles.menuIcon }>
            <Text>🏷️</Text>
          </TouchableOpacity>
          <Text style={ styles.menuText }>Ofertas especiais</Text>
        </View>
      </View>
    </View>
  );
}
