import React, { useState } from 'react'
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//config
import Colors from '../../config/Colors'

export default function Card() {
    return (
        <View style={{ width: '90%', height: RFPercentage(32), borderRadius: RFPercentage(2), backgroundColor: Colors.white, marginTop: RFPercentage(3) }}>

            {/* //Image*/}
            <Image style={{ width: '100%', height: RFPercentage(20), borderTopLeftRadius: RFPercentage(2), borderTopRightRadius: RFPercentage(2), overflow: 'hidden' }} source={require('../../../assets/Mac.jpeg')} />

            {/* //Title */}
            <View style={{ width: '90%', marginLeft: RFPercentage(2), marginTop: RFPercentage(1) }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: Colors.black }}>
                    Complete Business's Guides to Machine Learning
                    {/* {item.title} */}
                </Text>
            </View>

            {/* Button */}
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', width: '90%' }}>
                <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(10), height: RFPercentage(4), borderRadius: RFPercentage(1), backgroundColor: Colors.navBlue, borderColor: "#4b407c", borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', }} >
                    <Text style={{ color: Colors.white, fontSize: RFPercentage(2.1) }} >
                        Take me
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}