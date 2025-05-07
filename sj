v=2&tid=G-J9WX5FVB6C&gtm=45je5560v881588415z86613509za200zb6613509&_p=1746644001308&gcs=G111&gcd=13v3v3n3n5l1&npa=0&dma=0&tag_exp=101509157~102015666~103101750~103101752~103116026~103200004~103231718~103231720~103233427~103251618~103251620~103252644~103252646~103284320~103284322~103301114~103301116&ptag_exp=101509156~103101750~103101752~103116026~103200004~103231718~103231720~103233424~103251618~103251620~103252644~103252646~103284320~103284322~103301114~103301116&gdid=dYWJhMj&cid=816198395.1746643572&ul=en-us&sr=1366x768&uaa=x86&uab=64&uafvl=Chromium%3B136.0.7103.49%7CMicrosoft%2520Edge%3B136.0.3240.50%7CNot.A%252FBrand%3B99.0.0.0&uamb=0&uam=&uap=Windows&uapv=10.0.0&uaw=0&are=1&frm=0&pscdl=noapi&_eu=AAAAAAQ&_s=6&dl=https%3A%2F%2Fwww.papajohns.com%2Forder%2Fcheckout&dr=https%3A%2F%2Fwww.papajohns.com%2Forder%2Fview-cart&sid=1746643571&sct=1&seg=1&dt=Checkout&en=CLS&ep.gtm_tag_name=GA4%20Property%20Config%20Tag&ep.affiliate_id=DESKTOP&ep.store_id=5131&ep.zip_code=95133&ep.customer_state=warm&ep.delivery_type=CARRYOUT&ep.user_agent_string=Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F136.0.0.0%20Safari%2F537.36%20Edg%2F136.0.0.0&ep.screen_res=1366x768&ep.web_vitals_measurement_name=CLS&ep.web_vitals_measurement_id=v3-1746644007288-2360261069314&epn.web_vitals_measurement_value=0.016129032258064516&epn.value=0.015852627471383975&tfd=248135<!-- KOUNT Implementation existed here previously -->






<!DOCTYPE html>
<html lang="en-US">
    <head>
