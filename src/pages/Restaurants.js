import axios from "axios"
import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";

const Restaurants = () => {
    const [list, setList] = useState([]);

    const fetchData = () => {
        axios.post(
            "https://worldwide-restaurants.p.rapidapi.com/search",
            {
                "limit" : "30",
                "language" : "en_US",
                "location_id" : "297704",
                "currency" : "USD"
            },
            {
                headers: {
                    "content-type":"application/json",
                    "x-rapidapi-host":"worldwide-restaurants.p.rapidapi.com",
                    "x-rapidapi-key":"e0c1aedc75mshd07f99933b28fb5p1460d3jsna5c74601d4e9",
                    }
            } 
        )
            .then(response => setList(response.data.results.data))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchData (), [])

    const renderList = ({item}) => null


    return (
        <SafeAreaView>
            <View>
                <Text style={{fontSize: 25, textAlign: "center", fontWeight:"bold"}}>Restaurants</Text>
                <FlatList
                    data={list}
                    renderItem={renderList}
                />
            </View>
        </SafeAreaView>
    );
};

export { Restaurants };