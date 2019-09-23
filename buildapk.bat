
:: ionic cordova build android --prod --release 

cd C:\Users\wongh\Documents\ionic\fps\platforms\android\app\build\outputs\apk\release

del fsp-hkqr.apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk my-alias

C:\Users\wongh\AppData\Local\Android\Sdk\build-tools\28.0.3\zipalign -v 4 app-release-unsigned.apk fsp-hkqr.apk

http-server 

cd C:\Users\wongh\Documents\ionic\fps