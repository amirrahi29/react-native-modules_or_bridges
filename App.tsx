import { View, Text, NativeModules, TouchableOpacity, Platform } from 'react-native'
import React from 'react'

const MyToast = NativeModules.ToastAmirModule;
const MyLaunchAndShare = NativeModules.LaunchAndShareModule;

const App = () => {
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
    
    
    <TouchableOpacity style={{backgroundColor:'red',paddingLeft:32,paddingRight:32,padding:8,borderRadius:8,margin:8}}
     onPress={()=>{
        if(Platform.OS == "android"){
          MyToast.showToastMessageAmir("Helo amir rahi", 5000);
        }
    }}>
    <Text style={{color:'white',fontSize:24}}>Show Toast</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{backgroundColor:'red',paddingLeft:32,paddingRight:32,padding:8,borderRadius:8,margin:8}}
     onPress={()=>{
        if(Platform.OS == "android"){
          MyLaunchAndShare.openWebsiteAmir();
        }
    }}>
    <Text style={{color:'white',fontSize:24}}>Open Website</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{backgroundColor:'red',paddingLeft:32,paddingRight:32,padding:8,borderRadius:8,margin:8}}
     onPress={()=>{
        if(Platform.OS == "android"){
          MyLaunchAndShare.openSettingAmir();
        }
    }}>
    <Text style={{color:'white',fontSize:24}}>Open Setting</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{backgroundColor:'red',paddingLeft:32,paddingRight:32,padding:8,borderRadius:8,margin:8}}
     onPress={()=>{
        if(Platform.OS == "android"){
          MyLaunchAndShare.shareTextAmir("Helo sharing the thoughts of amir rahi");
        }
    }}>
    <Text style={{color:'white',fontSize:24}}>Share Text</Text>
    </TouchableOpacity>
    

    </View>
  )
}

export default App