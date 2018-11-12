<template>
    <div class="wrapper" >
        <div class="scan">
            <div class="ic iconfont">&#xe689;</div>
            <div class="txt">扫一扫</div>
        </div>
        <div class="search iconfont"  @click="jumpWeb()">&#xe65c; 搜索商品，共8888款好物</div>
        <div class="notice">
            <div class="ic iconfont">&#xe70a;</div>
            <div class="txt">消息</div>
        </div>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 80rpx;
        padding-top: 10rpx;
        box-sizing: border-box;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        z-index: 101;
        background-color: #fff;
        opacity: .99;
    }
    .scan,.notice{
        height: 80rpx;
        width: 96rpx
    }
    .ic,.txt,.search{
        text-align: center;
        color:#666;
        font-weight: 300;
    }
    .ic{
        font-size: 32rpx;
    }
    .txt{
        font-size: 18rpx;
     }
    .search {
        flex: 1;
        height: 60rpx;
        font-size: 26rpx;
        padding-top: 13rpx;
        background-color: #ededed;
        border-radius: 8rpx;
        box-sizing: border-box;
    }
</style>
<script>
    export default {
        data () {
            return {
            }
        },
        created () {
        },
        methods: {
            jumpWeb (_url) {
            }
        }
    }
</script>