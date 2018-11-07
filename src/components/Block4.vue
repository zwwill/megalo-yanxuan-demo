<template>
    <div class="wrapper">
        <scroller class="tp-box" scroll-direction="horizontal" show-scrollbar=false>
            <div class="i-tp" v-for="(i,index) in topics" :key="index">
                <image class="tp-img" resize="cover" :src="i.img" />
                <text class="tp-name">{{i.name}}</text>
            </div>
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
    }

    .tp-box{
        height: 200rpx;
        padding: 20rpx;
        flex-direction: row;
    }
    .i-tp{
        width: 275rpx;
        height: 150rpx;
        margin: 10rpx;
    }
    .tp-img{
        position: absolute;
        top:0;
        left: 0;
        width: 275rpx;
        height: 150rpx;
        border-radius: 10rpx;
        background-color: #f4f4f4;
    }

    .tp-name{
        font-size: 28rpx;
        margin-left: 20rpx;
        margin-right: 20rpx;
        margin-top: 57rpx;
        overflow: hidden;
        text-align: center;
        color:#fff;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
<script>
    export default {
        props:["topics"],
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>