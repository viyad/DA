package com.mama.deviceadmin;

import android.app.admin.DeviceAdminReceiver;
import android.content.Context;
import android.content.Intent;
import android.widget.Toast;

public class CordovaDeviceAdminReceiver extends android.app.admin.DeviceAdminReceiver {

//    void showToast(Context context, String msg) {
//        String status = context.getString(R.string.admin_receiver_status, msg);
//        Toast.makeText(context, status, Toast.LENGTH_SHORT).show();
//    }

    @Override
    public void onEnabled(Context context, Intent intent) {
//        showToast(context, context.getString(R.string.admin_receiver_status_enabled));
    }

    @Override
    public CharSequence onDisableRequested(Context context, Intent intent) {
//        return context.getString(R.string.admin_receiver_status_disable_warning);
        return "device admin disabled";
    }

    @Override
    public void onDisabled(Context context, Intent intent) {
//        showToast(context, context.getString(R.string.admin_receiver_status_disabled));
    }

    @Override
    public void onPasswordChanged(Context context, Intent intent) {
//        showToast(context, context.getString(R.string.admin_receiver_status_pw_changed));
    }

}
