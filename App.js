import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class LotsOfStyles extends Component {
	render() {
		return (
			<View style={{paddingTop: 30}}>
				<Text style={styles.red}>just red</Text>
				<Text style={styles.blue}>blue</Text>
				<Text style={styles.smallGreen}>small green</Text>
				<Text style={styles.bigGreen}>big green</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	red: {
		color: 'red',
	},
	bigGreen: {
		color: 'green',
		fontSize: 30,
		fontWeight: 'bold'
	},
	smallGreen: {
		color: 'green',
		fontSize: 14,
		fontWeight: '300',
	},
	blue: {
		color: 'blue',
	},
});