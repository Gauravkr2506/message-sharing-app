import SplashScreen from "react-native-splash-screen";
import { AdMobBanner,AdMobInterstitial } from "react-native-admob";
import { data } from "./data";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Share, TouchableOpacity, ImageBackground } from "react-native";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.share = this.share.bind(this);
		this.getData = this.getData.bind(this);
	}
	componentDidMount() {
		SplashScreen.hide();
	}
	share(data) {
		Share.share({
			title: data.title,
			message: data.message
		});
	}
	_renderItem = ({ item }) => <MyListItem share={data => this.share(data)} data={item} />;
	getData() {
		let list_data = [];
		if (this.props.type == 1) {
			data.map(d => {
				if (d.type == 1 || d.type == 4) {
					list_data.push(d);
				}
			});
		}
		if (this.props.type == 2) {
			data.map(d => {
				if (d.type == 2 || d.type == 4) {
					list_data.push(d);
				}
			});
		}
		if (this.props.type == 3) {
			list_data = data;
		}
		return list_data;
	}

	render() {
		return (
			<ImageBackground source={require("./img/chakra.png")} style={{ flex: 1, backgroundColor: "white" }}>
				{/* <View style={{ backgroundColor: "#ff8000", padding: 15 }}>
					<Text style={{ fontSize: 22, textAlign: "center", color: "#fff" }}>🐷Happy Republic Day 2019🐷</Text>
				</View> */}
				<View style={{ flex: 10 }}>
					<FlatList data={this.getData()} renderItem={this._renderItem} />
				</View>
				<View style={{ flex: 1, backgroundColor: "#008000" }}>
					<AdMobBanner adSize="smartBannerPortrait" adUnitID="ca-app-pub-9969212413329273/2210166532" testDevices={[AdMobBanner.simulatorId]} />
				</View>
			</ImageBackground>
		);
	}
}

class MyListItem extends Component {
	constructor(props) {
		super(props);
		this.share = this.share.bind(this);
	}
	share() {
		this.props.share(this.props.data);
	}
	render() {
		return (
			<TouchableOpacity
				onPress={this.share}
				style={{
					padding: 20,
					margin: 20,
					backgroundColor: "#fff",
					borderRadius: 20,
					shadowColor: "#666",
					shadowOffset: { width: 0, height: 0 },
					shadowRadius: 20,
					shadowOpacity: 0.5,
					elevation: 3
				}}
			>
				<Text style={{ fontSize: 15, lineHeight: 20 }}>{this.props.data.message}</Text>
			</TouchableOpacity>
		);
	}
}
// keytool -genkey -v -keystore F:/my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
