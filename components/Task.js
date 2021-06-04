import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text styles={styles.itemText}>{props.text}</Text>
            </View>
            <View>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                        uri: "https://i.postimg.cc/W1VyhKDn/delete.png",
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#94c8fd",
        borderRadius: 20,
        marginRight: 15,
    },
    itemText: {

    }
});

export default Task;