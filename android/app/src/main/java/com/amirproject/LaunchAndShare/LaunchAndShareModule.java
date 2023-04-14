package com.amirproject.LaunchAndShare;

import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;
import android.util.Log;

// https://facebook.github.io/react-native/
//these lines are imported for creating bridge
import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class LaunchAndShareModule extends ReactContextBaseJavaModule {

    //context
    private static ReactApplicationContext reactContext;

    //constructor
    LaunchAndShareModule(ReactApplicationContext context){
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "LaunchAndShareModule";
    }

    @ReactMethod
    public void openWebsiteAmir(){
        String url = "https://rojkharido.com/";
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(url));
        i.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(i);
    }

    @ReactMethod
    public void openSettingAmir(){
        Intent intent = new Intent(Settings.ACTION_SECURITY_SETTINGS);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK | Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
    }

    @ReactMethod
    public void shareTextAmir(String message){
        Intent shareText = new Intent(Intent.ACTION_SEND);
        shareText.setType("text/plain");
        shareText.putExtra(Intent.EXTRA_TEXT, message);
        Intent chooseIntent = Intent.createChooser(shareText, "Share this via");
        chooseIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(chooseIntent);
    }

}
