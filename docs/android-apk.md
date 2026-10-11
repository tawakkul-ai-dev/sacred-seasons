# Android APK download

Sacred Seasons provides a directly downloadable, self-signed Android APK. It opens the live website in a small native WebView; it is not an app-store release and does not bundle the website. Users need an internet connection for pages that are not already cached by the website's service worker.

## One-time release signing setup

Android requires all installable APKs to be signed. The same signing key must be kept for every update, or Android will refuse to install an update over the existing app. Keep an encrypted backup of the `.p12` keystore and its password in a secure place. Never commit either to the repository or share them publicly.

1. On a trusted computer with Java's `keytool`, create a PKCS#12 keystore and record the password securely:

   ```sh
   keytool -genkeypair -v \
     -keystore sacred-seasons-release.p12 \
     -storetype PKCS12 \
     -alias sacred-seasons-release \
     -keyalg RSA -keysize 3072 -validity 9125
   ```

2. Base64-encode the keystore (Linux):

   ```sh
   base64 -w0 sacred-seasons-release.p12
   ```

3. In the GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret**, and create:
   - `ANDROID_KEYSTORE_BASE64`: the base64 output from step 2
   - `ANDROID_KEYSTORE_PASSWORD`: the keystore password
   - `ANDROID_KEY_ALIAS`: `sacred-seasons-release`
   - `ANDROID_KEY_PASSWORD`: the key password (use the same password if prompted once)

The Android workflow builds a debug APK for pull requests. On a push to `main` that changes Android packaging, or on manual workflow dispatch, it builds and signs a release APK, verifies the signature, and uploads it to the public GitHub release tagged `android-latest`. The website's **Download Android APK** link points to that release asset. The release job fails safely when signing secrets are missing.

## Install on Android

Download the APK from Sacred Seasons, open the downloaded file, and follow Android's prompt to allow installation from that browser if requested. Android may label this as an unknown-app install because the APK is distributed directly rather than through an app store. Only install APKs from the official Sacred Seasons site/repository.
