import Contacts from "@/Components/Contacts";
import ElevatedCards from "@/Components/ElevatedCards";
import FlatCards from "@/Components/FlatCards";
import TrandingPlacesCard from "@/Components/TrandingPlacesCard";
import { ScrollView, StyleSheet, Text, View ,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <FlatCards />
        <ElevatedCards />
        <TrandingPlacesCard />
        <Contacts />
      </SafeAreaView>

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  mainContainer:{
    backgroundColor:'#2f4f4f'

  },
  container:{
    flex:1
  },
 
 

 

})