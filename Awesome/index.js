/** @format */

import { AppRegistry } from "react-native";
import Application from "./App";
import { name as appName } from "./app.json";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Share, TouchableOpacity } from "react-native";
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from "react-native-menu";

const TopNavigation = () => (
	<View style={{ paddingRight: 20, paddingTop: 10, paddingBottom: 10, flexDirection: "row", backgroundColor: "#ff8000" }}>
		<View style={{ flex: 1 }}>
			<View style={{}}>
				<Text style={{ fontSize: 22, textAlign: "center", color: "#fff" }}>Happy Republic Day 2019</Text>
			</View>
		</View>
		<Menu onSelect={value => alert(`User selected the number ${value}`)}>
			<MenuTrigger>
				<Text style={{ fontSize: 20, color: "#fff" }}>ggggggg &#8942;</Text>
			</MenuTrigger>
			<MenuOptions>
				<MenuOption value={1}>
					<Text>Hindi</Text>
				</MenuOption>
				<MenuOption value={2}>
					<Text>English</Text>
				</MenuOption>
				<MenuOption value={2}>
					<Text>All</Text>
				</MenuOption>
			</MenuOptions>
		</Menu>
	</View>
);
const App = () => (
	// You need to place a MenuContext somewhere in your application, usually at the root.
	// Menus will open within the context, and only one menu can open at a time per context.
	<MenuContext style={{ flex: 1 }}>
		<TopNavigation />
		<Application style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
	</MenuContext>
);
AppRegistry.registerComponent(appName, () => App);
