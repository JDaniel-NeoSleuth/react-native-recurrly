import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Link, useLocalSearchParams} from "expo-router";

const SubscriptionsDetails = () => {
    const {id} = useLocalSearchParams<{id: string}>();
    return (
        <View>
            <Text>Subscriptions Details</Text>
            <Link href="/" asChild>
                <Pressable className="mt-4 rounded-xl bg-blue-950 p-4">
                    <Text className="font-bold text-white">
                        Go Back
                    </Text>
                </Pressable>
            </Link>
        </View>
  )
}

export default SubscriptionsDetails;