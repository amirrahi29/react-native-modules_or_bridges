package com.amirproject.DeviceInfo;

import android.os.Build;
import android.provider.Settings;
import android.widget.Toast;
import android.util.Log;

// https://facebook.github.io/react-native/
//these lines are imported for creating bridge
import androidx.annotation.NonNull;

import org.json.JSONException;
import org.json.JSONObject;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
//end
public class DeviceInfoModule extends ReactContextBaseJavaModule{

    //context
    private static ReactApplicationContext reactContext;

    //constructor
    DeviceInfoModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "DeviceInfoAmirModule";
    }

    @ReactMethod
    public void getDeviceId(Promise promise){
        try {
            String deviceId = Settings.Secure.getString(reactContext.getContentResolver(),Settings.Secure.ANDROID_ID);
            promise.resolve(deviceId);
        } catch (Exception e) {
            promise.reject("Error: ",e);
        }
    }

    @ReactMethod
    public void getDeviceFullInfo(Promise promise){
        var manufacturer = Build.MANUFACTURER;
        var model = Build.MODEL;
        var sdkVersion = Build.VERSION.SDK;
        var osVersion = Build.VERSION.RELEASE;
        JSONObject obj = new JSONObject();
        try {
            obj.put("platform", "android");
            obj.put("model", model);
            obj.put("manufacturer", manufacturer);
            obj.put("os_version", osVersion);
            obj.put("sdk_version", sdkVersion);
            promise.resolve(obj.toString());
        } catch (JSONException e) {
            promise.reject("Error: ",e);
        }
    }

}
