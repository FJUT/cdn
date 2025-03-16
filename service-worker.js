/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2022/01/可能是当下最简便的直达小程序指定页面的快捷方式/index.html","508c94ea90302326064651136fc68540"],["/2022/01/这一次，在桌面访问全国各地健康码/index.html","b0b06c9bcf0c1ab2a9b05364d025dcd0"],["/2022/04/小程序链接无法访问，提示“对不起，此链接已被其他用户访问，你无法访问”/index.html","3da293207c120983aa6e20fa4a545064"],["/2022/05/主流应用的AppScheme/index.html","01c195ea5d8662ec1d9f7127d364f377"],["/2022/07/AppID查小程序信息/index.html","619b4de85a70bcf58df74c5bb501ab94"],["/2022/07/支持跨域请求和自签SSL的移动端浏览器/index.html","f502091282d02ada9eb81de3c1ad9ce4"],["/2022/08/分析一下七夕活动页的数据/index.html","5a1295199972e9c3acbf366b8c3680c8"],["/2022/08/外公悼词/index.html","2da6e26a7ff1a00df76a585fa7507c49"],["/2022/08/小程序码解析发现的规律/index.html","975a872c4a52b42720f9e0b95d47c366"],["/2022/08/打开场所码最短需要多少秒？/index.html","17090f362ef705246c0979157b973113"],["/2022/08/无需电脑，在手机在调试任意H5页面的方法/index.html","747488614eb151f25f3817574c31713a"],["/2022/09/iOS16锁屏小组件进入任意App任意小程序的任意页面/index.html","f6f67b90151284edc1926d3554ac972f"],["/2022/09/我要我的音乐/index.html","80f2635f6816a93c3f00a326c4f24ad7"],["/2022/10/有趣产品咖啡馆访谈/index.html","27c3a24e46ca1fe1531147dc3c578a36"],["/2022/11/调用openSDk打开微信小程序后剪贴板被清空/index.html","36fb66248af40f5f4c398ae0a424d853"],["/2022/11/跨时空App使用常见问题FAQ/index.html","fdea4489d75b0c7fa497c554618f8851"],["/2022/12/ChatGPT？我来考考你/index.html","ab37c3c834ae6f7f71921e22cd335dc5"],["/2022/12/柠宝2周岁/index.html","b26300dcfa9c683d40e2cb820c7718cc"],["/2023/03/数据传输加解密笔记/index.html","dcdeba0b6e245e5bf269531ed1fed979"],["/2023/09/无root权限的Mac系统安装cocoapods/index.html","a18694fdbc6824e4fd6bbb068ca1de0f"],["/2023/10/雷速体育接口数据解析/index.html","2de3fc2c3c858e33b59741b9b56f9976"],["/2023/11/yolov8(yolov5)增量训练方法和目录规划/index.html","71b6521ca870c441387b8d785f4df8bd"],["/2023/11/定了！放弃订阅号消息入口/index.html","048cffb9bbea5aa020622b59ef51116d"],["/2023/11/微信消息体解析/index.html","0b19260f7eb366c9232d96e87c311ffc"],["/2023/12/老王提示词/index.html","4f030b90f9b07c66c79a33866904a456"],["/2024/01/Ubuntu-环境搭建/index.html","46f98cb3bcbcc5270fbb068bacf44595"],["/2024/02/Mac系统中无root权限安装PostgresSQL/index.html","ffe0a80ec0b813356ab745e88506b696"],["/2024/03/跨时空App：H5强制发送跨域请求无需CORS配置/index.html","a79d05ec4773dd392db46dbea92cf5d4"],["/2024/03/阿里云使用OSS备份ECS整机/index.html","8b7d08929aa18e3bdf9dbdd2cec182e7"],["/2024/05/伟人之所以伟大/index.html","f62152ace9c2512d7e9f5c5bd7543da8"],["/2024/06/50元成本 Air724ug/Air780E+ESP32C3 开发板进行短信转发/index.html","d30cf1f3909a5f40b129819e23483a38"],["/2024/06/node-sass离线手动安装的方法/index.html","ef80eda7492456bc0c8c6851ae005247"],["/2024/06/从浅尝辄止到深入挖掘,由博客邮件订阅服务想到的/index.html","133af92877af73d9d9262d65e0551b35"],["/2024/06/公众号视频号评论机器人/index.html","92deef73c3655708eaf61c791f97fdfb"],["/2024/06/大白话理解微信广告eCPM/index.html","62cbb4229bfde03302e4e1d37fa12f55"],["/2024/06/微信用户有福了，无需魔法，直接使用Suno创作AI音乐（附：Suno音乐创作技巧）/index.html","565d4cd06e4bcbdc1781c13ddcbf824c"],["/2024/06/浏览器的ORB安全策略和允许办法/index.html","4f4c49ce4d4b7e7f40dc0ca83c3de65c"],["/2024/06/生财有术第七期最新资料大合集（转）/index.html","4502b9d9c2ac58bd252282ce9daf4898"],["/2024/08/“做自己的牛马”-我为什么尝试自由职业/index.html","dbd69e4bb907d76896fc51a3dd470883"],["/2024/09/不依赖软件，教你用程序员的方法批量删除公众号后台的草稿/index.html","28326777dabad5a2f6d728c0873a4998"],["/2024/09/家委会示范的家长会感言长这样/index.html","48cb81354e595709266bab9c9ee39d20"],["/2024/09/比分预测命中率30-50%，我是如何做到每天分析全部北单场次的/index.html","2ca58319828299cfa0416ac2f2474c6e"],["/2024/09/股价挖掘机/index.html","dc914481e66889dbc863bd279736c890"],["/2024/10/为什么95%的创作者失败？揭秘成功者的思维模式/index.html","b9a378055d959328ac46ded026fd1142"],["/2024/10/提高说服力的方法：从认同到成交/index.html","00ff6cf689e1d37f5b0b7366235f76c2"],["/2024/10/鸿蒙原生应用开发学习笔记/index.html","f53f2d7bd711cdb5d1c36f60a4b74312"],["/2024/11/Sequoia 15  Sonoma 14  Ventura 13  Monterey 12  Big Sur 11 比较/index.html","09135faa613cbd00f470c73d00675035"],["/2024/11/ahk报错说明/index.html","2429e00eb0d88814779104fbebcabfd1"],["/2024/11/宝塔面板只保留最近3个备份文件的方法/index.html","8ab636e8ae1897281c3d3562e1aa65fe"],["/2024/11/尚书苑单间业主直租｜福田梅林｜深圳地铁九号线旁/index.html","72fbed568f800daf8ddd6ad418707a06"],["/2024/11/常见App的AppID，用于黄白助手小尾巴/index.html","44e603d1a9da37c9b154734a9c8061b4"],["/2024/11/打不过就加入，挑战不写一行代码，用AI研发辅助工具 ，手撸一个App/index.html","7e00e0488cc436c53285f00f56feecff"],["/2024/11/排版工具一键 “复制到公众号” 的技术实现原理/index.html","05e8f2264de1d8303063dfa09eea5d3a"],["/2024/11/超详细股票开户教程：手把手教你开到最低手续费的券商/index.html","242c3e68538107bf88734cd864d35b67"],["/2024/12/HarmonyOS开发必读：模拟器配置全攻略和真机差异/index.html","687c621b71aa7e0d7e0baf3997e48727"],["/2024/12/HarmonyOS模拟器功能支持清单：开发者必读指南/index.html","3809eac6239863552aa4d194158e607c"],["/2024/12/HarmonyOS深色模式适配/index.html","5096091a5b068f324e658a63ce8bb227"],["/2024/12/《圣诞夜的魔法》歌词生成prompt/index.html","f834746d6b5491b33e29b988990ad9c2"],["/2024/12/【鸿蒙应用】SOS手电筒：手机上的智能照明助手/index.html","0829a6a630fa83c5f879c553774d3bef"],["/2024/12/【鸿蒙应用】体感记录：您的私人健康管家/index.html","3bdcbd79c15597af19d4bb78b32a7e13"],["/2024/12/【鸿蒙应用】极简跑马灯：让你的手机秒变LED显示屏/index.html","2674bdfc7c02d8a53bf081e873f3ee75"],["/2024/12/【鸿蒙应用】艾莎画板：释放你的创意画板/index.html","29e71e1efa7e6e65e4e19bc7367f3bd2"],["/2024/12/【鸿蒙应用】跨时空小程序AppID查询：您的智能小程序探索助手/index.html","3f2f42ebaeb813f3272ca6a693b57323"],["/2024/12/四天开发5个鸿蒙原生应用，我是如何做到的？/index.html","39590b49a4d7282242a0a6dda46b0db5"],["/2024/12/我的第一个款鸿蒙应用上线了/index.html","9245a734d9752c4d773c031f3ce7ec0e"],["/2024/12/进鸿蒙新应用体验群，不定期红包雨/index.html","31a3363be2512ae03ac0588dfee8d63b"],["/2025/01/Appid查询公众号的方法，超简单，小白都会/index.html","ad35155c85e59a769aa0615a6219112d"],["/2025/01/Appid查询公众号的方法：小白也能轻松上手/index.html","ae99465aa4172163c71a6b3722586cb2"],["/2025/01/SyncMeIn：让跨设备登录同步更简单、更安全/index.html","075cd7651b14ca5110b0320105b437e0"],["/2025/01/nginx日志分析之awk命令/index.html","263515037d6f69e4573412d912c94cd7"],["/2025/01/浏览器多设备同步Cookie登录神器教程/index.html","53b07d4138b2ee5a2f59bbf1815f4870"],["/2025/01/跨设备同步浏览器状态从未如此简单/index.html","2d59156f5d2e39b4ef76c58015059fe9"],["/2025/02/SyncMeIn：RPA自动化中 账户登录态管理好帮手/index.html","a26f5a1cd1000486cc6b49b869ce2267"],["/2025/02/从盲目投放到精准制导：复盘ROI提升300%的流量溯源实战案例/index.html","08552fa84df8d86215c964a969c69200"],["/2025/02/如何让宿主机流量通过Docker中的OpenVPN容器转发/index.html","f3bdf6dbb49feb8b5ab3500c5df5a287"],["/2025/02/对mysql数据表增加 created_at 和 updated_at列，自动记录创建和更新时间，性能最优的做法是什么？/index.html","d17d96e5e763e800b5672cc1c0234ca4"],["/2025/03/SyncMeIn：cookie注入、清除和获取/index.html","9c585dbf2056b415e2000bb94279c3d2"],["/2025/03/手机和PC端同步cookie详细步骤/index.html","0416cc256e43eca960ffc32a1f3bea43"],["/2025/03/最强嘴替｜Mac上的划词、截屏评论软/index.html","0a8c29b90465913dd3eaf1c894bef2c6"],["/archives/index.html","23f73d35f8bd192ed84397cfa8529e10"],["/categories/index.html","42c414510e81da3b29ea19acc158b892"],["/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["/css/main.css","202065840b4fde1e6e890c5fdf9c5c1f"],["/images/Kainy.jpg","11e2e3d73204239b72b896752ccf4eb2"],["/images/alipay.png","aa88f6bd1b43c00cc81e558a253add56"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","bfe261f101725ead9363904cfcd95968"],["/images/card.jpg","9d72942625f930362ef4062809e0d4a6"],["/images/cc-by-nc-nd.png","2af8bf201f79b1f1fc195f604d43cbf6"],["/images/cc-by-nc-sa.png","4e0872b10081d05b0d7d63cd26fca54d"],["/images/cc-by-nc.png","09b5650831578abc1e5db4afeea6be8f"],["/images/cc-by-nd.png","dfdf60c5e4cafa1bd02aff9cd8c90d6a"],["/images/cc-by-sa.png","80b6e6d2183d30c62b45253572bd73d9"],["/images/cc-by.png","79a9d67968e0a21bf923d86531b7d4b2"],["/images/cc-zero.png","8f676600608c3399cfafd159480f20a5"],["/images/footer.png","60aae96851898f99c0756eed845e825e"],["/images/header-darling4.jpg","d1807c72ae097bf29d57d049dc237e28"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/scroll.png","b0605bbb765779aa0d422643acfdc3bf"],["/images/searchicon.png","673a3818780dd7816eeda7a32639a935"],["/images/wechatpay.png","7773e0b7ccf08ca5d42f30a8f25c5c08"],["/index.html","5bdc35a673a46bde0c6c8f204f4814f3"],["/js/jquery.fancybox.min.js","533f06b6ddf0445efedce3e5e040316c"],["/js/sagiri.min.js","7b38c8032f046d80edba5b1367c135d8"],["/search.xml","7c4d9ee7d0dd59483eda8ec99fd6acec"],["/tags/index.html","e45a796aee6780b5c9876c9d1bc665bf"],["/友链申请/index.html","0e258ee3127fc9a0d015386667d6e0c5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/./];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fastly.jsdelivr.net","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.loli.net","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.loli.net","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"gstatic.loli.net","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"a.disquscdn.com","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"c.disquscdn.com","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"uploads.disquscdn.com","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"media.disquscdn.com","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"referrer.disquscdn.com","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.networkOnly, {"origin":"www.google-analytics.com","cacheableResponse":{"statuses":[0,200]}});
toolbox.router.get("/*", toolbox.networkOnly, {"origin":"ssl.google-analytics.com","cacheableResponse":{"statuses":[0,200]}});




