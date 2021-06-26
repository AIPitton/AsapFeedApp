import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList, Alert, Linking } from 'react-native';
import {Card, FAB} from 'react-native-paper'

function Home(props) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const loadData = () => {
        fetch('http://alexandrupitton.pythonanywhere.com/api/articles/', {
            method:"GET"
        })
        .then(resp => resp.json())
        .then(data => {
            setData(data)
            setLoading(false)
        })
        .catch(error => Alert.alert("error", error))
    }
    useEffect(() => {
        loadData()
    }, [])
    const clickedItem = (data) => {
        props.navigation.navigate("Details", {data:data})
    }
    const renderData = (item) => {
        return(
            <Card style = {styles.cardStyle} onPress = {() => clickedItem(item)}>
                <Text style = {{fontSize:25}}>{item.title}</Text>
                
            </Card>  
        )  
    }    
    return (    
        <View style = {{flex:1}}>
        <FlatList
        data = {data}
        renderItem = {({item}) => {
            return renderData(item)
        }}
        onRefresh = {() => loadData()}
        refreshing =  {loading}
        keyExtractor = {item => `${item.id}`}
        />
        <FAB
            style = {styles.fab}
            small = {false}
            icon = "plus"
            theme = {{colors:{accent:"#F6E200"}}}
            onPress = {() => props.navigation.navigate("Create")}
        />
            <View>
                <Text style = {styles.asapLink} onPress={() => Linking.openURL('https://asap-romania.ro/')}>
                https://asap-romania.ro/
                </Text>
            </View>
        </View>  
    )
}
const styles = StyleSheet.create({
    cardStyle: {
        padding:10,
        margin:10
    },
    fab: {
        position:'absolute',
        margin:16,
        right:0,
        bottom:0
    },
    asapLink: {
        padding:16,
        fontSize:20,
        textDecorationLine:'underline'
    }
})
export default Home
