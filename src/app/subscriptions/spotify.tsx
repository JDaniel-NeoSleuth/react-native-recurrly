// NOVO ARQUIVO: Criado porque o Link em index.tsx apontava para "/subscriptions/spotify",
// mas a rota não existia. O Expo Router requer que cada rota tenha um arquivo correspondente.
// Sem este arquivo, o app quebrava com erro 500 ao tentar navegar para esta página.
import { View, Text } from 'react-native';
import React from 'react';

const SpotifySubscription = () => {
  return (
    <View>
      <Text>Spotify Subscription</Text>
    </View>
  )
}

export default SpotifySubscription;
