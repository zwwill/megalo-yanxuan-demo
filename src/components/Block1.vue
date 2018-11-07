<template>
    <div class="wrapper">
        <div class="tlt iconfont">{{title}} &#xe74b;</div>
        <div class="box">
            <div class="box-item" v-for="(i,index) in items" @click="jumpWeb(i.url)" :key="index">
                <image class="i-image" resize="cover" :src="i.bg" />
                <div class="i-name">{{i.name}}</div>
                <div class="i-price"><div class="i-price-n">{{i.price}}</div><div class="i-price-t">元起</div></div>
                <div class="i-state" v-if="i.state">{{i.state}}</div>
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
    .tlt{
        text-align: center;
        font-size: 30rpx;
        margin-top: 30rpx;
        margin-bottom: 26rpx;
        color:#333;
    }
    .box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 750rpx;
    }
    .box-item{
        position: relative;
        box-sizing: border-box;
        width: 350rpx;
        height: 226rpx;
        margin: 5rpx;
        padding: 20rpx;
        background-color: #efefef;
    }
    .i-name{
        position: relative;
        color:#333;
        font-size: 28rpx;
        width: 300rpx;
    }
    .i-price{
        position: relative;
        margin-top: 10rpx;
        display: flex;
        flex-direction: row;
    }
    .i-price-n{
        color:#333;
        font-size: 36rpx;
    }
    .i-price-t{
        color:#333;
        font-size: 24rpx;
        margin-top: 12rpx;
    }
    .i-state{
        position: relative;
        font-size: 20rpx;
        color:#b8a989;
        width: 70rpx;
        margin-top: 10rpx;
        padding: 5rpx;
        line-height: 20rpx;
        text-align: center;
        border-width: 1rpx;
        border-color: #b8a989;
        border-radius: 4rpx;
    }
    .i-image{
        position: absolute;
        top:0;
        left: 0;
        width: 350rpx;
        height: 226rpx;
    }
</style>
<script>
    export default {
        props:["title","items"],
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