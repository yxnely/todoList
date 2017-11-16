import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class FixedDimensions extends Component {
	render() {
		return (
			<View style={{paddingTop: 30}}>
				<Text style={{height: 50, backgroundColor: 'powderblue', color: 'red'}}>just red</Text>
				<Text style={{width: 100, height: 100, backgroundColor: 'skyblue'}}>blue</Text>
				<Text style={styles.smallGreen}>small green</Text>
				<Text style={styles.bigGreen}>big green</Text>
			</View>
		);
	}
}

export default class FlexDimensions extends Component {
	render() {
		return(
			<View style={{flex: 1}}>
				<View style={{flex: 1, backgroundColor: 'yellow'}} />
				<View style={{flex: 2, backgroundColor: 'brown'}} />
				<View style={{flex: 3, backgroundColor: 'steelblue'}} />
			</View>
		)
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