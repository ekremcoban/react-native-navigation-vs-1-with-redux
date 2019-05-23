import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../List/ListItem";

const placeList = props => {
    return (
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem placeName={info.item.name}/>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
    }
});

export default placeList;