<template>
    <div class="wrapper">
        <section class="scroller" @click="chooseChannel">
            <div class="j-uline" :style="jLPosition" ref="jcLine"></div>
            <text class="i-c c-act">推荐</text>
            <text class="i-c">限时购</text>
            <text class="i-c">新品</text>
            <text class="i-c">居家</text>
            <text class="i-c">餐厨</text>
            <text class="i-c">配件</text>
            <text class="i-c">服装</text>
            <text class="i-c">电器</text>
            <text class="i-c">洗护</text>
            <text class="i-c">杂货</text>
            <text class="i-c">饮食</text>
            <text class="i-c">婴童</text>
            <text class="i-c">志趣</text>
        </section>
        <div class="more iconfont">&#xe661;</div>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        width: 750rpx;
        position: fixed;
        top: 80rpx;
        height: 54rpx;
        padding-top: 10rpx;
        z-index: 10;
        border-bottom-width: 1rpx;
        border-bottom-color: #d9d9d9;
        background-color: #fff;
        box-sizing: border-box;
    }
    .scroller{
        position: relative;
        height: 54rpx;
        flex-direction: row;
        display: flex;
        overflow-x:scroll;
    }
    .i-c{
        flex-shrink:0;
        padding-top:10rpx;
        padding-left: 45rpx;
        padding-right: 45rpx;
        padding-bottom:6rpx;
        font-size: 26rpx;
        color:#333;
    }
    .c-act{
        color:#b4282d;
    }
    .j-uline{
        position: absolute;
        left: 30rpx;
        bottom: 0;
        width: 82rpx;
        height: 4rpx;
        background-color: #b4282d;
    }
    .more{
        position: absolute;
        top: 10rpx;
        right: 0;
        height: 42rpx;
        width: 100rpx;
        background-color: #fafafa;
        text-align: center;
        padding-top: 10rpx;
        opacity: 0.96;
        box-shadow:-6rpx -4rpx 4rpx #fafafa;
    }
</style>
<script>
    export default {
        data () {
            return {
                jLPosition:{left:'30rpx',width:'80rpx'}
            }
        },
        mounted () {
        },
        methods: {
            initJLine:function () {
            },
            chooseChannel:function (event) {
            }
        }
    }
</script>


