<template>
    <div class="wrapper"  @click="jumpWeb(url)">
        <div class="auther-box">
            <image class="auther-img" resize="cover" :src="article.autherImg" />
            <text class="auther-name">{{article.auther}}</text>
        </div>
        <div class="img-box">
            <template v-if="typeof article.img == 'string'">
                <image class="main-img" resize="cover" :src="article.img" />
            </template>
            <template v-else-if="typeof article.img == 'object' && article.img.length>=3">
                <image class="main-img" resize="cover" :src="article.img[0]" />
                <div class="sub-imgs-box">
                    <image class="sub-img" resize="cover" :src="article.img[1]" />
                    <image class="sub-img" resize="cover" :src="article.img[2]" />
                </div>
            </template>
        </div>
        <div class="tlt-box">
            <text class="tlt">{{article.tlt}}</text>
            <text class="price" v-if="article.price">{{article.price}}元起</text>
        </div>
        <text class="info">{{article.info}}</text>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding-top: 15rpx;
        padding-bottom: 15rpx;
    }
    .auther-box{
        height: 75rpx;
        padding-top: 10rpx;
        padding-left: 25rpx;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .auther-img{
        height: 58rpx;
        width: 58rpx;
        border-radius: 58rpx;
    }
    .auther-name{
        flex:1;
        font-size: 26rpx;
        height: 58rpx;
        padding-left: 20rpx;
        padding-top: 10rpx;
    }
    .img-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .main-img{
        flex: 1;
        height: 380rpx;
    }
    .sub-imgs-box{
        width: 190rpx;
        height: 380rpx;
    }
    .sub-img{
        height: 188rpx;
        width: 190rpx;
        margin-left: 3rpx;
        margin-bottom: 3rpx;
    }
    .tlt-box{
        height: 80rpx;
        padding: 20rpx;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .tlt{
        font-size: 34rpx;
        flex: 1;
        overflow: hidden;
        lines:1;
        text-overflow: ellipsis;
    }
    .price{
        font-size: 34rpx;
        color:#b4282d;
        padding-left: 10rpx;

    }
    .info{
        font-size: 26rpx;
        padding-left: 20rpx;
        padding-right: 20rpx;
        overflow: hidden;
        lines:2;
        text-overflow: ellipsis;
        color:#666;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:["article","url"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http://m.you.163.com/topic/v1/pub/XLymbwEO0J.html';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>