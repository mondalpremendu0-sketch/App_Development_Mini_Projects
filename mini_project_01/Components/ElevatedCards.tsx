import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
   
     <View>
              <Text style={styles.headerText}>Elevated Cards</Text>
              
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    
                <View style={[styles.box,styles.white]}>
                  <Text style={styles.boxtext}>Tap</Text>
                </View>
    
                <View style={[styles.box,styles.white]}>
                  <Text style={styles.boxtext}>me</Text>
                </View>
    
                <View style={[styles.box,styles.white]}>
                  <Text style={styles.boxtext}>to</Text>
                </View>
    
                 <View style={[styles.box,styles.white]}>
                  <Text style={styles.boxtext}>scroll</Text>
                </View>
    
                <View style={[styles.box,styles.white]}>
                  <Text style={styles.boxtext}>next</Text>
                </View>
    
                 <View style={[styles.box,styles.white]}>
                  <Text style={styles.boxtext}>next</Text>
                </View>
              
            </ScrollView>
    
            </View>
  )
}

const styles = StyleSheet.create({
  headerText:{
    fontSize: 20,
    color:'#FFFF',
    padding: 10,
    marginTop: 18,
    fontWeight: '600',
  },

  box:{
    height: 100,
    width: 100,
    borderRadius: 10,
    marginHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxtext:{
    fontSize: 18,
    fontWeight: '600',
    color: 'white'

  },

  red:{
    backgroundColor: '#ff4500'

  },
  green:{
    backgroundColor:'#7fffd4'
  },

   yellow:{
    backgroundColor:'#bdb76b'
  },
  white:{
    backgroundColor:'#dadada'
  },
})