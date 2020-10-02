// creates dynamic keyframes for infinity banner based on number of images included in each row
var imagesTop = document.getElementById('top').childNodes;
var imagesBot= document.getElementById('bottom').childNodes;
var bannerLengthTop = 0;
var bannerLengthBot = 0;

for(let i=0; i < (imagesTop.length/2); i++) {
    if (imagesTop[i].nodeName.toLowerCase() == 'img') {
        console.log(imagesTop[i].src + ' ' + imagesTop[i].clientWidth);
        bannerLengthTop -= (imagesTop[i].clientWidth - 4);
    }
}

for(let i=0; i < (imagesBot.length/2); i++) {
    if (imagesBot[i].nodeName.toLowerCase() == 'img') {
        console.log(imagesBot[i].clientWidth);
        bannerLengthBot -= (imagesTop[i].clientWidth - 4);
    }
}

var styleTop = document.createElement('style');
var styleBot = document.createElement('style');

var keyFramesTop = '\
@keyframes infinityBannerTop {\
    0% {\
        transform: translateX(0);\
    }\
    100% {\
        transform: translateX(TRANSLATE_DISTANCE);\
    }\
}\'';

var keyFramesBot = '\
@keyframes infinityBannerBot {\
    0% {\
        transform: translateX(0);\
    }\
    100% {\
        transform: translateX(TRANSLATE_DISTANCE);\
    }\
}\'';

keyFramesTop = keyFramesTop.replace(/TRANSLATE_DISTANCE/g, bannerLengthTop + "px");
keyFramesBot = keyFramesBot.replace(/TRANSLATE_DISTANCE/g, bannerLengthBot + "px");


styleTop.innerHTML = keyFramesTop;
styleBot.innerHTML = keyFramesBot;
document.getElementsByTagName('head')[0].appendChild(styleTop);
document.getElementsByTagName('head')[0].appendChild(styleBot);

console.log(keyFramesTop);
console.log(keyFramesBot);
