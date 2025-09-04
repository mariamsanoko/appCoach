import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'absent-altitude',
  webDir: 'dist',
  "server":{
    "androidScheme": "https",
    "url": "http://192.168.1.39:4321",
    "cleartext": true
  }
};

export default config;
