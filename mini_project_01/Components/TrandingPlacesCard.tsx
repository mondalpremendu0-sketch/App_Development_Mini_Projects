import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function TrandingPlacesCard() {
  return (
    
     <View>
              <Text style={styles.headerText}>Trending Places</Text>
    
              <View style={styles.imContainer} >
                <View style={styles.imgContainer}>
                  <Image style={styles.image} source={{uri:'https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwdHJhbmRpbmclMjBwbGFjZXN8ZW58MHx8MHx8fDA%3D'}} resizeMode="cover"/>
    
                </View>
    
                <View style={styles.description}>
    
                  <Text style={styles.deshead}>Pink city in delhi</Text>
                  <Text style={styles.desDes} numberOfLines={3}>
                    Lahori Gate of Red fort Lal Qila constructed in 17th century by Mughal king Shah Jahan UNESCO World Heritage Site. Old Delhi, India
                    Download this HD photo of architecture, outdoor, red, and castle by Getty Images 
                  </Text>
                  <Text style={styles.desFooter}>Published on August 31, 2022</Text>
    
    
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
  imContainer:{
    margin: 10,
    width: 340,
    backgroundColor:'white',
    borderRadius: 10
  },

  imgContainer:{
   
  },
  image:{
    height:250,
    width: 340,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  description:{
    padding: 10,
    marginHorizontal: 10,
    width: 340,
   
    
  },
  deshead:{
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 25,
    marginTop: 15,
    color: '#ff00ff'

  },
  desDes:{
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 22,
    paddingRight: 19
    
  },
  desFooter:{
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
     marginTop: 15,
  }
})