<template>
    <div class="wrapper">
        <home-header></home-header>
        <top-channel></top-channel>
        <section class="main-list" @loadmore="onloadmore">
            <yx-slider :imageList="YXBanners" ></yx-slider>
            <div class="slogan">
                <div class="i-slg iconfont">&#xe63a; 网易自营品牌</div>
                <div class="i-slg iconfont">&#xe63a; 30天无忧退货</div>
                <div class="i-slg iconfont">&#xe63a; 48小时快速退款</div>
            </div>
            <block-1 :title="makers.title" :items="makers.items"></block-1>
            <block-2 hasMore=true newGoods=true :head="recommend.head1" :goods="recommend.goods1"></block-2>
            <block-2 hasMore=true hotGoods=true :head="recommend.head2" :goods="recommend.goods2"></block-2>
            <block-3 :goods="goodsList"></block-3>
        </section>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import mixins from '../../mixins'
    import tabBar from '../../components/tabBar.vue';
    import Header from '../../components/Header.vue';
    import Block1 from '../../components/Block1.vue';
    import Block2 from '../../components/Block2.vue';
    import Block3 from '../../components/Block3.vue';
    import YXSlider from '../../components/YXSlider.vue';
    import topChannel from '../../components/topChannel.vue';
    export default {
        mpType: 'page',
        mixins: [mixins],
        components: {
            'tab-bar': tabBar,
            'block-1': Block1,
            'block-2': Block2,
            'block-3': Block3,
            'yx-slider': YXSlider,
            'home-header': Header,
            'top-channel': topChannel
        },
        data () {
            return {
                YXBanners: [],
                makers: {
                    "title": "品牌制造商直供",
                    "items": []
                },
                recommend: {},
                goodsList:[],
                showLoading: 'hide'
            }
        },
        created () {
            /*
            * demo 使用假数据
            */
            this.GET('api/home/index', res => {
                let result = res.data.result;
                this.YXBanners = result['banners'];
                this.makers = result['makers'];
                this.recommend = result['recommend'];
            });
            this.GET('api/home/pullGoods', res => {
                let result = res.data.result;
                this.goodsList = result['goods'];
            })
        },
        methods: {
            jumpWeb (_url) {
                // const url = this.$getConfig().bundleUrl;
                // navigator.push({
                //     url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                //     animated: "true"
                // });
            },
            onloading () {
                // modal.toast({ message: 'loading', duration: 0.3 })
                // this.showLoading = 'show';
                // setTimeout(() => {
                //     this.goodsList.push(...this.recommend.goods1);
                //     this.showLoading = 'hide'
                // }, 300)
            },
            onloadmore () {
                // modal.toast({ message: 'loading', duration: 0.3 })
                // setTimeout(() => {
                //     this.goodsList.push(...this.recommend.goods1);
                // }, 100)
            },
            loadingDown(){
                // this.goodsList =[];
                // this.goodsList.push(...this.recommend.goods2);
                // this.goodsList.push(...this.recommend.goods1);
            }
        }
    }
</script>


<style scoped lang="scss">
    @font-face {
        font-family: 'iconfont';  
        src: url('https://at.alicdn.com/t/font_404010_f29c7wlkludz33di.eot');
        src: url('https://at.alicdn.com/t/font_404010_f29c7wlkludz33di.eot?#iefix') format('embedded-opentype'),
        url('https://at.alicdn.com/t/font_404010_f29c7wlkludz33di.woff') format('woff'),
        url('https://at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf') format('truetype'),
        url('https://at.alicdn.com/t/font_404010_f29c7wlkludz33di.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family: "iconfont" !important;
    }
.icon-favor:before { content: "\e64c"; }
    .main-list{
        /* top: 168rpx;
        bottom: 90rpx; */
        left: 0;
        right: 0;
        margin-top: 144rpx;
        margin-bottom: 90rpx;
    }

    .cell-button{
        padding-bottom: 18rpx;
    }
    .slogan{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        background-color: #fff;
    }
    .i-slg{
        height: 66rpx;
        font-size: 26rpx;
        padding-top: 16rpx;
        flex: 1;
        text-align: center;
        color: #b4282d;
    }

</style>