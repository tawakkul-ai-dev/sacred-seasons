package com.tawakkulai.sacredseasons;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public final class MainActivity extends Activity {
    private static final String HOME_URL = "https://sacred-seasons.vercel.app/";
    private static final String SITE_HOST = "sacred-seasons.vercel.app";
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(android.graphics.Color.rgb(5, 8, 20));
        getWindow().setNavigationBarColor(android.graphics.Color.rgb(5, 8, 20));

        webView = new WebView(this);
        webView.setBackgroundColor(android.graphics.Color.rgb(5, 8, 20));
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            settings.setSafeBrowsingEnabled(true);
        }
        settings.setUserAgentString(settings.getUserAgentString() + " SacredSeasonsAndroid/1.0");

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                return routeUrl(request.getUrl());
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return routeUrl(Uri.parse(url));
            }

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                if (!isTrustedSite(Uri.parse(url))) {
                    view.stopLoading();
                    view.loadUrl(HOME_URL);
                }
            }
        });

        setContentView(webView);
        if (savedInstanceState == null) {
            webView.loadUrl(HOME_URL);
        } else {
            webView.restoreState(savedInstanceState);
        }
    }

    private boolean routeUrl(Uri uri) {
        if (isTrustedSite(uri)) return false;
        if ("https".equalsIgnoreCase(uri.getScheme()) || "mailto".equalsIgnoreCase(uri.getScheme()) || "tel".equalsIgnoreCase(uri.getScheme())) {
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, uri));
            } catch (android.content.ActivityNotFoundException ignored) {
                // Ignore unsupported external links rather than opening them in the app.
            }
        }
        return true;
    }

    private boolean isTrustedSite(Uri uri) {
        return "https".equalsIgnoreCase(uri.getScheme()) && SITE_HOST.equalsIgnoreCase(uri.getHost());
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        if (webView != null) webView.saveState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
