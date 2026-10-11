plugins {
    id("com.android.application")
}

val signingStoreFile = providers.environmentVariable("ANDROID_KEYSTORE_PATH").orNull
val signingStorePassword = providers.environmentVariable("ANDROID_KEYSTORE_PASSWORD").orNull
val signingKeyAlias = providers.environmentVariable("ANDROID_KEY_ALIAS").orNull
val signingKeyPassword = providers.environmentVariable("ANDROID_KEY_PASSWORD").orNull

android {
    namespace = "com.tawakkulai.sacredseasons"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.tawakkulai.sacredseasons"
        minSdk = 23
        targetSdk = 34
        versionCode = 1
        versionName = "1.0.0"
    }

    signingConfigs {
        if (signingStoreFile != null && signingStorePassword != null && signingKeyAlias != null && signingKeyPassword != null) {
            create("release") {
                storeFile = file(signingStoreFile)
                storeType = "PKCS12"
                storePassword = signingStorePassword
                keyAlias = signingKeyAlias
                keyPassword = signingKeyPassword
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            if (signingStoreFile != null && signingStorePassword != null && signingKeyAlias != null && signingKeyPassword != null) {
                signingConfig = signingConfigs.getByName("release")
            }
        }
    }
}

tasks.register("verifyReleaseSigning") {
    doLast {
        check(signingStoreFile != null && signingStorePassword != null && signingKeyAlias != null && signingKeyPassword != null) {
            "Release signing secrets are not configured. Set ANDROID_KEYSTORE_BASE64, ANDROID_KEYSTORE_PASSWORD, ANDROID_KEY_ALIAS, and ANDROID_KEY_PASSWORD in GitHub Actions."
        }
    }
}

tasks.named("assembleRelease") {
    dependsOn("verifyReleaseSigning")
}
