import "../../../global.css"
import {Pressable, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import {styled} from "nativewind";
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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

        {/* CORREÇÃO: href corrigido de "/src/app/subscriptions/spotify" para "/subscriptions/spotify".
            No Expo Router, os caminhos de rota NÃO incluem o prefixo "/src/app/".
            As rotas são relativas à pasta de rotas do Expo Router.
            O caminho errado causava erro 404/500 ao tentar navegar. */}
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








    </SafeAreaView>
  );
}