<script type="text/javascript" src="https://www.papajohns.com/assets/d9c76b69f57aa23a07c65a17f86637b02598cfb325b"  ></script><script>
// akam-sw.js install script version 1.3.6
"serviceWorker"in navigator&&"find"in[]&&function(){var e=new Promise(function(e){"complete"===document.readyState||!1?e():(window.addEventListener("load",function(){e()}),setTimeout(function(){"complete"!==document.readyState&&e()},1e4))}),n=window.akamServiceWorkerInvoked,r="1.3.6";if(n)aka3pmLog("akam-setup already invoked");else{window.akamServiceWorkerInvoked=!0,window.aka3pmLog=function(){window.akamServiceWorkerDebug&&console.log.apply(console,arguments)};function o(e){(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"sm.sw.s":e,"sm.sw.v":r}])}var i="/akam-sw.js",a=new Map;navigator.serviceWorker.addEventListener("message",function(e){var n,r,o=e.data;if(o.isAka3pm)if(o.command){var i=(n=o.command,(r=a.get(n))&&r.length>0?r.shift():null);i&&i(e.data.response)}else if(o.commandToClient)switch(o.commandToClient){case"enableDebug":window.akamServiceWorkerDebug||(window.akamServiceWorkerDebug=!0,aka3pmLog("Setup script debug enabled via service worker message"),v());break;case"boomerangMQ":o.payload&&(window.BOOMR_mq=window.BOOMR_mq||[]).push(o.payload)}aka3pmLog("akam-sw message: "+JSON.stringify(e.data))});var t=function(e){return new Promise(function(n){var r,o;r=e.command,o=n,a.has(r)||a.set(r,[]),a.get(r).push(o),navigator.serviceWorker.controller&&(e.isAka3pm=!0,navigator.serviceWorker.controller.postMessage(e))})},c=function(e){return t({command:"navTiming",navTiming:e})},s=null,m={},d=function(){var e=i;return s&&(e+="?othersw="+encodeURIComponent(s)),function(e,n){return new Promise(function(r,i){aka3pmLog("Registering service worker with URL: "+e),navigator.serviceWorker.register(e,n).then(function(e){aka3pmLog("ServiceWorker registration successful with scope: ",e.scope),r(e),o(1)}).catch(function(e){aka3pmLog("ServiceWorker registration failed: ",e),o(0),i(e)})})}(e,m)},g=navigator.serviceWorker.__proto__.register;if(navigator.serviceWorker.__proto__.register=function(n,r){return n.includes(i)?g.call(this,n,r):(aka3pmLog("Overriding registration of service worker for: "+n),s=new URL(n,window.location.href),m=r,navigator.serviceWorker.controller?new Promise(function(n,r){var o=navigator.serviceWorker.controller.scriptURL;if(o.includes(i)){var a=encodeURIComponent(s);o.includes(a)?(aka3pmLog("Cancelling registration as we already integrate other SW: "+s),navigator.serviceWorker.getRegistration().then(function(e){n(e)})):e.then(function(){aka3pmLog("Unregistering existing 3pm service worker"),navigator.serviceWorker.getRegistration().then(function(e){e.unregister().then(function(){return d()}).then(function(e){n(e)}).catch(function(e){r(e)})})})}else aka3pmLog("Cancelling registration as we already have akam-sw.js installed"),navigator.serviceWorker.getRegistration().then(function(e){n(e)})}):g.call(this,n,r))},navigator.serviceWorker.controller){var u=navigator.serviceWorker.controller.scriptURL;u.includes("/akam-sw.js")||u.includes("/akam-sw-preprod.js")||u.includes("/threepm-sw.js")||(aka3pmLog("Detected existing service worker. Removing and re-adding inside akam-sw.js"),s=new URL(u,window.location.href),e.then(function(){navigator.serviceWorker.getRegistration().then(function(e){m={scope:e.scope},e.unregister(),d()})}))}else e.then(function(){window.akamServiceWorkerPreprod&&(i="/akam-sw-preprod.js"),d()});if(window.performance){var w=window.performance.timing,l=w.responseEnd-w.responseStart;c(l)}e.then(function(){t({command:"pageLoad"})});var k=!1;function v(){window.akamServiceWorkerDebug&&!k&&(k=!0,aka3pmLog("Initializing debug functions at window scope"),window.aka3pmInjectSwPolicy=function(e){return t({command:"updatePolicy",policy:e})},window.aka3pmDisableInjectedPolicy=function(){return t({command:"disableInjectedPolicy"})},window.aka3pmDeleteInjectedPolicy=function(){return t({command:"deleteInjectedPolicy"})},window.aka3pmGetStateAsync=function(){return t({command:"getState"})},window.aka3pmDumpState=function(){aka3pmGetStateAsync().then(function(e){aka3pmLog(JSON.stringify(e,null,"\t"))})},window.aka3pmInjectTiming=function(e){return c(e)},window.aka3pmUpdatePolicyFromNetwork=function(){return t({command:"pullPolicyFromNetwork"})})}v()}}();</script>
<script type="text/javascript">
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('consent', 'default', {
        "security_storage": "granted",
        "ad_storage": "granted",
        "analytics_storage": "granted",
        "functionality_storage": "granted",
        "personalization_storage": "granted",
        wait_for_update: 500
    });
</script>
    <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="3fae77a8-5002-4f3e-920e-9b9c4e5ae475"></script>
    <script integrity="sha256-mJlVdVyU5G+x2OFQleykwwElfugyc5vz0PUWlrmc2Nw= sha512-Q9Usbw9pN0S6QW/a2oSojZKv+2nKlCleFqFshK6QMOjj4uIZmjfla3ijawJ1R2IuO+Axy4D4ShJBHyBi2CWBNA==" src="/static-assets/ltc/js/oneTrust.387744ef.js"></script>
    <script charset="UTF-8" type="text/javascript">
    window["adrum-start-time"] = new Date().getTime();
    (function(config){
        config.appKey = "AD-AAB-AAJ-YAJ";
        config.adrumExtUrlHttp = "http://cdn.appdynamics.com";
        config.adrumExtUrlHttps = "https://cdn.appdynamics.com";
        config.beaconUrlHttp = "http://pdx-col.eum-appdynamics.com";
        config.beaconUrlHttps = "https://pdx-col.eum-appdynamics.com";
        config.resTiming = {"bufSize":200,"clearResTimingOnBeaconSend":true};
        config.maxUrlLength = 512;
	    config.spa = {
                "spa2": true
            };
    })(window["adrum-config"] || (window["adrum-config"] = {userEventInfo: {
                PageView: function(context) {
                    return {
                        userData: {
                            serverVersion: 'e-webnc-p15-25.3.0-rc.8 25.3.0-rc.5'
                        }
                    }
                }
            }}));
    </script>
    <script src="/static-assets/ltc/js/lib/adrum-22.9.0.3923.js"></script>
