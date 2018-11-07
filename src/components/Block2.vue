<template>
    <div class="wrapper">
        <div class="tlt-box" v-if="newGoods">
            <dev class="tlt tlt-new">{{head.tlt}}</dev>
            <dev class="btn-all btn-new" @click="jumpWeb(head.url)">查看全部 ></dev>
            <image class="tlt-image" resize="cover" src="http://doc.zwwill.com/yanxuan/imgs/bg-new.png" />
        </div>
        <div class="tlt-box" v-else-if="hotGoods">
            <dev class="tlt tlt-hot">{{head.tlt}}</dev>
            <dev class="btn-all btn-hot" @click="jumpWeb(head.url)">查看全部 ></dev>
            <image class="tlt-image" resize="cover" src="http://doc.zwwill.com/yanxuan/imgs/bg-hot.png" />
        </div>
        <div class="box" scroll-direction="horizontal" show-scrollbar=false>
            <div class="i-good" v-for="(i,index) in goods" :key="index">
                <image class="gd-img" resize="cover" :src="i.img" />
                <dev class="gd-tlt">{{i.tlt}}</dev>
                <dev class="gd-info">{{i.info}}</dev>
                <dev class="gd-price">¥{{i.price}}</dev>
            </div>
            <div class="i-good" v-if="hasMore">
                <dev class="gd-more">查看全部</dev>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        padding-bottom: 6rpx;
    }
    .tlt-box{
        position: relative;
        height: 260rpx;
        width: 750rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .tlt{
        margin-top: 76rpx;
        text-align: center;
        font-size: 34rpx;
        color:#8BA0B6;
        z-index:1;
    }
    .tlt-hot{
        color:#B4A078;
    }
    .btn-all{
        text-align: center;
        font-size: 26rpx;
        width: 220rpx;
        padding: 10rpx;
        margin-top: 20rpx;
        color:#8BA0B6;
        border-radius: 4rpx;
        background-color: #D8E5F1;
        z-index:1;
    }
    .btn-hot{
        color:#B4A078;
        background-color: #F4E9CB;
    }
    .tlt-image{
        position: absolute;
        top:0;
        left: 0;
        height:100%;
        width:100%;
    }
    .box{
        display:flex;
        overflow-x:scroll;
        width: 750rpx;
        flex-direction: row;
        padding-top: 30rpx;
        padding-bottom: 30rpx;
        padding-left: 15rpx;
        padding-right: 15rpx;
        box-sizing: border-box;
    }
    .i-good{
        padding-left: 15rpx;
        padding-right: 15rpx;
    }
    .gd-img{
        height: 286rpx;
        width: 286rpx;
        background-color: #f4f4f4;
    }
    .gd-tlt{
        font-size: 28rpx;
        color:#333;
        width: 286rpx;
        margin-top: 16rpx;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-info{
        display: block;
        font-size: 24rpx;
        width: 286rpx;
        margin-top: 8rpx;
        color:#7f7f7f;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-price{
        font-size: 28rpx;
        width: 286rpx;
        margin-top: 16rpx;
        color:#b4282d;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-more{
        display: block;
        box-sizing: border-box;
        height: 286rpx;
        width: 286rpx;
        font-size: 28rpx;
        line-height: 40rpx;
        padding-top: 120rpx;
        padding-bottom: 120rpx;
        border: solid 6rpx #f4f4f4;
        text-align: center;
    }
</style>
<script>

    export default {
        props:["newGoods","hotGoods","head","hasMore","goods"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
            }
        }
    }
</script>