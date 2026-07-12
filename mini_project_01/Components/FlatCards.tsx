import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
     <View>
              <Text style={styles.headerText}>Flat Cards</Text>
              <View style={styles.headerContainer}>
                <View style={[styles.box,styles.red]}>
                  <Text style={styles.boxtext}>Red</Text>
                </View>
    
                 <View style={[styles.box,styles.green]}>
                  <Text style={styles.boxtext}>Green</Text>
                </View>
    
                 <View style={[styles.box,styles.yellow]}>
                  <Text style={styles.boxtext}>Yellow</Text>
                </View>
              </View>
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
  headerContainer:{
    flex: 1,
    flexDirection: 'row',
    padding: 10

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