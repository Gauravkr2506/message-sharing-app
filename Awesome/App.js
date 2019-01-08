import SplashScreen from "react-native-splash-screen";
import { AdMobBanner } from "react-native-admob";
import { data } from "./data";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Share, TouchableOpacity } from "react-native";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.share = this.share.bind(this);
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

	render() {
		return (
			<View style={{ flex: 1 }}>
				{/* <View style={{ backgroundColor: "#ff8000", padding: 15 }}>
					<Text style={{ fontSize: 22, textAlign: "center", color: "#fff" }}>🐷Happy Republic Day 2019🐷</Text>
				</View> */}
				<View style={{ flex: 10, backgroundColor: "#fff" }}>
					<FlatList data={data} renderItem={this._renderItem} />
				</View>
				<View style={{ flex: 1, backgroundColor: "#008000" }}>
					<AdMobBanner adSize="smartBannerPortrait" adUnitID="ca-app-pub-9969212413329273/2210166532" />
				</View>
			</View>
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
