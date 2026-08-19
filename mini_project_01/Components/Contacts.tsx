import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'


const CONTACTS_DATA = [
    {
        id:1,
        name:'Aman Yadav',
        image:'https://images.unsplash.com/photo-1583692331507-fc0bd348695d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D',
        des: 'Good in math and etc'
    },
    {
        id:2,
        name:'Sagar Hui',
        image:'https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D',
        des: 'Good in  everything and good boy'
    },
    {
        id:3,
        name:'Panda',
        image:'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D',
        des: 'Pro gammer and Coder'
    },
    {
        id:4,
        name:'Krrish Kumar',
        image:'https://images.unsplash.com/photo-1599834562135-b6fc90e642ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D',
        des: 'Pro gammer and Coder also a chinar'
    }
]


export default function Contacts() {
  return (
    <ScrollView>
        <Text style={styles.headerText}>Contacts Cards</Text>
        
        <View style={styles.main}>
            {
                CONTACTS_DATA.map(({id,name,image,des}) => (

                    <View key={id} style={styles.card}>
                        <View>
                            <Image source={{uri:image}} style={styles.image} resizeMode='cover'/>
                        </View>

                        <View>
                            <Text style={styles.name}>{name}</Text>
                            <Text style={styles.des}>{des}</Text>
                        </View>
                    </View>

                ))
            }

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

    main:{
        flex:1,
        marginHorizontal: 10,
        gap: 10,
        marginBottom: 10,
        marginTop: 18
    },

    headerText:{
        fontSize: 20,
        color:'#FFFF',
        padding: 10,
        marginTop: 18,
        fontWeight: '600',
  },
    card:{
        flex:1,
        flexDirection:'row',
        gap: 18,
        alignItems: 'center',
        backgroundColor:  '#a357e2',
        padding: 10,
        borderRadius: 10
    },

    image:{
        height: 60,
        width: 60,
        borderRadius: 30,
    },

    name:{
        fontSize: 18,
        fontWeight: '600',
        color:'#dbdeeb'


    },
    des:{
        fontSize: 15,
        fontWeight: '500',
        color:'#afbbef'

    }
})