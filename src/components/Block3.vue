<template>
    <div class="wrapper">
        <div class="tlt">猜你喜欢</div>
        <div class="gb-box">
            <div class="i-gd" v-for="(i,index) in goods"  @click="jumpWeb(i.url)" :key="index">
                <image class="gd-img" resize="cover" :src="i.img" />
                <div class="gd-info">{{i.info}}</div>
                <div class="gd-tlt">{{i.tlt}}</div>
                <div class="gd-price">¥{{i.price}}</div>
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
        padding-bottom: 10rpx;
        padding-top: 26rpx;
        width: 750rpx;
    }
    .tlt{
        text-align: center;
        color:#333;
        width: 750rpx;
        padding: 10rpx;
        font-size: 30rpx;
        box-sizing: border-box;
    }
    .gb-box{
        padding: 16rpx;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .i-gd{
        width: 350rpx;
        height: 510rpx;
        margin-bottom: 20rpx;
    }
    .gd-img{
        display:block;
        width: 350rpx;
        height: 350rpx;
        background-color: #f4f4f4;
    }

    .gd-tlt{
        font-size: 28rpx;
        color:#333;
        width: 350rpx;
        margin-top: 15rpx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-info{
        display: block;
        box-sizing: border-box;
        font-size: 28rpx;
        width: 350rpx;
        height: 65rpx;
        padding-left: 10rpx;
        padding-right: 10rpx;
        padding-top: 15rpx;
        padding-bottom: 15rpx;
        color:#9F8A60;
        background-color: #F1ECE2;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .gd-price{
        font-size: 28rpx;
        width: 350rpx;
        margin-top: 10rpx;
        color:#b4282d;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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