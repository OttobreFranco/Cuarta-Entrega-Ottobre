import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home , Products } from "./src/screens";
import { useState } from "react";
import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";

export default function App() {
  
  const [fontsLoaded] = useFonts(fonts)

  const [categorySelected, setCategorySelected] = useState('')

  if(!fontsLoaded){
    return null
  }

  return categorySelected ? (<Products category={categorySelected}/> 
  ):( 
  <Home setCategorySelected={setCategorySelected}/>
  )
}
