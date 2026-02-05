# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:


# ============================================
# Project specific ProGuard rules
# ============================================

# React Native
-keep class com.facebook.react.** { *; }
-dontwarn com.facebook.react.**

# OkHttp & Networking (safe for Razorpay)
-dontwarn okhttp3.**
-dontwarn okio.**

# ============================================
# Razorpay (IMPORTANT)
# ============================================

# Keep all Razorpay SDK classes
-keep class com.razorpay.** { *; }

# Do not warn for Razorpay
-dontwarn com.razorpay.**

# ============================================
# Gson (used internally)
# ============================================
-keep class com.google.gson.** { *; }

# ============================================
# Kotlin metadata (important for Kotlin apps)
# ============================================
-keep class kotlin.Metadata { *; }

# ============================================
# Keep annotations (safe)
# ============================================
-keepattributes *Annotation*
