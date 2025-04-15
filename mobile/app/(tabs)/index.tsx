import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: 'white ' }}
      headerImage={
        <Image
          source={require('@/assets/images/oo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem vindo ao melhor banco virtual!</ThemedText>
        
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Conta</ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText> R$ 15.937,00
        {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({  
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <div >
        <button>Pix</button>
        <button>Pagar</button>
        <button>Transferir</button>
        </div>
        <ThemedText type="subtitle">Meus Cartões:</ThemedText>
        <ThemedText>
          
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">Cartão de crédito</ThemedText>
        <ThemedText type="default">Nenhum cartão de crédito encontrado</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 400,
    width: 1600
    ,
    bottom: -45,
    left: 0,
    position: 'absolute',
  },
});