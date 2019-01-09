import SplashScreen from "react-native-splash-screen";
import { AdMobBanner,AdMobInterstitial } from "react-native-admob";
import { data } from "./data";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Share, TouchableOpacity, ImageBackground, Modal, TouchableHighlight, Alert, ScrollView,Linking , Image,Clipboard } from "react-native";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.share = this.share.bind(this);
		this.getData = this.getData.bind(this);
		this.state = { modalVisible: false, msg: {} };
		this.clipboard = this.clipboard.bind(this);
		this.whatsapp = this.whatsapp.bind(this);
		this.shareTo = this.shareTo.bind(this);
	}
	componentDidMount() {
		SplashScreen.hide();
	}
	share(data) {
		this.setState({ modalVisible: true, msg: data });

		// Share.share({
		// 	title: data.title,
		// 	message: data.message
		// });
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
clipboard(){
	Clipboard.setString(this.state.msg.message);
}
whatsapp(){
	Linking.openURL(`whatsapp://send?text=${this.state.msg.message}`);
}
shareTo(data){
	Share.share({
			title: this.state.msg.title,
			message: this.state.msg.message
		});
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
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setState({ modalVisible: false });
						Alert.alert("Modal has been closed.");
					}}
				>
					<View style={{ flex: 1 }}>
						<View style={{ height: 50, padding: 10 }}>
							<Text
								style={{ fontSize: 16 }}
								onPress={() => {
									this.setState({ modalVisible: false });
								}}
							>
								Back
							</Text>
						</View>
						<View style={{flex:9}}>
						<ScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
							<Text style={{ fontSize: 16 }}>{this.state.msg.message}</Text>
						</ScrollView>
						</View>

						<View style={{ flex: 3, backgroundColor: "green" }}>
							<View style={{ flex: 2, flexDirection: "row", justifyContent: "space-around", backgroundColor: "white" }}>
								<TouchableHighlight onPress={this.clipboard} style={{ width: 50, marginTop: 20, height: 50, backgroundColor: "red", justifyContent: "center", alignItems: "center", borderRadius: 25 }}>
									<Image style={{ width: 20, height: 20 }} source={require("./img/copy.png")} />
								</TouchableHighlight>
								<TouchableHighlight onPress={this.whatsapp} style={{ width: 50, marginTop: 20, height: 50, backgroundColor: "red", justifyContent: "center", alignItems: "center", borderRadius: 25 }}>
									<Image style={{ width: 20, height: 20 }} source={require("./img/whatsapp.png")} />
								</TouchableHighlight>
								<TouchableHighlight onPress={this.share} style={{ width: 50, marginTop: 20, height: 50, backgroundColor: "red", justifyContent: "center", alignItems: "center", borderRadius: 25 }}>
									<Image style={{ width: 20, height: 20 }} source={require("./img/share.png")} />
								</TouchableHighlight>
							</View>
							<View style={{ height: 50, backgroundColor: "#333" }}>
							<AdMobBanner adSize="smartBannerPortrait" adUnitID="ca-app-pub-9969212413329273/6387248523" testDevices={[AdMobBanner.simulatorId]} />
							</View>
						</View>
					</View>
				</Modal>
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
