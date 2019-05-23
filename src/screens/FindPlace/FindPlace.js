import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../../components/List/PlaceList";

class FindPlaceScreen extends Component {
    render () {
        return (
            <View>
                <Text>On Find Place Screen</Text>
                <Text>Last Word --> {this.props.lastPlace}</Text>
                <PlaceList places={this.props.places}/>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places,
        lastPlace: state.places.lastPlace
    };
};

export default connect(mapStateToProps)(FindPlaceScreen);