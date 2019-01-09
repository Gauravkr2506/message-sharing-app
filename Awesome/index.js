/** @format */

import { AppRegistry } from "react-native";
import { AdMobBanner,AdMobInterstitial } from "react-native-admob";
import Application from "./App";
import { name as appName } from "./app.json";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Share, TouchableOpacity } from "react-native";
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from "react-native-menu";

class TopNavigation extends Component {
	render() {
		return (
			<View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: "row", backgroundColor: "#ff8000" }}>
				<View style={{ flex: 1, paddingLeft: 10 }}>
					<Text style={{ fontSize: 22, color: "#fff" }}>Happy Republic Day 2019</Text>
				</View>
				<Menu onSelect={type => this.props.changeType(type)}>
					<MenuTrigger style={{ width: 30, height: 30, alignItems: "center" }}>
						<Text style={{ fontSize: 20, color: "#fff" }}>&#8942;</Text>
					</MenuTrigger>
					<MenuOptions>
						<MenuOption value={1}>
							<Text style={{color:'#000'}}>Hindi</Text>
						</MenuOption>
						<MenuOption value={2}>
							<Text style={{color:'#000'}}>English</Text>
						</MenuOption>
						<MenuOption value={3}>
							<Text style={{color:'#000'}}>All</Text>
						</MenuOption>
					</MenuOptions>
				</Menu>
			</View>
		);
	}
}
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { type: 3 };
		this.changeType = this.changeType.bind(this);
		this.interval = ''
	}
	componentDidMount(){
		AdMobInterstitial.setAdUnitID('ca-app-pub-9969212413329273/3878471422');
AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
this.interval = setInterval(()=>{AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd()).catch(err=>alert(err));},60000)

	}
	componentWillUnmount(){
		this.interval.clearInterval();
	}
	changeType(type) {
		this.setState({ type: type });
		AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd()).catch(err=>alert(err));
	}
	render() {
		return (
			<MenuContext style={{ flex: 1 }}>
				<TopNavigation changeType={type => this.changeType(type)} />
				<Application type={this.state.type} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
			</MenuContext>
		);
	}
}

AppRegistry.registerComponent(appName, () => App);
