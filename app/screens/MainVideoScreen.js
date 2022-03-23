import React, { useState } from 'react'
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/FontAwesome';

//components
import Screen from "../components/Screen"
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';
import Card from '../components/common/Card';

//config
import Colors from '../config/Colors'

export default function SwatVideoScreen() {


    const [activeButton, setActiveButton] = useState('1');

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Search Courses",
            value: "",
        },
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };
    return (

        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.lightWhite }}>

            {/* Nav */}
            <ImageBackground style={{ width: "100%", height: RFPercentage(12), justifyContent: 'center', alignItems: 'center' }} source={require("../../assets/nav.png")}>
                <View style={{ width: "100%", height: "100%", backgroundColor: Colors.navBlue, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }}>

                    {/* input fields */}
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                        {inputField.map((item, i) => (
                            <View key={i}>
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.white}
                                    backgroundColor={"#4a3b8e"}
                                    borderWidth={0.3}
                                    height={RFPercentage(5.9)}
                                    borderColor={"#4a3b8e"}
                                    borderRadius={RFPercentage(1.2)}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"95%"}
                                    leftIconName={"search"}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </ImageBackground>

            {/* //Buttons */}
            <View style={{ width: '100%', height: RFPercentage(5), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'center', alignItems: 'center' }} >

                    <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', left: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: RFPercentage(1.9), color: Colors.black }}>
                            All Courses
                        </Text>
                    </TouchableOpacity>
                    <View style={{ width: RFPercentage(0.3), height: RFPercentage(2), backgroundColor: Colors.grey }} />


                    <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: RFPercentage(2), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: RFPercentage(1.9), color: Colors.black }}>
                            My Courses
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Category Tag */}
            <View style={{ width: '90%', marginTop: RFPercentage(2), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={{ fontSize: RFPercentage(2.2), fontWeight: 'bold', color: Colors.black }} >
                    Categories
                </Text>
                <TouchableOpacity activeOpacity={0.7} style={{ position: 'absolute', right: 0 }}>
                    <Text style={{ fontSize: RFPercentage(1.9), color: Colors.navBlue }} >
                        View all
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Button */}
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '90%', marginTop: RFPercentage(2) }}>
                <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.7} style={{ width: RFPercentage(15), height: RFPercentage(4.8), borderRadius: RFPercentage(30), backgroundColor: Colors.white, borderColor: activeButton == '1' ? "#4b407c" : Colors.darkGrey, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: activeButton == '1' ? '#4b407c' : Colors.darkGrey, fontSize: RFPercentage(2) }} >
                        Development
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.7} style={{ width: RFPercentage(15), height: RFPercentage(4.8), borderRadius: RFPercentage(30), backgroundColor: Colors.white, borderColor: activeButton == '1' ? "#4b407c" : Colors.darkGrey, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(1) }} >
                    <Text style={{ color: activeButton == '1' ? '#4b407c' : Colors.darkGrey, fontSize: RFPercentage(2) }} >
                        Business
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.7} style={{ width: RFPercentage(15), height: RFPercentage(4.8), borderRadius: RFPercentage(30), backgroundColor: Colors.white, borderColor: activeButton == '1' ? "#4b407c" : Colors.darkGrey, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(1) }} >
                    <Text style={{ color: activeButton == '1' ? '#4b407c' : Colors.darkGrey, fontSize: RFPercentage(2) }} >
                        Finanace
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.7} style={{ width: RFPercentage(15), height: RFPercentage(4.8), borderRadius: RFPercentage(30), backgroundColor: Colors.white, borderColor: activeButton == '1' ? "#4b407c" : Colors.darkGrey, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', marginLeft: RFPercentage(1) }} >
                    <Text style={{ color: activeButton == '1' ? '#4b407c' : Colors.darkGrey, fontSize: RFPercentage(2) }} >
                        Productivity
                    </Text>

                </TouchableOpacity>

            </View>

            {/* //Card */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>




                    <Card />
                    {/* //Card 2 */}

                    <View style={{ width: '90%', height: RFPercentage(32), borderRadius: RFPercentage(2), backgroundColor: Colors.white, marginTop: RFPercentage(3) }}>

                        {/* //Image*/}
                        <Image style={{ width: '100%', height: RFPercentage(20), borderTopLeftRadius: RFPercentage(2), borderTopRightRadius: RFPercentage(2), overflow: 'hidden' }} source={require('../../assets/angularr.jpg')} />

                        {/* //Title */}
                        <View style={{ width: '90%', marginLeft: RFPercentage(2), marginTop: RFPercentage(1) }}>
                            <Text style={{ fontSize: 19, fontWeight: 'bold', color: Colors.black }}>
                                Angular-The Complute Web development Course
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
                </View>
            </ScrollView>

            {/* BottomTab */}
            <BottomTab />
        </Screen>
    )
}