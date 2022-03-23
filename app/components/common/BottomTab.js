import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(7), backgroundColor: Colors.white }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('HomeScreen')} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Icon name="home" size={21} color={Colors.grey} />
                    <Text style={{ fontSize: RFPercentage(1.2) }}>
                        Home
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('SearchRecommendationScreen')} style={{ position: 'absolute', left: RFPercentage(9), justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="videocam" size={21} color={Colors.grey} />
                    <Text style={{ fontSize: RFPercentage(1.2) }}>
                        Camera
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('SpacesScreen')} style={{ position: 'absolute', left: RFPercentage(18), justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="ios-chatbubble-outline" size={21} color={Colors.grey} />
                    <Text style={{ fontSize: RFPercentage(1.2) }}>
                        Chat
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('AddMemberScreen')} style={{ position: 'absolute', left: RFPercentage(25), justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="notifications-outline" size={21} color={Colors.grey} />
                    <Text style={{ fontSize: RFPercentage(1.2) }}>
                        Notification
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('NotificationsScreen')} style={{ position: 'absolute', right: RFPercentage(1), justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="person-circle-outline" size={21} color={Colors.grey} />
                    <Text style={{ fontSize: RFPercentage(1.2) }}>
                        Account
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

export default BottomTab;