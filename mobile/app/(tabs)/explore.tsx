import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
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
        <ThemedText type="title">Extrato</ThemedText>
      </ThemedView>
      <ThemedText>Suas últimas transferências</ThemedText>
      <Collapsible title="Compra em mercado">
      <ThemedText>20/05/2025</ThemedText>
      <ThemedText>Valor: R$267,00</ThemedText>
      </Collapsible>
      <Collapsible title="Transferência realizada">
        <ThemedText>17/05/2025</ThemedText>
        <ThemedText>Valor: R$350,00</ThemedText>
      </Collapsible>
      <Collapsible title="Transferência recebida">
        <ThemedText>15/05/2025</ThemedText>
        <ThemedText>Valor: R$1200,00</ThemedText>
      </Collapsible>
      <Collapsible title="Compra em farmácia">
        <ThemedText>14/05/2025</ThemedText>
        <ThemedText>Valor: R$57,00</ThemedText>
      </Collapsible>
      <Collapsible title="Transferência realizada">
        <ThemedText>11/05/2025</ThemedText>
        <ThemedText>Valor: R$250,00</ThemedText>
      </Collapsible>
      <Collapsible title="Compra em mercado">
        <ThemedText>10/5/2025</ThemedText>
        <ThemedText>Valor: R$567,00</ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>10/5/2025</ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
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


