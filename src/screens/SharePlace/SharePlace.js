import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { add } from "../../store/actions/index";

class SharePlaceScreen extends Component {
    state = {
        placeName: ""
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }
        
        this.props.onAddPlace(this.state.placeName);
    };

    render () {
        return (
            <View>
                <Text>On Share Place Screen</Text>
                <TextInput 
                    placeholder="test"
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                    style={styles.placeInput}/>
                <Button title="bas" onPress={this.placeSubmitHandler}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    placeInput: {
        width: "70%",
        borderBottomWidth: 2,
        backgroundColor: "#EEE"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(add(placeName))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);