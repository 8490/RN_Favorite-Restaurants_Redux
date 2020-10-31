import axios from "axios"
import React, { useEffect } from "react";
import {SafeAreaView, View, Text} from "react-native";

const Restaurants = () => {

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
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    useEffect(() => fetchData (), [])


    return (
        <SafeAreaView>
            <View>
                <Text>Restaurants</Text>
            </View>
        </SafeAreaView>
    );
};

export { Restaurants };