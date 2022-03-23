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

    const courseData = [
        {
            imageSource: require('../../assets/couch.jpg'),
            title: 'Robert Fox',
            time: '5 min ago'
        },
        {
            imageSource: require('../../assets/jacket.jpg'),
            title: 'Jacob Jones',
            time: '5 min ago'
        },
        {
            imageSource: require('../../assets/nav.png'),
            title: 'Annete Black',
            time: '5 min ago'
        },
        {
            imageSource: require('../../assets/nav.png'),
            title: 'Jhones',
            time: '5 min ago'
        },
    ]
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

            {/* Card */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* {courseData.map((item, i) => ( */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', alignItems: 'center' }} >

                        {/* Card */}
                        <View style={{ width: RFPercentage(21.5), height: RFPercentage(25), borderRadius: RFPercentage(1.5), backgroundColor: Colors.white, marginLeft: RFPercentage(1.5) }}>

                            {/* //Image*/}
                            <Image style={{ width: RFPercentage(21.5), height: RFPercentage(15), borderTopLeftRadius: RFPercentage(1.5), borderTopRightRadius: RFPercentage(1.5), overflow: 'hidden' }} source={require('../../assets/angularr.jpg')} />

                            {/* //Title */}
                            <View style={{ width: '90%', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.black }}>
                                    {/* Complete Business's Guides to Web Development */}
                                    The Complete Game developemnt Course
                                </Text>
                            </View>

                            {/* //Button */}
                            <TouchableOpacity>
                                <Text style={{ color: Colors.navBlue, fontSize: 13, fontWeight: 'bold', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                    {/* {item.time} */}
                                    Take Course
                                </Text>
                            </TouchableOpacity>
                        </View>



                        {/* Card */}
                        <View style={{ width: RFPercentage(21.5), height: RFPercentage(25), borderRadius: RFPercentage(1.5), backgroundColor: Colors.white, marginLeft: RFPercentage(1.5) }}>

                            {/* //Image*/}
                            <Image style={{ width: RFPercentage(21.5), height: RFPercentage(15), borderTopLeftRadius: RFPercentage(1.5), borderTopRightRadius: RFPercentage(1.5), overflow: 'hidden' }} source={require('../../assets/Mac.jpeg')} />

                            {/* //Title */}
                            <View style={{ width: '90%', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.black }}>
                                    {/* Complete Business's Guides to Web Development */}
                                    The Complete Game developemnt Course
                                </Text>
                            </View>

                            {/* //Button */}
                            <TouchableOpacity>
                                <Text style={{ color: Colors.navBlue, fontSize: 13, fontWeight: 'bold', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                    {/* {item.time} */}
                                    Take Course
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* ))} */}

                    {/* 2nd Row */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', alignItems: 'center' }} >

                        {/* Card */}
                        <View style={{ width: RFPercentage(21.5), height: RFPercentage(25), borderRadius: RFPercentage(1.5), backgroundColor: Colors.white, marginLeft: RFPercentage(1.5) }}>

                            {/* //Image*/}
                            <Image style={{ width: RFPercentage(21.5), height: RFPercentage(15), borderTopLeftRadius: RFPercentage(1.5), borderTopRightRadius: RFPercentage(1.5), overflow: 'hidden' }} source={require('../../assets/math.jpg')} />

                            {/* //Title */}
                            <View style={{ width: '90%', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.black }}>
                                    {/* Complete Business's Guides to Web Development */}
                                    The Complete Game developemnt Course
                                </Text>
                            </View>

                            {/* //Button */}
                            <TouchableOpacity>
                                <Text style={{ color: Colors.navBlue, fontSize: 13, fontWeight: 'bold', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                    {/* {item.time} */}
                                    Take Course
                                </Text>
                            </TouchableOpacity>
                        </View>



                        {/* Card */}
                        <View style={{ width: RFPercentage(21.5), height: RFPercentage(25), borderRadius: RFPercentage(1.5), backgroundColor: Colors.white, marginLeft: RFPercentage(1.5) }}>

                            {/* //Image*/}
                            <Image style={{ width: RFPercentage(21.5), height: RFPercentage(15), borderTopLeftRadius: RFPercentage(1.5), borderTopRightRadius: RFPercentage(1.5), overflow: 'hidden' }} source={require('../../assets/unity.jpg')} />

                            {/* //Title */}
                            <View style={{ width: '90%', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.black }}>
                                    {/* Complete Business's Guides to Web Development */}
                                    The Complete Game developemnt Course
                                </Text>
                            </View>

                            {/* //Button */}
                            <TouchableOpacity>
                                <Text style={{ color: Colors.navBlue, fontSize: 13, fontWeight: 'bold', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                    {/* {item.time} */}
                                    Take Course
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 3rd Row */}
                    <View style={{ marginTop: RFPercentage(3), width: '90%', flexDirection: 'row', alignItems: 'center' }} >

                        {/* Card */}
                        <View style={{ width: RFPercentage(21.5), height: RFPercentage(25), borderRadius: RFPercentage(1.5), backgroundColor: Colors.white, marginLeft: RFPercentage(1.5) }}>

                            {/* //Image*/}
                            <Image style={{ width: RFPercentage(21.5), height: RFPercentage(15), borderTopLeftRadius: RFPercentage(1.5), borderTopRightRadius: RFPercentage(1.5), overflow: 'hidden' }} source={require('../../assets/angular.png')} />

                            {/* //Title */}
                            <View style={{ width: '90%', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.black }}>
                                    {/* Complete Business's Guides to Web Development */}
                                    The Complete Game developemnt Course
                                </Text>
                            </View>

                            {/* //Button */}
                            <TouchableOpacity>
                                <Text style={{ color: Colors.navBlue, fontSize: 13, fontWeight: 'bold', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                    {/* {item.time} */}
                                    Take Course
                                </Text>
                            </TouchableOpacity>
                        </View>



                        {/* Card */}
                        <View style={{ width: RFPercentage(21.5), height: RFPercentage(25), borderRadius: RFPercentage(1.5), backgroundColor: Colors.white, marginLeft: RFPercentage(1.5) }}>

                            {/* //Image*/}
                            <Image style={{ width: RFPercentage(21.5), height: RFPercentage(15), borderTopLeftRadius: RFPercentage(1.5), borderTopRightRadius: RFPercentage(1.5), overflow: 'hidden' }} source={require('../../assets/math.jpg')} />

                            {/* //Title */}
                            <View style={{ width: '90%', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: Colors.black }}>
                                    {/* Complete Business's Guides to Web Development */}
                                    The Complete Game developemnt Course
                                </Text>
                            </View>

                            {/* //Button */}
                            <TouchableOpacity>
                                <Text style={{ color: Colors.navBlue, fontSize: 13, fontWeight: 'bold', marginLeft: RFPercentage(1), marginTop: RFPercentage(1) }}>
                                    {/* {item.time} */}
                                    Take Course
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: RFPercentage(10) }} />

                </View>
            </ScrollView>

            {/* BottomTab */}
            <BottomTab />
        </Screen>
    )
}