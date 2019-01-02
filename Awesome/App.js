import { data } from "./data";
import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList, Share, TouchableOpacity } from "react-native";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.share = this.share.bind(this);
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
				<View style={{ backgroundColor: "yellow", padding: 15 }}>
					<Text style={{ fontSize: 16, textAlign: "center" }}>--Happy Republic Day 2019--</Text>
				</View>
				<View style={{ flex: 10, backgroundColor: "red" }}>
					<FlatList data={data} renderItem={this._renderItem} />
				</View>
				<View style={{ flex: 1, backgroundColor: "yellow" }}>
					<Text>hi</Text>
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
			<TouchableOpacity onPress={this.share} style={{ padding: 20, margin: 20, backgroundColor: "#fff", borderRadius: 20 }}>
				<Text style={{ fontSize: 15, lineHeight: 20 }}>{this.props.data.message}</Text>
			</TouchableOpacity>
		);
	}
}
