<template>
    <div class="wrapper">
        <div class="left">
            <text class="leftTxt" v-if="leftBtn">{{leftBtn.name}}</text>
        </div>
        <text class="tlt">{{title}}</text>
        <div class="right">
            <text class="rightTxt" v-if="rightBtn">{{rightBtn.name}}</text>
        </div>
    </div>
</template>
<style scoped>
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 114rpx;
        padding-top: 44rpx;
        background-color: #fafafa;
        opacity: .99;
        z-index: 101;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-bottom-width: 1rpx;
        border-bottom-color: #d9d9d9;
    }
    .tlt{
        flex: 1;
        font-size: 36rpx;
        padding-top: 10rpx;
        color:#333;
        text-align: center;
    }
    .left,.right{
        height: 80rpx;
        width: 120rpx;
        padding-top:10rpx;
    }
    .leftTxt,.rightTxt{
        font-size: 30rpx;
        text-align: center;
    }
</style>
<script>
    export default {
        props:['title','leftBtn','rightBtn'],
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>