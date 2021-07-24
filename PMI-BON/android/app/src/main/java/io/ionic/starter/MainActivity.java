package io.ionic.starter;

import com.getcapacitor.BridgeActivity;
import android.os.Bundle;

import com.getcapacitor.Plugin;

import java.util.ArrayList;
import com.getcapacitor.plugin.http.Http; //added

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Initializes the Bridge
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            add(Http.class); //added
        }});
    }
}
