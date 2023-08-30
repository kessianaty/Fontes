import React from 'react';
import { Text, SafeAreaView, StyleSheet,ScrollView, } from 'react-native';
import { useFonts,Ubuntu_400Regular,} from '@expo-google-fonts/ubuntu';
import { useFonts as useGoogleFonts } from 'expo-font';

import {
Inter_900Black,
Mulish_900Black,
Lusitana_400Regular,
Manrope_300Light,
Manrope_800ExtraBold,
Bangers_400Regular,
Lato_400Regular_Italic,
Oswald_200ExtraLight,
BalsamiqSans_700Bold} 
from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Ubuntu_400Regular,
  });

  let [googleFontsLoaded] = useGoogleFonts({
   Inter_900Black,
   Mulish_900Black,
   Lusitana_400Regular,
   Manrope_300Light,
   Manrope_800ExtraBold,
   Bangers_400Regular,
   Lato_400Regular_Italic,
   Oswald_200ExtraLight,
   BalsamiqSans_700Bold
    });

  if (!fontsLoaded || !googleFontsLoaded) {
    return null;
  }

  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>A única maneira de fazer um ótimo trabalho é amar o que você faz. - Steve Jobs</Text>
      <Text style={styles.titulo1}>A tecnologia move o mundo. - Arthur C. Clarke</Text>
      <Text style={styles.titulo2}>O sucesso é caminhar de fracasso em fracasso sem perder o entusiasmo. - Winston Churchill</Text>
      <Text style={styles.titulo3}>A inovação distingue um líder de um seguidor. - Steve Jobs</Text>
      <Text style={styles.titulo4}>Não é a mais forte das espécies que sobrevive, nem a mais inteligente, mas sim aquela que melhor se adapta às mudanças. - Charles Darwin</Text>
      <Text style={styles.titulo5}>A tecnologia sozinha não é suficiente. É a tecnologia casada com a arte que faz a diferença. - John Lasseter</Text>
      <Text style={styles.titulo6}>O maior risco é não correr nenhum risco. Em um mundo que está mudando rapidamente, a única estratégia que está garantida para falhar é não correr riscos. - Mark Zuckerberg</Text>
      <Text style={styles.titulo7}>Acredite em si mesmo e em tudo que você é. Saiba que há algo dentro de você que é maior do que qualquer obstáculo. - Christian D. Larson</Text>
      <Text style={styles.titulo8}>O que você faz hoje pode melhorar todos os seus amanhãs. - Ralph Marston</Text>
      <Text style={styles.titulo9}>O conhecimento é poder. Informação é libertadora. A educação é a premissa do progresso, em toda sociedade, em toda família. - Kofi Annan</Text>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#708ceb',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  titulo: {
    borderRadius:10,
    padding:20,
    color:'#dbd0fb',
    backgroundColor:'#1a237e',
    margin: 24,
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Ubuntu_400Regular',
  },
  titulo1: {
    borderRadius:10,
    padding:20,
    color:'#b7d1f5',
    backgroundColor:'#773ce7',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Inter_900Black',
  },
  titulo2: {
    borderRadius:10,
    padding:20,
    color:'#dbd0fb',
    backgroundColor:'#1a237e',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Mulish_900Black',
  },
  titulo3: {
    borderRadius:10,
    padding:20,
    color:'#b7d1f5',
    backgroundColor:'#773ce7',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lusitana_400Regular',
  },
  titulo4: {
    borderRadius:10,
    padding:20,
    color:'#dbd0fb',
    backgroundColor:'#1a237e',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Manrope_300Light',
  },
  titulo5: {
    borderRadius:10,
    padding:20,
    color:'#b7d1f5',
    backgroundColor:'#773ce7',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Manrope_800ExtraBold',
  },
  titulo6: {
    borderRadius:10,
    padding:20,
    color:'#dbd0fb',
    backgroundColor:'#1a237e',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Bangers_400Regular',
  },
  titulo7: {
    borderRadius:10,
    padding:20,
    color:'#b7d1f5',
    backgroundColor:'#773ce7',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lato_400Regular_Italic',
  },
  titulo8: {
    borderRadius:10,
    padding:20,
    color:'#dbd0fb',
    backgroundColor:'#1a237e',
    margin: 24,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Oswald_200ExtraLight',
  },
  titulo9: {
    borderRadius:10,
    padding:20,
    color:'#b7d1f5',
    backgroundColor:'#773ce7',
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'BalsamiqSans_700Bold',
  },
});
