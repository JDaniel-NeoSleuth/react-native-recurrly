import "../../../global.css"
import {Pressable, Text, View} from "react-native";
import {Link} from "expo-router";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-green-500">
        Welcome to NativeWind!
      </Text>

{/*Link apresenta falhas ao receber os parametros de modelagem, formato padrao tem que ser usado entao! */}

        <Link href="/onboarding" asChild>
            <Pressable className="mt-4 rounded-xl bg-blue-950 p-4">
                <Text className="text-white">
                    Go to Onboarding
                </Text>
            </Pressable>
        </Link>


        <Link href="/(auth)/sign-in" asChild>
            <Pressable className="mt-4 rounded-xl bg-blue-950 p-4">
                <Text className="font-bold text-white">
                    Go to Sign In
                </Text>
            </Pressable>
        </Link>

        <Link href="/(auth)/sign-up" asChild>
            <Pressable className="mt-4 rounded-xl bg-blue-950 p-4">
                <Text className="font-bold text-white">
                    Go to Sign Up
                </Text>
            </Pressable>
        </Link>

        <Link href="/subscriptions/spotify" asChild>
            <Pressable className="mt-4 rounded-xl bg-blue-950 p-4">
                <Text className="font-bold text-white">
                    Spotify Subscription
                </Text>
            </Pressable>
        </Link>

        <Link href={{pathname: "/subscriptions/[id]", params: {id: "claude"},}} asChild>
            <Pressable className="mt-4 rounded-xl bg-blue-950 p-4">
                <Text className="font-bold text-white">
                    Claude Max Subscription
                </Text>
            </Pressable>
        </Link>








    </View>
  );
}
