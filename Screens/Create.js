import { styleSheets } from 'min-document';
import React, {useState} from 'react'
import { StyleSheet, Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper'

function Create(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const InsertData = () => {
        fetch('http://alexandrupitton.pythonanywhere.com/api/articles/', {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({title:title, description:description})
        })
        .then(resp => resp.json())
        .then(data => {
            props.navigation.navigate("Home")
        })
        .catch(error => console.log("Error"))
    } 
    return (
        <View>
            <TextInput style= {styles.inputStyle}
            label = "Title"
            value = {title}
            mode = "outlined"
            onChangeText = {text => setTitle(text)}
            />
            <TextInput style= {styles.inputStyleDesc}
            label = "Description"
            value = {description}
            mode = "outlined"
            multiline
            numberOfLines = {10}
            onChangeText = {text => setDescription(text)}            
            />
            <Button style = {styles.buttonStyle}
            labelStyle={{color: '#000000'}}
            icon = "pencil"
            mode = "contained"
            onPress = {() => InsertData()}
            ><Text style={{color:'#000000'}} >PUBLISH</Text></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        padding:10,
        marginTop:30
    },
    inputStyleDesc: {
        padding:10,
        marginTop:10
    },
    buttonStyle: {
        padding:10,
        margin:10,
        backgroundColor: '#F6E200'        
    }
})
export default Create