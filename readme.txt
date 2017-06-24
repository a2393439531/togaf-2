Publishing:
http://ionicframework.com/docs/guide/publishing.html

Remember to update version in config.xml
sudo cordova build --release android

(Already generated - do not lose - If Key not already present)
keytool -genkey -v -keystore  awsArch-key.keystore -alias awsArch- -keyalg RSA -keysize 2048 -validity 100000


rm *.apk

cp /Users/faeezshaikh/git/togaf/platforms/android/build/outputs/apk/android-release-unsigned.apk .

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore awsArch-key.keystore android-release-unsigned.apk awsArch-

C:\Users\FSHAI\AppData\Local\Android\android-sdk\build-tools\23.0.1\zipalign -v 4 android-release-unsigned.apk togaf1.apk
/Users/faeezshaikh/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 android-release-unsigned.apk togaf1.apk

---------------------

ANDROID SCREENSHOTS
---------------------
1. Start Genymotion Emulator --> Custom Phone
2. sudo ionic run android (This will install the apk on the genymotion emulator).
3. For Screenshots, Android Studio --> (Android Device monitor) DDMS --> Select emulator --> Camera icon.

(Optional)
 Start Android Virtual Device from AVD manager (either standalone or from android studio)

2. Install the apk in the emulator using this command:
~/Android/~platform-tools/adb install yourfile.apk


-----------------
IOS SCREENSHOTS
-----------------

1. sudo ionic build ios
2. Run in emulator using this command: (Replace .app file)

	ios-sim launch /Users/faeezshaikh/git/togaf/platforms/ios/build/emulator/TOGAF\ 9.1.app -devicetypeid com.apple.CoreSimulator.SimDeviceType.iPhone-6s -cls
	
3. Take screenshots from emulator
4. Use launchkit.io for appstore images	


----
TIPS
-----
For splashcreen :
sudo ionic platform remove android
sudo ionic platform add android
sudo ionic resources

-------------

iOS App Freezing issues

http://cordova.apache.org/announcements/2016/03/02/ios-4.1.0.html14

The steps are as follows:

npm install -g cordova
cd my_project
cordova platform rm ios
cordova platform add ios@4.1.0

---------------------------

ionic platform remove ios
ionic platform add ios


sudo chmod -R a+rw ios/


Remove from Info.plist file

 <key>CFBundleIconFile</key>
    <string>icon.png</string>

