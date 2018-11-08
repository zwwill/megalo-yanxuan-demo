<template>
    <div class="wrapper">
        <!--<div v-for="i in items">-->
            <!--<div class="bar-item" @click="tabTo(i.key)">-->
                <!--<text class="bar-ic iconfont">{{i.icon}}</text>-->
                <!--<text class="bar-txt">{{i.name}}</text>-->
            <!--</div>-->
        <!--</div>-->

        <div class="bar-item" @click="tabTo('home')">
            <div class="bar-ic iconfont" :class="[this.isActive('home')]">&#xe660;</div>
            <div class="bar-txt" :class="[this.isActive('home')]">首页</div>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <div class="bar-ic iconfont" :class="[this.pIndexKey == 'topic'?'bar-active':'']">&#xe744;</div>
            <div class="bar-txt" :class="[this.pIndexKey == 'topic'?'bar-active':'']">专题</div>
            <div class="notice-dot"></div>
        </div>
        <div class="bar-item" @click="tabTo('class')">
            <div class="bar-ic iconfont" :class="[this.isActive('class')]">&#xe605;</div>
            <div class="bar-txt" :class="[this.isActive('class')]">分类</div>
        </div>
        <div class="bar-item" @click="tabTo('shop')">
            <div class="bar-ic iconfont" :class="[this.isActive('shop')]">&#xe61a;</div>
            <div class="bar-txt" :class="[this.isActive('shop')]">购物车</div>
        </div>
        <div class="bar-item" @click="tabTo('my')">
            <div class="bar-ic iconfont" :class="[this.isActive('my')]">&#xe639;</div>
            <div class="bar-txt" :class="[this.isActive('my')]">个人</div>
            <div class="i-notice">2</div>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        display:flex;
        position: fixed;
        bottom: 0;
        left: 0;right: 0;
        z-index: 10;
        height: 90rpx;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1rpx;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#b4282d;
    }
    .bar-ic{
        padding-top: 14rpx;
        font-size: 38rpx;
    }
    .bar-txt{
        font-size: 22rpx;
        padding-top: 2rpx;
    }
    .i-notice{
        position: absolute;
        top:10rpx;
        right: 30rpx;
        height: 30rpx;
        width: 30rpx;
        border-radius: 100%;
        font-size: 26rpx;
        line-height: 30rpx;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
    .notice-dot{
        position: absolute;
        top:15rpx;
        right: 40rpx;
        height: 15rpx;
        width: 15rpx;
        border-radius: 100%;
        background-color: #f00;
    }
</style>
<script>
    export default {
        computed:{
        },
        data () {
            return {
                pIndexKey:'home'
            }
        },
        mounted(){
        },
        methods: {
            isActive:function (_c) {
                return this.pIndexKey === _c ?'bar-active':''
            },
            tabTo(_key){
                if(this.pIndexKey === _key) return;
                this.pIndexKey = _key;
                this.$emit('tabTo',{
                    status : 'tabTo',
                    data : {
                        key : _key
                    }
                })
            }
        }
    }
</script>