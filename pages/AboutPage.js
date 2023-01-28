import React from 'react'
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png';
export default function AboutPage(){
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>

        <View style={styles.imageView}>
            <Image style={styles.mainImg} source={{uri:main}}></Image>
            <Text style={styles.subTitle1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
            <Text style={styles.subTitle2}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>seulgi__0806</Text>
            </TouchableOpacity>
        </View>

    </ScrollView>)
}

const styles = StyleSheet.create({

    container : {
        backgroundColor : '#000080',
        paddingLeft : 15,
        paddingRight : 15
    },

    title : {
        fontSize: 29,
        fontWeight: '700',
        marginTop : 100,
        color : 'white',
        textAlign : 'center'
    },
    imageView : {

        backgroundColor:"#ffff",
        borderColor:"deeppink",
        borderRadius:15,
        marginTop: 50,
        height : 500
    },

    mainImg : {
        alignSelf:"center",
        width:'50%',
        height:150,
        margin : 30,
        borderRadius : 60,
    },

    subTitle1 : {
        fontSize : 20, 
        margin : 10,
        fontWeight: '600',
        textAlign : 'center'
    }, 

    subTitle2 : {
        fontSize : 15, 
        fontWeight: '500',
        textAlign : 'center'
    }, 
    
    button : {
        alignSelf:"center",
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        width:100,
        height:50,
        padding:15,
        borderRadius:15,
        margin:7    
    }, 

    buttonText : {
        color : '#fff', 
        fontWeight: '500',
    },
})