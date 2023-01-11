'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8823b8c9d0ac6836e200e36c243393b",
"index.html": "da5d659177f8558b050b8e1be2795e68",
"/": "da5d659177f8558b050b8e1be2795e68",
"loader.css": "5a44a4968d4b1ce8d863e621af99179a",
"main.dart.js": "206b8008b1ed316e8e1ff6852b646f63",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "239df3cbbf58b3c7e0564ce2aee78302",
"icons/Icon-192.png": "d893ce81eeb26bff2f852421839fc927",
"icons/Icon-maskable-192.png": "d893ce81eeb26bff2f852421839fc927",
"icons/Icon-maskable-512.png": "2c0bc42f0183cf447e35d778dc6cfcd9",
"icons/Icon-512.png": "2c0bc42f0183cf447e35d778dc6cfcd9",
"manifest.json": "015975afbd945dea80a22c3f1a96d7cc",
".git/config": "060a780c3d6e7c9daae67d7eee82b7f2",
".git/objects/68/44fb325c81b43e8d61551c1bf4e37ad33f04c7": "4ec9a28e53e09d74d83adc6eea94cf7d",
".git/objects/6f/4bd58663e223af200e6219a298e7f19f9f845a": "2afd8debf4b435ad4d71865e97731a12",
".git/objects/9b/a716ca6a72876e22febe99d3d949cf7db5f9c0": "16faf82768165981fdfb1574aee35e31",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/56/912c7e8c25ad29d12c6f41dbdfba920fabdd9f": "061ff5eda2b4e2c52a0292a2659d89d1",
".git/objects/51/5faf596897439c3cc3bb8fe4a6efded10f420f": "8f073c763646cd9970a1f17e554314f2",
".git/objects/0b/b3899e322e58c54bd79c60310e7830e7ef5125": "66ccaeb756314d1823cb027b146094ad",
".git/objects/0b/7d79fa80d8c19397eca2426873487dc918ac0e": "b510a9c2b5d05ef2265e0396a6af2cf9",
".git/objects/60/92389fea731753fd223fa38e448a2bd7164107": "3fa07602cdbb6785737c5d3ccf66d90a",
".git/objects/60/ba5eeea2d233c0915f7683e1a01f2a4fdfcfcf": "f480587acc53fd46d59b160973d04dd5",
".git/objects/34/2dfe400a9abf0f867eacb5510ac78db6e1b274": "3ef1c62728284b0946f1d29f52aad55c",
".git/objects/5a/985e36dec1ccffaff4d7472f2bb016a33365b7": "12f9802c35e25c771f8f948901045bdd",
".git/objects/9c/e62d7e4f2751e9625b15e190f9dc6c11e2673d": "afcf4ef1f42027a7db244ee31e3e9648",
".git/objects/9c/c5f29d5a69a932f76c9f30fe5c2ba2fc29da56": "eec5c63e76ce2527d87411c6e7371b6a",
".git/objects/ac/cfe73cd1452ef7099cb5ff8455129768b2f4cf": "832a9cf9f9c526f871ae16f12255edf4",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/d7/c4ec6694540c2f4d0ffa02d1463b3d5029c082": "f0b76e96081e398b9ec8dcbdd08fb0f7",
".git/objects/be/07a7d0974fb280f83534014fa97e9733b93d1c": "eab6d870705230a9abc244f6d3564a05",
".git/objects/df/58bb599ba55a3abf1343b38695c4be0d0b3e42": "7a8e61400e82030816019606eec54c47",
".git/objects/b4/83ccacd3b66c66ba7c1a4f3775b7022be3c8a8": "06b9aaaa6ba8924a770caf1cbebd06bf",
".git/objects/a5/da7d1af722a879d9d02daf3852ca37ac802417": "f168f699ad9fc8337a63190bf6ee7450",
".git/objects/d1/90ad23717eebd2c0565016fb675b8edd02567c": "fd0cf0a3c04946e1652d2e9b9dcc6840",
".git/objects/d8/5826344867c9d3436e4c821ba32f9f224c75a1": "573e9ed868000f51266564b2d274566e",
".git/objects/d8/c25a443a135308f4e75e5f2af5d06b0d2d2e8d": "7a8d41466006f7b1992a334599300442",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/d6487b812db0ac7e44c5d6cf3a55de1487eec0": "aa6165e4701baa6ad40db826b60d2473",
".git/objects/fd/aefb892d7c52351969f8518ba3da0922fcf034": "0fe323e98847df7a69db51a92da3b7b2",
".git/objects/f2/d4fc1e0e19eeb103c9a98cfda0c4b8e2570795": "748be10acdca6a60a0f86c3202c6c5a4",
".git/objects/e3/6c4c2ba63d2c2495f5f76abbdc5c91ac051afc": "8d03fa35f85851b04ee1b6c4670482dc",
".git/objects/e4/57b710faeaac534aefc932aa5718851db4d3b0": "36b6195679fd566b5de4ad7ca2e5bf69",
".git/objects/c6/e0f854aed0cb28afe017fd7ef30abd3c4614a3": "1333ee4e3b80f2960af68ef19a1f0d2b",
".git/objects/20/491fa729ea5e724ec0e8707846f06f4c1921f8": "a262cb5198046d1bea8be19e1067abda",
".git/objects/27/cbdb4bdf1a5c18cda2722681acfb7a6f5c4a7f": "eea044adad9cd904f085e5cd104c0c6d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/7ac10bc5b660836d18b5715aaaf5450b671743": "ca504a1f8a258075f718c49332e637a3",
".git/objects/74/7233ee9b2f622c8dc814e2387f265f4a2856c0": "9d4792d3e5bb6fd9fbc5e24ff33663b9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1a/378213f245675ae2a95db02f8a67abb9bcc235": "ac932e153892e096c9042da9dd029d0c",
".git/objects/7b/16067757a0cf410019aa2b38c4b3fb43c455bd": "355c5f4fe806f862705d6b3b80f5e11b",
".git/objects/7b/37fc34b3b0930264b0e42d86582a1a8627c8e7": "713f701ed980142d27fd0d338611a600",
".git/objects/8a/58850b4f6c582143121322083c5612e7cc19f0": "c2c0597e2bb8d07a5c5e9723769fbf05",
".git/objects/19/fbf05851ab00a9eb1d0b384f46c31a38f18e96": "eae2b31f0de34541b11339bf72fdcc62",
".git/objects/19/b80c933792e18cade8f86006e6d0e2b9bb6ea0": "9c799db4691e3873814d8acec4d4e1b8",
".git/objects/19/9913c092daccb717e51b9c63f6414e900e7487": "6c069e02d0db3a6ab49f24ef8ae8eacd",
".git/objects/26/22cd46c35b70bd2e305ad3e3059abd4d6d93c2": "419b279a029a16da35022c0b410f4880",
".git/objects/26/998fa1f2ba861ad058979827d56c393adeeea8": "ae8e050308c54a04c522d42270f59e5d",
".git/objects/21/36a34a9e1392dfb688a5a06f252fcddbf47129": "e27879bef0cfea01496ec6f9efa12136",
".git/objects/4d/77afb6a71f66c7497110a919d17b167d2ed2a6": "5fc51091e4082d5e208946eedf695b54",
".git/objects/72/da677d66270212a5298d9bb6acbda20e4a1730": "8ae71f20faa8a1bf3fdfb60b38d69bdf",
".git/objects/43/22f4f4c89195807c549e5589980fd2f3fcfcc5": "088ce37dd779a491b44b7c8a1570ab1f",
".git/objects/9f/ef14682f8043902f07fbbe0a033e30a0ec3392": "127154a79f860268c05984a41d2bd605",
".git/objects/00/4c234a6af0b2b63ccb829eaaead5d5d0905e8c": "ecd6f60e88293390d3ea17771eee20a7",
".git/objects/6e/26aab84236c2447fa9381dd6d97fc3797c4ea5": "51a6787275028abbbf39dd2c07d76cd7",
".git/objects/9a/990d9d28d1db19808c339d41956e8f1760c4f8": "1210d5320f68c4e77af8d86c933df988",
".git/objects/09/99a82d32bf4564f99df0102881b3962d5a01fc": "f85bfb26e5262f8b84c53f6b34fd2758",
".git/objects/5d/b940437c8b501100735b946b76451519fcf505": "a2fcf4577cc5a68b644d31ba94838f8b",
".git/objects/5d/f0f32d3bc170f546075a7a86e6f84978c545da": "805f74c7b11b685563799b5453c8f98a",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/3a/950ccad32e3541d986cf4bae2a3f4cf36cdd66": "49ac06d13b4f04477b9c40076449467b",
".git/objects/98/f0ed89ad6140bfd1259119517280dc231c251f": "035f21bf7fe00ecb698f8c34e4036814",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/99/eaafabb26a6c6dd5e88b8da5c61d9526254e6a": "c176b4d20395e7d6d8330c406c3467c4",
".git/objects/55/c19dbaa58019af29be9df131c752574a0c0efa": "de5b205985f02b26885ab5a92ac518fe",
".git/objects/55/81bfba77a61e8b0a7bcd1500df857fc3476f4a": "41735f85b7ea961c35c8526dce0059c1",
".git/objects/97/ebb3f6446fff917517f1faec3e13b0fa79e3c4": "ad184f582c7923de1ee0c91932d84a5f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/63/b59cb7e06ca2962732e1ba9d921fa29c0ec3c8": "36018c5ac4a67e9035c7afc09495f066",
".git/objects/0a/42d6f77b5e4630536debe32dd38cab194f13e5": "9e9b4335df293b42bcc5728bd1048a47",
".git/objects/d3/e8ece04c699387e171111ccf69a01aab7115d2": "6675c088ece83c93b8754ede99b24966",
".git/objects/d4/bea2aeb4d0924c88a316edaaee4e6205c03c0c": "8cacda5ee323b0fbaffe6c052c53500f",
".git/objects/a7/b3e6a5dd9b017754fbaa0a711d8f6255278343": "b6a9edfb864d565dc467369d6e78edcc",
".git/objects/a9/e93a091e0376221b6c26d72e0a3f6f7131eb6f": "2c33b6c87e8435c70f77f565dd334368",
".git/objects/d2/447fe7cc94cb8fae2726e486cc712e87a476a3": "ab4d800a5efbddb6966fefe1c6b3da05",
".git/objects/af/9adb0688733c5d31fbb434629fa9e35d869940": "b47348f2eeff07d81676b1888676c65f",
".git/objects/b7/be04c90f0a850234d2351f2b6d472b23cc37cb": "dcec277346aeee8282373c88874bb4b1",
".git/objects/a8/2bd4e86d428e6a07e833e526c6acb9ac6f0b05": "d3bcf7bb920317c37abfe431ec154968",
".git/objects/a8/32cb1c9045b0383e6f0a94276ef40d6db842a4": "5b09a706d6fc20b013b5391fb8092a41",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/d20219448493ecb088de73d7597dea806bf1a4": "4599974156281774bdfac1294a06d4a8",
".git/objects/c3/58b9f00c26a32614d7e2ae21619aacb16e1d73": "636790d76a024646cefd16b6437b56c9",
".git/objects/c3/f84072ec59b76a3a03efabbdc5c3429909dc0f": "0714f0ef3752b1466e26b0a7cc537d7d",
".git/objects/e1/0f1ce573a542d4140e060dc0de1ebccb109c41": "e3ced6de21e3aa9bbfd7a8e707188203",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/5974ec07b739c6eba8612e9e77fb7bc2b5a4d6": "3b88e7d6d0bc0f378aaf83305943dda8",
".git/objects/f9/3c6c5449d01a3bf9eb046429feea0758575dd6": "cc28ad1eab2e96e1e5df95fc4b094f87",
".git/objects/e8/b573c943cd6082da34bd2c7cb3a2a3f28c59f4": "55de4cf0ace9f20797523bc5d353f936",
".git/objects/c5/10cf714cc4b34c01d5e37ef0e7f723c73b5dfe": "81c156e645fdcb0c6a8ece3819848723",
".git/objects/c2/62e31bfefe1093bc2597690f2b07021e6e04db": "a3de42b61bac3b73ce4d665b6b28ee0c",
".git/objects/f6/7b9c4f87e8b0a9bd5766307ec8d4ceffdd7864": "d2d01d5c9b3e6b60da1f691c02269525",
".git/objects/f1/98eb912b54a8e7270a5d6362691330a633483c": "b5ea0f094854981dc8d67bead9a18a8d",
".git/objects/ce/f8a03fa2bcbfb58e678d54f1c7875409976ab4": "a9e7306ca9775a05a7a0b526666cf5f3",
".git/objects/e0/d2c6e0499968b6bca2b58580ac4da12b176094": "913ca24c6014c0a0a48b17252902ce36",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/2c/acfbf1ec0509e3ca957a65ea1435a742bb2570": "ff4876cff586f5c26feac68d7f9e542e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/70/4689b066c1b85382a5991d6a7c090f733a9c61": "e99b13c50cae159e1b2cde8bb426ae09",
".git/objects/8c/2fc1efa48902ae53f29389a341434fe82713d3": "30f23763e6c79166295179284278e267",
".git/objects/85/764fc19c978baed747570e439408eb5ff6ac41": "2ac1aae87dc629954ec8a6838d7ac6a0",
".git/objects/85/507f847b19cf5c0883c6ff0e55b3f07487404d": "ba786caa81dfe43d773e39c7f22023a9",
".git/objects/71/94b2c0fd195d3d014d555b3da86313a0e22802": "268463d7e47595327a4586dbdaae9785",
".git/objects/49/cffead965af153651b22a76a4e9bedb94054bd": "179e1dc995b246acdea93b26fa0f9a9f",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/47/6320134f71f11eb05b4fdd06e0503e2e964822": "b6b3405392f1b0297582353525bc12a1",
".git/objects/8b/c92fd0fccdcfb1fb551138d10cbe38cc5bc791": "392bb43919d79d337ddf0b2fb02ee533",
".git/objects/13/892a9ec8fc1cfd997a5f11963b22c2069abda3": "f47a4f4e6f95f742f99d5c6b0226a116",
".git/objects/8e/a11d8e607b81527810a1150664731894b1f438": "69219afd7a355f74c0f4634a02b8b245",
".git/objects/22/ec2c6c40f6500e05126b3c1403743374ebb7da": "a4499c089974b21b7bab872566c83f40",
".git/HEAD": "361ccd0a2d5c154df54ccc7ff4e08974",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0765b6e148ccc556fbb8406a61899a20",
".git/logs/refs/heads/main2": "a478a936309dd9aa3b73183413a14c8d",
".git/logs/refs/heads/main": "850643f5655ae88f73d55dd74ef36d1b",
".git/logs/refs/remotes/webdeploy/main2": "47b286d2fae27cdcbc174268bcee9eb4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main2": "8d507cd2bb6d8b9992c378bfab989bec",
".git/refs/heads/main": "564566c91b5a7823ce88d14d2720962b",
".git/refs/remotes/webdeploy/main2": "8d507cd2bb6d8b9992c378bfab989bec",
".git/index": "0eac7fb115044a99aa59395cac94d54b",
".git/COMMIT_EDITMSG": "21be940d7d015a0ff148d7ee9cb3c0d6",
"assets/AssetManifest.json": "2d8883c34c88ac27627a4afa06dc2fcd",
"assets/NOTICES": "dbf92f692a40db6ed65b4386368bbb11",
"assets/FontManifest.json": "f515622b0d1572dbcdfd44881cf54eac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "9317b7de046f228474e7892feed79e49",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/image-rectangle.svg": "39119cedba3de7f2e74bbe786b223989",
"assets/assets/svg/search.svg": "e02d86b4136f506739e7cb538872be8e",
"assets/assets/svg/direction-left.svg": "4903661c1f4ed9b3452fd220381b46c7",
"assets/assets/svg/users1.svg": "253be19a129d6f2df7570bca285fbe8b",
"assets/assets/svg/user.svg": "806e22cbc23568f52f16f08bf397ae8a",
"assets/assets/svg/file-minus.svg": "25fb137201c357c1cd20b41756d504d6",
"assets/assets/svg/gmail.svg": "75083595e7fe8591e95489c6921916aa",
"assets/assets/svg/home.svg": "6b053b5dd386d8717557ce59efa8e26c",
"assets/assets/svg/more-horizontal.svg": "1682197368eb221f6479e00a7e1be78c",
"assets/assets/svg/chart-histogram.svg": "04fcd79a7d57c43d18c28239d51517f4",
"assets/assets/svg/star-s-fill.svg": "8c5707ba9851d432a34a9826bbda32fe",
"assets/assets/svg/lock.svg": "9f2091fdc1741d82d98cf91d7fd9ecdc",
"assets/assets/svg/app_icon.svg": "923e6819df698880fe26434a99dcf9e1",
"assets/assets/svg/instagram.svg": "f313bea6e5417079a5c327a00c545251",
"assets/assets/svg/apple_logo.svg": "023c04f1fabcd8051159f626cd03218d",
"assets/assets/svg/users02.svg": "9464aa34cca9d4c79db4f999717ecc2c",
"assets/assets/svg/login_bg.svg": "58124a61806e48cc86737160656d240b",
"assets/assets/svg/hide1.svg": "01815f80df92448cf9ffe984370c4581",
"assets/assets/svg/tick.svg": "4ee13f6b369ab28558d0d2b8e5be5467",
"assets/assets/svg/flag.svg": "078214e9e793b544de248c2a3efb58df",
"assets/assets/svg/arrow_sort.svg": "cc4f01cb038a98970fd03a63da8f4d4e",
"assets/assets/svg/wifi.svg": "710f8790a737e001b2634e87ae3393e8",
"assets/assets/svg/Add.svg": "52da33fbaa031dab068672b7ca3eacab",
"assets/assets/svg/logo_with_text.svg": "fd1e4a05b97b454af0e62acc1216b19f",
"assets/assets/svg/navigation.svg": "201c072dc0b416e1f0f30a647c184771",
"assets/assets/svg/setting.svg": "c0c0cc8bd5c4feefb23f659c00c26e79",
"assets/assets/svg/chat.svg": "6b6f0eb89a3850673b267f18fc448799",
"assets/assets/svg/notification.svg": "82b887f3382ec6311934192cc763f539",
"assets/assets/svg/paypal.svg": "0fecb6f960d8beb890700ab084265acc",
"assets/assets/svg/speaker.svg": "cef51f4cefe872af678d853411c8c2dd",
"assets/assets/svg/facebook.svg": "2f4e4e13a85f1cfd7d2c9832e0d621b3",
"assets/assets/svg/security.svg": "6fc08f5268f31ef87a15dd1283e8d6d4",
"assets/assets/svg/google.svg": "7286ff769c375662c0fbad804ed7c3dd",
"assets/assets/svg/attachment.svg": "cd5d1234c8e48665b73a3d8f7d738259",
"assets/assets/svg/trash.svg": "13794130585d3f054598266211f9a6df",
"assets/assets/svg/edit.svg": "8cb6a8be95dd3bf3d73ce199833811d1",
"assets/assets/svg/user-circle.svg": "eb603da50634754855bb0f5d548f5316",
"assets/assets/svg/facebook_icon.svg": "59b9572202cb539280492af7e53e8a17",
"assets/assets/svg/Call.svg": "b5743c3329921b2eb31a6f197633417a",
"assets/assets/svg/location.svg": "678362111081e435e222d43d1d5ff441",
"assets/assets/svg/more-vertical.svg": "8335432cee3ec41893400e5a604a7982",
"assets/assets/svg/direction-down.svg": "9e4344344be702de9e5f91e54aa6e5b3",
"assets/assets/svg/view.svg": "0a3a2e0363e1b00f0688239145f35dbe",
"assets/assets/svg/filter.svg": "50dda601ccb5c87640cc992a2849953f",
"assets/assets/svg/sendMessageChat.svg": "ae716413bbcd4a04ca1b8a88128a33ee",
"assets/assets/svg/wave.svg": "1852857996840e3e792561f65350fc31",
"assets/assets/svg/invisible.svg": "4e79a70ef141a1fc70f230b2810b00e9",
"assets/assets/svg/upload.svg": "1ad1f5e15d2c897ddd134ba377d270fe",
"assets/assets/svg/zoomout.svg": "73745507176f14aa277689599f57e0a1",
"assets/assets/svg/mediaAddChat.svg": "47b57d480293290dfce42f35e148d15e",
"assets/assets/svg/call-hospital.svg": "62364da28fa6a1af86cd2b43d4e74ece",
"assets/assets/svg/menu.svg": "2ad534e03c9e9dccb15c41959eaba246",
"assets/assets/svg/doublebed.svg": "e5d15283d28a7da0c364e1d6ee211427",
"assets/assets/icons/ScoutyHyde.ttf": "9d70feb6f92f36f230a0cc306de42689",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