<script src="/static-assets/f26eedbf4/js/lib/fullStory.46fe1663.js"></script>


        <meta charset="utf-8">
        <meta name="keywords" content="Checkout Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="referrer" content="strict-origin-when-cross-origin" />
            <meta name="apple-itunes-app" content="app-id=407517450">
            <meta name="google-play-app" content="app-id=com.papajohns.android">
        <meta property="fb:app_id" content="302953903483634"/>
            <link rel="canonical" href="https://www.papajohns.com/order/checkout" />

            <meta name="description" content="Checkout Page" />
            <title>Checkout</title>
        <!-- GA Section -->

            <script>
                var dataLayer = dataLayer || [];
                    dataLayer.push({'pageType': 'co-info'});

                    dataLayer.push({"regionCountry":"USA","region":"9q9k","regionStoreId":"9q9kdeyy6dm2","regionStateCode":"California"});
                        dataLayer.push({'affiliateCode': 'DESKTOP'});
                    dataLayer.push({"order":{"currencyCode":"USD","addressType":"none","storeID":"5131","deliveryType":"carryout","products":[{"edeal":"53496","edealName":"Shaq-a-Roni Pizza ","edealPrice":"13.99","products":[{"sauce":"429","name":"Shaq-a-Roni Pizza","productSku":"49-763-5-301","productTypeId":"49","customizationId":"301","baseIngredientTypeId":"763","baseIngredientSizeId":"5","price":"25.80","qty":"1"}]},{"name":"2-Liter Pepsi","productTypeId":"2","customizationId":"93","productSku":"2-86-26-93","baseIngredientTypeId":"86","baseIngredientSizeId":"26","price":"3.99","qty":"1","sauce":"Not Found"},{"name":"Cinnamon Pull Aparts","productTypeId":"32","customizationId":"232","productSku":"32-600-33-232","baseIngredientTypeId":"600","baseIngredientSizeId":"33","price":"9.99","qty":"1","sauce":"Not Found"},{"name":"Ranch Dipping Sauce","productTypeId":"25","customizationId":"112","productSku":"25-179-33-112","baseIngredientTypeId":"179","baseIngredientSizeId":"33","price":"1.00","qty":"1","sauce":"Not Found"}]}});
                    dataLayer.push({"userStatus":{"storeSet":"true","signedIn":"false"}});
            </script>
                <!-- Analytics tracking code -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-750512-10', 'auto', {allowLinker: true}); //Insert GA Property ID
</script>
                    <!-- Anti-flicker snippet Optimize with Optimize plugin  -->
<style>.async-hide { opacity: 0 !important} </style>
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',4000,
{'GTM-MGVPM2Z':true});
ga('require', 'GTM-MGVPM2Z'); //Insert Optimize Container ID
</script>

            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NVDDFQ');</script>
<!-- Anti-flicker snippet ABTasty -->
<script type="text/javascript" src="https://try.abtasty.com/2714e039bbb037780d4e81d4fd048ad4.js"></script>

<link rel="shortcut icon" type="image/ico" href="/static-assets/a/img/ico/favicon_2021.png"/>
<link rel="manifest" href="/static-assets/f26eedbf4/manifest.json"/>
<link rel="preload" as="script" href="https://www.papajohns.com/assets/d9c76b69f57aa23a07c65a17f86637b02598cfb325b"/><link rel="preload" href="/static-assets/ltc/fonts/PapaSans-Regular-202303011605.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/static-assets/ltc/fonts/PapaSans-MediumCondensed-202303011605.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/static-assets/ltc/fonts/PapaSans-Bold-202303011605.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="preload" href="/static-assets/ltc/rwd-ng/assets/fonts/Pappy-PJ.woff2" as="font" type="font/woff2" crossorigin="anonymous">

    <script src="/static-assets/ltc/js/lib/modernizr.js"></script>
    <script src="/static-assets/ltc/js/dcxd-1829-202402191523PROD.js"></script>
    <script src="/static-assets/ltc/js/dcxd-9239-202407110845PCC.js"></script>
    <script src="/static-assets/ltc/js/gtmToCrafterMigration-202410040423KK.js"></script>
    <script src="/static-assets/ltc/js/dcxd-9825-original-crust-to-shaq-a-roni-202410231033PCC.js"></script>

