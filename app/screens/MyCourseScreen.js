import React, { useState } from 'react'
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/FontAwesome';

//components
import Screen from "../components/Screen"
import InputField from './../components/common/InputField';
import BottomTab from '../components/common/BottomTab';

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

            {/* Buttons */}
            <View style={{ marginTop: RFPercentage(2), width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >

                {/* Button1 */}
                <TouchableOpacity onPress={() => setActiveButton('1')} activeOpacity={0.7} style={{ width: RFPercentage(15), height: RFPercentage(4.8), borderRadius: RFPercentage(30), backgroundColor: Colors.white, borderColor: activeButton == '1' ? "#4b407c" : Colors.darkGrey, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: activeButton == '1' ? '#4b407c' : Colors.darkGrey, fontSize: RFPercentage(2) }} >
                        All Courses
                    </Text>
                </TouchableOpacity>

                {/* Button2 */}
                <TouchableOpacity onPress={() => setActiveButton('2')} activeOpacity={0.7} style={{ marginLeft: RFPercentage(1), width: RFPercentage(15), height: RFPercentage(4.8), borderRadius: RFPercentage(30), backgroundColor: Colors.white, borderColor: activeButton == '2' ? "#4b407c" : Colors.darkGrey, borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: activeButton == '2' ? '#4b407c' : Colors.darkGrey, fontSize: RFPercentage(2) }} >
                        My Courses
                    </Text>
                </TouchableOpacity>

                {/* Filter Icon */}
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: 0, width: RFPercentage(4), height: RFPercentage(4), borderRadius: RFPercentage(3), backgroundColor: Colors.white, justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(2), height: RFPercentage(3) }} source={require('../../assets/filter.png')} />
                </TouchableOpacity>
            </View>

            {/* //Dropdown */}
            <View style={{ width: '90%', flexDirection: 'row', height: RFPercentage(6), backgroundColor: Colors.white, borderRadius: RFPercentage(1.5), marginTop: RFPercentage(3), justifyContent: 'flex-start', alignItems: 'center', borderColor: Colors.grey, borderWidth: RFPercentage(0.2) }}>
                <Text style={{ fontSize: 18, marginLeft: RFPercentage(2), color: Colors.black }}>All</Text>

                {/* Icon */}
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: RFPercentage(2), }} >
                    <Icon name="chevron-down" size={15} color={Colors.grey} />
                </TouchableOpacity>

            </View>

            {/* //Horizantal Card */}
            <View style={{ width: '90%', flexDirection: 'row', height: RFPercentage(12), backgroundColor: Colors.white, borderRadius: RFPercentage(1.5), marginTop: RFPercentage(3), justifyContent: 'flex-start', borderColor: Colors.grey, borderWidth: RFPercentage(0.2) }}>

                {/* //Image */}
                <Image style={{ width: '30%', borderTopLeftRadius: RFPercentage(1.5), borderBottomLeftRadius: RFPercentage(1.5), overflow: 'hidden', height: RFPercentage(12) }} source={require('../../assets/angularr.jpg')} />

                <View style={{ justifyContent: 'flex-start', width: '60%', marginLeft: RFPercentage(2), marginTop: RFPercentage(1) }}>

                    {/* Text */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.black }}>
                        Angular - The Complete Course
                        Guide [2021 Edition]
                    </Text>

                    {/* //Progress */}
                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(1) }}>
                        <Text style={{ color: '#06a57d', fontSize: 14, fontWeight: 'bold', paddingHorizontal: RFPercentage(0.5) }}>
                            20%
                        </Text>
                        <View style={{ width: '60%', height: RFPercentage(1), backgroundColor: Colors.grey, borderRadius: RFPercentage(2), marginTop: RFPercentage(0.7) }}>
                            <View style={{ width: '20%', height: RFPercentage(1), backgroundColor: '#06a57d', borderRadius: RFPercentage(2), }}>

                            </View>
                        </View>
                        <Text style={{ color: Colors.navBlue, fontSize: 14, fontWeight: 'bold', marginLeft: RFPercentage(0.5) }}>
                            Resume
                        </Text>

                    </View>


                </View>
            </View>

            {/* CArd 2 */}
            {/* //Horizantal Card */}
            <View style={{ width: '90%', flexDirection: 'row', height: RFPercentage(12), backgroundColor: Colors.white, borderRadius: RFPercentage(1.5), marginTop: RFPercentage(3), justifyContent: 'flex-start', borderColor: Colors.grey, borderWidth: RFPercentage(0.2) }}>

                {/* //Image */}
                <Image style={{ width: '30%', borderTopLeftRadius: RFPercentage(1.5), borderBottomLeftRadius: RFPercentage(1.5), overflow: 'hidden', height: RFPercentage(12) }} source={require('../../assets/Mac.jpeg')} />

                <View style={{ justifyContent: 'flex-start', width: '60%', marginLeft: RFPercentage(2), marginTop: RFPercentage(1) }}>

                    {/* Text */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.black }}>
                        Machine Learning A-Z Python [2021 Edition]
                    </Text>

                    {/* //Progress */}
                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(1) }}>
                        <Text style={{ color: '#06a57d', fontSize: 14, fontWeight: 'bold', paddingHorizontal: RFPercentage(0.5) }}>
                            50%
                        </Text>
                        <View style={{ width: '60%', height: RFPercentage(1), backgroundColor: Colors.grey, borderRadius: RFPercentage(2), marginTop: RFPercentage(0.7) }}>
                            <View style={{ width: '50%', height: RFPercentage(1), backgroundColor: '#06a57d', borderRadius: RFPercentage(2), }}>

                            </View>
                        </View>
                        <Text style={{ color: Colors.navBlue, fontSize: 14, fontWeight: 'bold', marginLeft: RFPercentage(0.5) }}>
                            Resume
                        </Text>

                    </View>


                </View>
            </View>

            {/* Card 3 */}
            {/* //Horizantal Card */}
            <View style={{ width: '90%', flexDirection: 'row', height: RFPercentage(12), backgroundColor: Colors.white, borderRadius: RFPercentage(1.5), marginTop: RFPercentage(3), justifyContent: 'flex-start', borderColor: Colors.grey, borderWidth: RFPercentage(0.2) }}>

                {/* //Image */}
                <Image style={{ width: '30%', borderTopLeftRadius: RFPercentage(1.5), borderBottomLeftRadius: RFPercentage(1.5), overflow: 'hidden', height: RFPercentage(12) }} source={require('../../assets/math.jpg')} />

                <View style={{ justifyContent: 'flex-start', width: '60%', marginLeft: RFPercentage(2), marginTop: RFPercentage(1) }}>

                    {/* Text */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: Colors.black }}>
                        Mathematics - The Algebric Master [2021 Edition]
                    </Text>

                    {/* //Progress */}
                    <View style={{ flexDirection: 'row', marginTop: RFPercentage(1) }}>
                        <Text style={{ color: '#06a57d', fontSize: 14, fontWeight: 'bold', paddingHorizontal: RFPercentage(0.5) }}>
                            70%
                        </Text>
                        <View style={{ width: '60%', height: RFPercentage(1), backgroundColor: Colors.grey, borderRadius: RFPercentage(2), marginTop: RFPercentage(0.7) }}>
                            <View style={{ width: '70%', height: RFPercentage(1), backgroundColor: '#06a57d', borderRadius: RFPercentage(2), }}>

                            </View>
                        </View>
                        <Text style={{ color: Colors.navBlue, fontSize: 14, fontWeight: 'bold', marginLeft: RFPercentage(0.5) }}>
                            Resume
                        </Text>

                    </View>


                </View>
            </View>

            {/* //Button */}

            <TouchableOpacity activeOpacity={0.7} style={{ width: RFPercentage(25), height: RFPercentage(5.5), borderRadius: RFPercentage(1.5), backgroundColor: Colors.white, borderColor: "#4b407c", borderWidth: RFPercentage(0.1), justifyContent: 'center', alignItems: 'center', marginTop: RFPercentage(3) }} >
                <Text style={{ color: '#4b407c', fontSize: RFPercentage(2.4) }} >
                    View More Courses
                </Text>
            </TouchableOpacity>

            {/* BottomTab */}
            <BottomTab />
        </Screen >
    )
}
