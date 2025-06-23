import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import flightSearchStyles from '../styles/buscarvooStyles';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
    navigation: StackNavigationProp<{ Home: undefined; BuscarVoo: undefined }, 'BuscarVoo'>;
};

const BuscarVooScreen = ({ navigation }: Props) => {
    const [showTravelersDropdown, setShowTravelersDropdown] = useState(false);
    const [travelers, setTravelers] = useState(1);
    const [hasPromoCode, setHasPromoCode] = useState(false);

    return (
        <View style={ flightSearchStyles.container }>
            <View style={ flightSearchStyles.header }>
                <TouchableOpacity style={ flightSearchStyles.backButton } onPress={ () => navigation.goBack() }>
                    <Text style={ flightSearchStyles.backButtonText }>←</Text>
                </TouchableOpacity>
            </View>

            <Text style={ flightSearchStyles.title }>Buscar voos</Text>

            <View style={ flightSearchStyles.tabContainer }>
                <TouchableOpacity style={ [flightSearchStyles.tab, flightSearchStyles.activeTab] }>
                    <Text style={ [flightSearchStyles.tabText, flightSearchStyles.activeTabText] }>Ida e volta</Text>
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

            <TouchableOpacity style={ flightSearchStyles.dateInput }>
                <Text style={ flightSearchStyles.dateText }>Ida e volta</Text>
                <Text style={ flightSearchStyles.calendarIcon }>📅</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ flightSearchStyles.dropdownInput } onPress={ () => setShowTravelersDropdown(!showTravelersDropdown) }>
                <View>
                    <Text style={ flightSearchStyles.dropdownLabel }>Viajantes</Text>
                    <Text style={ flightSearchStyles.dropdownValue }>{ travelers } Adulto{ travelers > 1 ? 's' : '' }</Text>
                </View>
                <Text style={ flightSearchStyles.dropdownArrow }>⌄</Text>
            </TouchableOpacity>

            { showTravelersDropdown && (
                <View style={ flightSearchStyles.dropdown }>
                    { [1, 2, 3, 4, 5].map((num) => (
                        <TouchableOpacity key={ num } style={ flightSearchStyles.dropdownOption } onPress={ () => { setTravelers(num); setShowTravelersDropdown(false); } }>
                            <Text style={ flightSearchStyles.dropdownOptionText }>{ num } Adulto{ num > 1 ? 's' : '' }</Text>
                        </TouchableOpacity>
                    )) }
                </View>
            ) }

            <TouchableOpacity style={ flightSearchStyles.checkboxContainer } onPress={ () => setHasPromoCode(!hasPromoCode) }>
                <View style={ [flightSearchStyles.checkbox, hasPromoCode && flightSearchStyles.checkboxChecked] }>
                    { hasPromoCode && <Text style={ flightSearchStyles.checkmark }>✓</Text> }
                </View>
                <Text style={ flightSearchStyles.checkboxLabel }>Código promocional</Text>
            </TouchableOpacity>

            <TouchableOpacity style={ flightSearchStyles.searchButton }>
                <Text style={ flightSearchStyles.searchButtonText }>Buscar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BuscarVooScreen;
