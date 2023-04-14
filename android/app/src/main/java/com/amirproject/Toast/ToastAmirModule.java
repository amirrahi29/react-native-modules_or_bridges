package com.amirproject.Toast;

import android.widget.Toast;
import android.util.Log;

// https://facebook.github.io/react-native/
//these lines are imported for creating bridge
import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
//end

public class ToastAmirModule extends ReactContextBaseJavaModule {

    //context
    private static ReactApplicationContext reactContext;

    //constructor
    ToastAmirModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "ToastAmirModule";
    }

    @ReactMethod
    public void showToastMessageAmir(String message, int duration){
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }
}
