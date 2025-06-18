import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import flightSearchStyles from '../styles/buscarvooStyles';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    BuscarVoo: undefined;
};

type BuscarVooScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BuscarVoo'>;

type Props = {
    navigation: BuscarVooScreenNavigationProp;
};

const BuscarVooScreen = ({ navigation }: Props) => {
    return (
        <View style={ flightSearchStyles.container }>
            <View style={ flightSearchStyles.header }>
                <TouchableOpacity
                    style={ flightSearchStyles.backButton }
                    onPress={ () => navigation.goBack() }
                >
                    <Text style={ flightSearchStyles.backButtonText }>←</Text>
                </TouchableOpacity>
            </View>
            <Text style={ flightSearchStyles.title }>Buscar voos</Text>

            <View style={ flightSearchStyles.tabContainer }>
                <TouchableOpacity style={ [flightSearchStyles.tab, flightSearchStyles.activeTab] }>
                    <Text style={ flightSearchStyles.tabText }>Ida e volta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ flightSearchStyles.tab }>
                    <Text style={ flightSearchStyles.tabText }>Um trecho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ flightSearchStyles.tab }>
                    <Text style={ flightSearchStyles.tabText }>Multitrechos</Text>
                </TouchableOpacity>
            </View>

            <TextInput style={ flightSearchStyles.input } placeholder="Origem" />
            <TextInput style={ flightSearchStyles.input } placeholder="Destino" />
            <TextInput style={ flightSearchStyles.input } placeholder="Data de ida e volta" />

            <View style={ flightSearchStyles.rowContainer }>
                <Switch />
                <Text style={ flightSearchStyles.switchLabel }>Código promocional</Text>
            </View>

            <TouchableOpacity style={ flightSearchStyles.searchButton }>
                <Text style={ flightSearchStyles.searchButtonText }>Buscar</Text>
            </TouchableOpacity>
        </View>


    );
};

export default BuscarVooScreen;