<link href="/static-assets/ltc/css/vendor.e1356a86.css" rel="stylesheet" type="text/css" />


<!-- Global CSS -->
<link id="global-css-screen" href="/static-assets/ltc/css/screen.18669e18.css" rel="stylesheet" type="text/css" />


<script>
var shellData = shellData || {};
    shellData.menuMode = 'GRID';
    shellData.cartItemCount = 4;
    shellData.droneSession = '' || null;
    shellData.droneVendor = '' || null;

        shellData.storeId = '5131';

        shellData.orderType = 'CARRYOUT';


        shellData.showOrderItAgain = true;
    shellData.screenCSS = '/static-assets/ltc/css/screen.18669e18.css';
    shellData.plScreenCSS = '/static-assets/ltc/css/pl-screen.7fffeeed.css';
    shellData.googleMapsAPIKey = 'AIzaSyBYXcUvu6Tt3RfJX7MC5DATeWel-P5iQNw';
</script>        <script type="text/javascript">
            var callId = ''
        </script>
        <script type="text/javascript">
            var orderIdVantiv = '140051311746644000930'
        </script>
    
<script>(window.BOOMR_mq=window.BOOMR_mq||[]).push(["addVar",{"rua.upush":"false","rua.cpush":"false","rua.upre":"false","rua.cpre":"true","rua.uprl":"false","rua.cprl":"false","rua.cprf":"false","rua.trans":"SJ-cfdf6445-d7f2-4cb1-9e64-40110fc8365f","rua.cook":"true","rua.ims":"false","rua.ufprl":"false","rua.cfprl":"true","rua.isuxp":"false","rua.texp":"norulematch","rua.ceh":"false","rua.ueh":"false","rua.ieh.st":"0"}]);</script>
                              <script>!function(a){var e="https://s.go-mpulse.net/boomerang/",t="addEventListener";if("False"=="True")a.BOOMR_config=a.BOOMR_config||{},a.BOOMR_config.PageParams=a.BOOMR_config.PageParams||{},a.BOOMR_config.PageParams.pci=!0,e="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="ZHLKT-3LNJX-LH32V-JEJES-LDF3X",function(){function n(e){a.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!a.BOOMR||!a.BOOMR.version&&!a.BOOMR.snippetExecuted){a.BOOMR=a.BOOMR||{},a.BOOMR.snippetExecuted=!0;var i,_,o,r=document.createElement("iframe");if(a[t])a[t]("load",n,!1);else if(a.attachEvent)a.attachEvent("onload",n);r.src="javascript:void(0)",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="width:0;height:0;border:0;display:none;",o=document.getElementsByTagName("script")[0],o.parentNode.insertBefore(r,o);try{_=r.contentWindow.document}catch(O){i=document.domain,r.src="javascript:var d=document.open();d.domain='"+i+"';void(0);",_=r.contentWindow.document}_.open()._l=function(){var a=this.createElement("script");if(i)this.domain=i;a.id="boomr-if-as",a.src=e+"ZHLKT-3LNJX-LH32V-JEJES-LDF3X",BOOMR_lstart=(new Date).getTime(),this.body.appendChild(a)},_.write("<bo"+'dy onload="document._l();">'),_.close()}}(),"".length>0)if(a&&"performance"in a&&a.performance&&"function"==typeof a.performance.setResourceTimingBufferSize)a.performance.setResourceTimingBufferSize();!function(){if(BOOMR=a.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var e="true"=="true"?1:0,t="cookiepresent",n="eyaqmrucqut4ajqacqdduaahqzubxlba-f-7fbf3cd7d-clienttons-s.akamaihd.net",i="false"=="true"?2:1,_={"ak.v":"39","ak.cp":"115307","ak.ai":parseInt("202633",10),"ak.ol":"0","ak.cr":28,"ak.ipv":6,"ak.proto":"h2","ak.rid":"58cb6a1c","ak.r":47697,"ak.a2":e,"ak.m":"dsca","ak.n":"essl","ak.bpcip":"2601:646:8285:27c0::","ak.cport":53152,"ak.gh":"23.62.45.133","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.0rtt.ed":"","ak.csrc":"-","ak.acc":"","ak.t":"1746644000","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==/8By8+NmVM31U4TMdxz3qmmDMHxcUkbvpuCpK+3ue6i/Y4+U9fMNEf5rDi6irDimLuMk0LXLullgILm+LU9OM64Ci0+p/YC6WXbNXjtoIxcnFbkJC3XXo0DhWVslU79c74W8s+Z28E5M2BsQCqEhUyFj9Pj2VQXzKL8V40T0B9sKT9ZZrERFI3BkNnyYY+ia37bmJGlWQJKEa+DdVCL36JbZAHlwG3rs6AtEA6jy1d82nB35rOC4KTEKDeBFhQwpo/xgr7PMLXElFBT4xpCQ+3sYAOb0OynFMagxDu12wDe8mJaEPdVnMHXtmOdAvy7qFcJQNeVAugB98m16pqg6EJecCCkKL1er7RO2dLGb8cKzgKjIHo7zFCIhX8Fq+uOucQ9rQ3hmygmVnOx8bMFUocSNY3akyrCy+opYIBUs4AA=","ak.pv":"434","ak.dpoabenc":"","ak.tf":i};if(""!==t)_["ak.ruds"]=t;var o={i:!1,av:function(e){var t="http.initiator";if(e&&(!e[t]||"spa_hard"===e[t]))_["ak.feo"]=void 0!==a.aFeoApplied?1:0,BOOMR.addVar(_)},rv:function(){var a=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.0rtt.ed","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(a)}};BOOMR.plugins.AK={akVars:_,akDNSPreFetchDomain:n,init:function(){if(!o.i){var a=BOOMR.subscribe;a("before_beacon",o.av,null,null),a("onbeacon",o.rv,null,null),o.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head>
    <body class="layout-checkout" data-menu-position="closed">
            <div id="v-ie-id">
                <script type="text/javascript"
                        src=https://assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js>
                </script>
            </div>

            <!--   TODO - Find another event that happens prior to pjiApp-ready -->
            <!--           The selected event must happen Before window.pji.components.browserType  -->
            <script type="text/javascript">
                document.addEventListener('pjiApp-ready', function () {
                    var isIE = !!window.pji.components.browserType.browserChecks.bwsr_ie();
                    if (isIE) {
                        $('#v-ie-id').empty();
                        document.getElementById("v-ie-id").innerHTML = '';
                    }
                });
            </script>




            <main id="maincontent" aria-label="main content">
                <rwd-root></rwd-root>
            </main>



<script>
        <!--assign variable for analytics-->
        var dataLayer = dataLayer || [];
        dataLayer.push({"order":{"currencyCode":"USD","addressType":"none","storeID":"5131","deliveryType":"carryout","products":[{"edeal":"53496","edealName":"Shaq-a-Roni Pizza ","edealPrice":"13.99","products":[{"sauce":"429","name":"Shaq-a-Roni Pizza","productSku":"49-763-5-301","productTypeId":"49","customizationId":"301","baseIngredientTypeId":"763","baseIngredientSizeId":"5","price":"25.80","qty":"1"}]},{"name":"2-Liter Pepsi","productTypeId":"2","customizationId":"93","productSku":"2-86-26-93","baseIngredientTypeId":"86","baseIngredientSizeId":"26","price":"3.99","qty":"1","sauce":"Not Found"},{"name":"Cinnamon Pull Aparts","productTypeId":"32","customizationId":"232","productSku":"32-600-33-232","baseIngredientTypeId":"600","baseIngredientSizeId":"33","price":"9.99","qty":"1","sauce":"Not Found"},{"name":"Ranch Dipping Sauce","productTypeId":"25","customizationId":"112","productSku":"25-179-33-112","baseIngredientTypeId":"179","baseIngredientSizeId":"33","price":"1.00","qty":"1","sauce":"Not Found"}]}});
</script>

        <script>
            shellData.serverVersion = 'e-webnc-p15-25.3.0-rc.8 25.3.0-rc.5';
        </script>
<script>
    dataLayer.push({
        'serverVersion': 'e-webnc-p15-25.3.0-rc.8 25.3.0-rc.5'
    });
</script>
<div id="modal-banked-welcome" class="modal modal--image modal--logo modal--slider modal--new" role="dialog" tabindex="0" data-terms-version="05302018" hidden="true" >
    <div class="modal-window loyalty-modal-window modal-sm" role="document">
        <div class="modal-content">
            <div class="layout layout--sidebar welcome-layout-sidebar">
                <button class="modal-close-button button--unstyled close-modal-button" aria-label="Close Dialog" data-track-click="loyalty|info modal skip">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.7" height="25.7" viewBox="0 0 25.7 25.7">
                        <path fill="currentColor" d="M20.3,5.2c-0.6-0.6-1.5-0.6-2.2,0l-5.2,5.4L7.5,5.2C6.9,4.6,6,4.6,5.4,5.2c-0.6,0.6-0.6,1.5,0,2.2l5.4,5.5
                        l-5.4,5.4c-0.6,0.6-0.6,1.5,0,2.2c0.3,0.3,0.6,0.5,1.1,0.5c0.5,0,0.8-0.2,1.1-0.5l5.2-5.4l5.2,5.4c0.3,0.3,0.8,0.5,1.1,0.5
                        s0.8-0.2,1.1-0.5c0.6-0.6,0.6-1.5,0-2.2l-5.4-5.5l5.4-5.5C20.9,6.8,20.9,5.7,20.3,5.2z"/>
                    </svg>
                </button>
                <div class="modal-image initial-focus loyalty-modal-image" tabindex="-1">
                    <img src="/static-assets/ltc/img/account/2022-papa-rewards-white.svg"
                         alt="Papa Rewards Logo">
                </div>
                <div class="modal-html vertically-centered loyalty-modal-html ie-fix">
                    <!-- dialog contents go here -->
                    <div class="main-carousel spacing-top-xs">
                                <div class="carousel-cell">
                                    <div class="layout-content layout-content-1">

                                        <h3 class="slider-title h2-new">EARN FREE FOOD, FAST &amp; EASY</h3>
                                        <div class="right-content">
                                            <img class="slider-logo"  src="">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    
                                                </h4>
                                                <h5 class="slider-content">Spend $1, get 1 point.
                                                </h5>
                                            </div>
                                        </div>

                                        <div class="right-content">
                                            <img class="slider-logo" src="">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    
                                                </h4>
                                                <h5 class="slider-content">For Every 15 points, you earn you get $2 in Papa Dough.
                                                </h5>
                                            </div>
                                        </div>

                                        <div class="right-content">
                                            <img class="slider-logo" src="">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    
                                                </h4>
                                                <h5 class="slider-content">Use Papa Dough towards any menu item (and combine it with other offers, cool, eh?)
                                                </h5>
                                            </div>
                                        </div>

                                        <div class="right-content">
                                            <img class="slider-logo" src="">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    
                                                </h4>
                                                <h5 class="slider-content">
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="carousel-cell">
                                    <div class="layout-content layout-content-2">

                                        <h3 class="slider-title h2-new">How does it work?</h3>
                                        <div class="right-content">
                                            <img class="slider-logo"  src="/static-assets/ltc/img/account/phone.svg">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    1. Order Food
                                                </h4>
                                                <h5 class="slider-content">On the website, app or at participating stores when you call or carryout.
                                                </h5>
                                            </div>
                                        </div>

                                        <div class="right-content">
                                            <img class="slider-logo" src="/static-assets/ltc/img/account/stars.svg">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    2. Earn Points
                                                </h4>
                                                <h5 class="slider-content">Get 1 point for every $1 you spend online or at the store.
                                                </h5>
                                            </div>
                                        </div>

                                        <div class="right-content">
                                            <img class="slider-logo" src="/static-assets/ltc/img/account/cash.svg">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    3. Rack Up Papa Dough
                                                </h4>
                                                <h5 class="slider-content">$2 Papa Dough for every 15 points earned.
                                                </h5>
                                            </div>
                                        </div>

                                        <div class="right-content">
                                            <img class="slider-logo" src="/static-assets/ltc/img/account/pizza.svg">
                                            <div class="slider-info">
                                                <h4 class="slider-header">
                                                    4. Cash In
                                                </h4>
                                                <h5 class="slider-content">Use Papa Dough towards any menu item.
                                                </h5>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                    </div>
                    <br>
                    <div class="main-carousel vertically-centered carousel-content">
                        <button data-action-modal="dismiss" class="button button--medium"
                                data-track-click="loyalty|info modal confirm">Order food now!</button>
                        <div class="carousel-footer">
                            <a href=https://www.papajohns.com/contact-us/frequently-asked-papa-rewards-questions.html>Rewards FAQ</a>
                            <span class="carousel-separator"> | </span>
                            <a href=https://www.papajohns.com/papa-rewards-terms-and-conditions>Rewards Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal-mask" data-track-click="loyalty|info modal skip"></div>
</div>
<style>
.ie-fix{
    flex: 1 0 auto !important;
}
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
   .welcome-layout-sidebar.layout--sidebar .layout-content .right-content .slider-logo{
       height: 50px !important;
       width: 50px !important
       }

    .welcome-layout-sidebar.layout--sidebar .layout-content .right-content .slider-info,
    .welcome-layout-sidebar.layout--sidebar .layout-content .slider-content{
         width: 90%;
    }

    .welcome-layout-sidebar.layout--sidebar .layout-content .slider-title{
        width:85%;
    }

    .welcome-layout-sidebar.layout--sidebar .layout-content.layout-content-1{
        width:70%;
    }
}
</style>
<script type="text/javascript">
    var pji = pji || {};
