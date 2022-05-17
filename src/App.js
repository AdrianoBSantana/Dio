import React from 'react';
import{View,Image,StyleSheet,SafeAreaView,StatusBar,Text,Pressable,Linking} from 'react-native';

const colorGithub='#010409';
const colorFont='#C9D1D9';
const colorFontDark='#4F565E'
const imageProfileGithub='https://avatars.githubusercontent.com/u/101372228?v=4';
const urlToMyGithub='https://github.com/AdrianoBSantana';

const App=()=>{

    const handlePressGoToGithub= async()=>{
      const res=await Linking.canOpenURL(urlToMyGithub);
      if(res){await Linking.openURL(urlToMyGithub)
    }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
        <View style={style.content} >
           <Image accessibilityLabel='Adriano na Roda-Gigante' style={style.avatar} source={{uri:imageProfileGithub}}/>
        <Text accessibilityLabel='Meu nome' style={[style.defaultText,style.name]}> Adriano Santana</Text>
        <Text accessibilityLabel='Nickname' style={[style.defaultText,style.nickname]}> AdrianoBSantana</Text>
        <Text accessibilityLabel= 'Descrição' style={[style.defaultText,style.description]}> Estudante Front End.</Text>
        
        <Pressable onPress={handlePressGoToGithub}>
        <View style={style.button}>
            <Text style={[style.defaultText,style.textButton]}>Open in Github</Text>
        </View>
        </Pressable>
        

        </View>
        </SafeAreaView>
        
    );      
};

export default App;


const style= StyleSheet.create({
    container:{
        backgroundColor:colorGithub,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        alignItems:'center',
        padding:20,
    },
    avatar:{
        height:200,
        width:200,
        borderRadius:100,
        borderColor:'white',
        borderWidth:2
    },
    defaultText:{
        color:colorFont
    },
    name:{
        marginTop:20,
        fontWeight:'bold',
        fontSize:24,
    },
    nickname:{
        fontSize:18,
        color:colorFontDark,
    },
    description:{
        fontWeight:'bold',
        fontSize:14,
    },
    button:{
        backgroundColor:colorFontDark,
        borderRadius:10,
        padding:20,
        marginTop:20
    },
    textButton:{
        fontWeight:'bold',
        fontSize:16,
    },
});