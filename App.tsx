import { View, Text, NativeModules, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'

const MyToast = NativeModules.ToastAmirModule;
const MyLaunchAndShare = NativeModules.LaunchAndShareModule;
const MyDeviceInfo = NativeModules.DeviceInfoAmirModule;

const App = () => {

const [deviceId, setDeviceId] = useState('');
const [deviceFullInfo, setDeviceFullInfo] = useState([]);

const getDeviceIdMethod=async()=>{
  const result = await MyDeviceInfo.getDeviceId();
  setDeviceId(result);
}

const getDeviceFullInfoMethod=async()=>{
  const result = await MyDeviceInfo.getDeviceFullInfo();
  setDeviceFullInfo(result);

  // Parse the JSON response
  const deviceInfo = JSON.parse(result);
  // Extract the platform value
  const platform = deviceInfo.platform;
  console.log('Platform:', platform);

}

  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
    
    <Text style={{color:'red',fontSize:24}}>{deviceId}</Text>
    <Text style={{color:'red',fontSize:24}}>{deviceFullInfo}</Text>
    
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

    <TouchableOpacity style={{backgroundColor:'red',paddingLeft:32,paddingRight:32,padding:8,borderRadius:8,margin:8}}
     onPress={()=>{
        if(Platform.OS == "android"){
          getDeviceIdMethod();
        }
    }}>
    <Text style={{color:'white',fontSize:24}}>
      Fetch Device Id</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{backgroundColor:'red',paddingLeft:24,paddingRight:24,padding:8,borderRadius:8,margin:8}}
     onPress={()=>{
        if(Platform.OS == "android"){
          getDeviceFullInfoMethod();
        }
    }}>
    <Text style={{color:'white',fontSize:24}}>
      Fetch Device Full Info Method</Text>
    </TouchableOpacity>
    

    </View>
  )
}

export default App