</script>
<script integrity="sha256-dN4Fu1EvuvaTrbUlsDHmACa6+aDQyXAaWc0l+KAvVc4= sha512-GP1anYDS34PpeU+SfDo0ny4bDlVNHZWOsCWF918uhVtaw2nysG+sIrsRaIMVODXOd6ayelk9czZd84lxfEovyg==" src="/static-assets/ltc/js/vendor.6ca24c04.js"></script>
<script integrity="sha256-YIAsZUoQ18sTW6GtZX3vf13EhLwlbnQhWrRkowKCLRM= sha512-+UDi12PkCZjDMznQzTlcgG8knkhz3ClcKL0ioPCYCp+D+OMmJS0ZeSrrH0WZg7dvfy1voL8QMCCMPrtfjmLzHQ==" src="/static-assets/ltc/js/main.698c7bd1.js"></script>
    <script integrity="sha256-sbCldGV+H47ivxcYmB2H8oDnX5+UYLmuoQf7ztN2YuI= sha512-5K2mli61kzDXbHKWpg0lVKqdiqDRcAFYFJQHKMxexyK01LmbPS0nLTRY6/3fne/uCPlbHWtonWCjVHSKcVveKQ==" src="/static-assets/ltc/js/webChat.e82f0ad9.js"></script>









            <script>
                var shellData = shellData || {};
                shellData = {...shellData, ...{
                    csrfToken: '',
                    csrfParameterName: '',
                    droneSession: '' || null,
                }};
                shellData.csrfToken = '6ed4af91-c4de-4c32-8303-82cd41114115';
                shellData.csrfParameterName = '_csrf'
            </script>

<link rel="stylesheet" href="/static-assets/ltc/rwd-ng/styles.eac90ab559f471ba.css"><script src="/static-assets/ltc/rwd-ng/runtime.55582722cd168b89.js" type="module"></script><script src="/static-assets/ltc/rwd-ng/polyfills.ade21b85dfd45d5d.js" type="module"></script><script src="/static-assets/ltc/rwd-ng/main.287f6e9cd0c32c85.js" type="module"></script>            <!-- KOUNT Implementation existed here previously -->
    <script type="text/javascript"  src="/zRnS7edo9/8A1/LQK-GQ/5akONzSGfrXV/HUBaJAE/URwGEQk/yPSY"></script></body>
</html>

