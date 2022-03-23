import React, { useState } from 'react'
import { ImageBackground, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from 'react-native-vector-icons/Ionicons';


//components
import Screen from "../components/Screen"
import BottomTab from '../components/common/BottomTab';

//config
import Colors from '../config/Colors'
import { Col } from 'native-base';


export default function CourseOverviewScreen() {
    return (



        <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: "center", backgroundColor: Colors.lightWhite }}>

            {/* Nav */}
            <ImageBackground style={{ width: "100%", height: RFPercentage(12), justifyContent: 'center', alignItems: 'center' }} source={require("../../assets/nav.png")}>
                <View style={{ width: "100%", height: "100%", backgroundColor: Colors.navBlue, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }} >

                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: RFPercentage(2) }}>

                        {/* Icon */}
                        <TouchableOpacity activeOpacity={0.6}  >
                            <Icon name="arrow-back" size={35} color={Colors.grey} />
                        </TouchableOpacity>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(3), fontWeight: 'bold', marginLeft: RFPercentage(2) }}>
                            Course Overview
                        </Text>

                    </View>

                </View>

            </ImageBackground>

            {/* Card */}
            <View style={{ width: '90%', height: RFPercentage(32), borderRadius: RFPercentage(2), backgroundColor: Colors.white, marginTop: RFPercentage(3) }}>

                {/* //Image*/}
                <Image style={{ width: '100%', height: RFPercentage(20), borderTopLeftRadius: RFPercentage(2), borderTopRightRadius: RFPercentage(2), overflow: 'hidden' }} source={require('../../assets/angularr.jpg')} />

                {/* //Title */}
                <View style={{ width: '80%', marginLeft: RFPercentage(2), marginTop: RFPercentage(1) }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold', color: Colors.black }}>
                        Angular-The Complete Guide (2021 Edition)
                        {/* {item.title} */}
                    </Text>
                    <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <TouchableOpacity activeOpacity={0.6}  >
                            <Icon name="time" size={16} color={Colors.grey} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                            3 Total Hours
                        </Text>
                    </View>
                </View>
            </View>

            {/* Curriculum */}
            <View style={{ justifyContent: 'flex-start', width: '90%', marginTop: RFPercentage(1.6) }}>
                <Text style={{ fontSize: 18, color: Colors.black, marginLeft: RFPercentage(0.5) }}>
                    Course Curriculum
                </Text>
            </View>

            {/* //Dropdown */}
            <View style={{ width: '90%', flexDirection: 'row', height: RFPercentage(6), backgroundColor: Colors.white, borderTopLeftRadius: RFPercentage(1.5), borderTopRightRadius: RFPercentage(1.5), marginTop: RFPercentage(1.6), justifyContent: 'flex-start', alignItems: 'center', borderColor: Colors.grey, borderWidth: RFPercentage(0.1) }}>
                <Text style={{ fontSize: 15, marginLeft: RFPercentage(2), color: Colors.navBlue }}>
                    Section 1:Getting Started
                </Text>

                {/* Icon */}
                <TouchableOpacity activeOpacity={0.6} style={{ position: 'absolute', right: RFPercentage(2), }} >
                    <Icon name="chevron-down" size={20} color={Colors.darkGrey} />
                </TouchableOpacity>

            </View>

            {/* //ScrollView */}
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    <View style={{ width: '90%', backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: RFPercentage(0.1) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: RFPercentage(8), }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    1
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    Course Introduction
                                </Text>
                                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.6}  >
                                        <Icon name="videocam" size={16} color={Colors.darkGrey} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                                        Video-1min
                                    </Text>
                                </View>
                            </View>

                        </View>

                        {/* 2 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: RFPercentage(8), }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    2
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    What is Angular ?
                                </Text>
                                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.6}  >
                                        <Icon name="videocam" size={16} color={Colors.darkGrey} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                                        Video-5min
                                    </Text>
                                </View>
                            </View>


                        </View>

                        {/* 3 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: RFPercentage(8), }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    3
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    Angular vs Angular CLI
                                </Text>
                                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.6}  >
                                        <Icon name="videocam" size={16} color={Colors.darkGrey} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                                        Video-7min
                                    </Text>
                                </View>
                            </View>

                        </View>

                        {/* 4 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: RFPercentage(8), }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    4
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    Angular Structure
                                </Text>
                                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.6}  >
                                        <Icon name="videocam" size={16} color={Colors.darkGrey} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                                        Video-9min
                                    </Text>
                                </View>
                            </View>

                        </View>

                        {/* 5 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: RFPercentage(8), }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    5
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    Curriculum
                                </Text>
                                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.6}  >
                                        <Icon name="videocam" size={16} color={Colors.darkGrey} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                                        Video-10min
                                    </Text>
                                </View>
                            </View>

                        </View>

                        {/* 6 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: RFPercentage(8), }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    6
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    Database
                                </Text>
                                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.6}  >
                                        <Icon name="videocam" size={16} color={Colors.darkGrey} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                                        Video-4min
                                    </Text>
                                </View>
                            </View>

                        </View>

                        {/* 7 */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: RFPercentage(8), }}>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    7
                                </Text>
                            </View>
                            <View>
                                <Text style={{ color: Colors.black, fontSize: RFPercentage(2) }}>
                                    Anayltics spects
                                </Text>
                                <View style={{ marginTop: RFPercentage(1), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <TouchableOpacity activeOpacity={0.6}  >
                                        <Icon name="videocam" size={16} color={Colors.darkGrey} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 13, color: Colors.darkGrey, marginLeft: RFPercentage(0.5) }}>
                                        Video-22min
                                    </Text>
                                </View>
                            </View>

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