import React from 'react'
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-paper';

function ArticleDetails(props) {
    const data = props.route.params.data;
    const deletedData = (data) => {
        fetch(`http://alexandrupitton.pythonanywhere.com/api/articles/${data.id}/`, {
            method:"DELETE",
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(data => {
            props.navigation.navigate("Home")
        })
        .catch(error => Alert.alert("Error", error))
    }
    return (
        <ScrollView>
        <View style = {styles.viewStyle}>
            <Text style = {{fontSize:25}}>
                {data.title}
            </Text>
            <Text style = {{fontSize:20, marginTop:10}}>
                {data.description}
            </Text>            
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    viewStyle: {
        padding:10,
        margin:10
    },
    btnStyle: {
        flexDirection: "row",
        justifyContent:"space-around",
        margin:10,
        padding:10
    }
})
export default ArticleDetails
