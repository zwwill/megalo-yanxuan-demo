<template>
    <div class="wrapper">
        <home-header></home-header>
        <top-channel></top-channel>
        <section class="main-list" @loadmore="onloadmore">
            <yx-slider :imageList="YXBanners" ></yx-slider>
            <div class="slogan">
                <text class="i-slg iconfont">&#xe63a; 网易自营品牌</text>
                <text class="i-slg iconfont">&#xe63a; 30天无忧退货</text>
                <text class="i-slg iconfont">&#xe63a; 48小时快速退款</text>
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
    // import util from '../util';
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
            'top-channel': topChannel,
        },
        data () {
            return {
                YXBanners: [
                    { "title": "", "src": "http://yanxuan.nosdn.127.net/630439320dae9f1ce3afef3c39721383.jpg"},
                    { "title": "", "src": "http://yanxuan.nosdn.127.net/5100f0176e27a167cc2aea08b1bd11d8.jpg"},
                    { "title": "", "src": "http://doc.zwwill.com/yanxuan/imgs/banner-1.jpg"},
                    { "title": "", "src": "http://doc.zwwill.com/yanxuan/imgs/banner-8.jpg"},
                    { "title": "", "src": "http://doc.zwwill.com/yanxuan/imgs/banner-2.jpg"},
                    { "title": "", "src": "http://doc.zwwill.com/yanxuan/imgs/banner-4.jpg"},
                    { "title": "", "src": "http://doc.zwwill.com/yanxuan/imgs/banner-6.jpg"}
                ],
                makers: {
                    "title": "品牌制造商直供",
                    "items": [
                        {
                        "name": "新秀丽制造商",
                        "price": "59",
                        "state": "上新",
                        "bg": "http://doc.zwwill.com/yanxuan/imgs/ppbg-1.jpg",
                        "url": "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001037%26page%3D1%26size%3D100"
                        },
                        {
                        "name": "MUJI制造商",
                        "price": "12.9",
                        "state": "上新",
                        "bg": "http://doc.zwwill.com/yanxuan/imgs/ppbg-2.jpg",
                        "url": "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001000%26page%3D1%26size%3D100"
                        },
                        {
                        "name": "CK制造商",
                        "price": "29",
                        "state": "上新",
                        "bg": "http://doc.zwwill.com/yanxuan/imgs/ppbg-3.jpg",
                        "url": "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1026000%26page%3D1%26size%3D100"
                        },
                        {
                        "name": "Adidas制造商",
                        "price": "29",
                        "bg": "http://yanxuan.nosdn.127.net/75523d4274d85825ece16370cdb1693f.jpg",
                        "url": "http%3A%2F%2Fm.you.163.com%2Fitem%2Fmanufacturer%3FtagId%3D1001003%26page%3D1%26size%3D100"
                        }
                    ]
                },
                recommend: {
                    "head1": {
                        "tlt": "周一周四 · 新品发布",
                        "tltBg": "http://doc.zwwill.com/yanxuan/imgs/bg-new.png",
                        "url": "http://m.you.163.com/item/newItem"
                    },
                    "goods1": [
                        {
                        "tlt": "日式和风声波式电动牙刷",
                        "img": "http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330",
                        "info": "进口刷毛，专利技术",
                        "price": "119"
                        },
                        {
                        "tlt": "小馒头 多色双肩包",
                        "img": "http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330",
                        "info": "奶油色泽，小巧减龄",
                        "price": "79"
                        },
                        {
                        "tlt": "多功能商务双肩包",
                        "img": "http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330",
                        "info": "17个功能分区，内置分层收纳",
                        "price": "334"
                        },
                        {
                        "tlt": "切尔西牛皮女靴",
                        "img": "http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330",
                        "info": "经典牛皮切尔西，时尚帅气",
                        "price": "289"
                        },
                        {
                        "tlt": "清心花茶壶套装",
                        "img": "http://yanxuan.nosdn.127.net/a2a0f13385d67220b29e7a1124a361e6.png?imageView&quality=85&thumbnail=330x330",
                        "info": "明亮通透，滤茶迅速",
                        "price": "119"
                        },
                        {
                        "tlt": "全棉色织磨毛四件套",
                        "img": "http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330",
                        "info": "优雅色织，温暖磨毛",
                        "price": "299"
                        },
                        {
                        "tlt": "黑凤梨 20寸PC膜拉链登机箱",
                        "img": "http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330",
                        "info": "热卖9万只，网易人手1只",
                        "price": "185"
                        },
                        {
                        "tlt": "日式和风敞口保温杯",
                        "img": "http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330",
                        "info": "真空隔热，保温保冷",
                        "price": "32"
                        }
                    ],
                    "head2": {
                        "tlt": "人气推荐 · 好物精选",
                        "tltBg": "http://doc.zwwill.com/yanxuan/imgs/bg-hot.png",
                        "url": "http://m.you.163.com/item/recommend"
                    },
                    "goods2": [
                        {
                        "tlt": "牛皮复古双肩背包",
                        "img": "http://yanxuan.nosdn.127.net/6fe7a267fee8eb288cc28d67d5d9f57c.png?imageView&quality=85&thumbnail=330x330",
                        "info": "复古全牛皮，体验品质格调",
                        "price": "479"
                        },
                        {
                        "tlt": "双宫茧桑蚕丝被 空调被",
                        "img": "http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330",
                        "info": "一级桑蚕丝，吸湿透气柔软",
                        "price": "479"
                        },
                        {
                        "tlt": "清新两用杯",
                        "img": "http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330",
                        "info": "办公杯优选 轻松饮茶",
                        "price": "52"
                        },
                        {
                        "tlt": "日式蓬软太鼓抱枕",
                        "img": "http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330",
                        "info": "萌趣太鼓造型 软糯轻柔回弹",
                        "price": "29"
                        },
                        {
                        "tlt": "怀抱休闲椅组合（皮款）",
                        "img": "http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330",
                        "info": "葛优躺神器皮款",
                        "price": "3999"
                        },
                        {
                        "tlt": "欧式哑光餐具套装",
                        "img": "http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330",
                        "info": "德化白瓷，坚实耐用",
                        "price": "189"
                        },
                        {
                        "tlt": "可水洗抗菌防螨丝羽绒枕",
                        "img": "http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330",
                        "info": "进口防螨布，热销50万件",
                        "price": "99"
                        },
                        {
                        "tlt": "两带式男/女款拖鞋",
                        "img": "http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330",
                        "info": "鞋杯随脚型而变，舒适呵护",
                        "price": "69.9"
                        }
                    ]
                },
                goodsList:[
                    {"tlt":"日式和风敞口保温杯","img":"http://yanxuan.nosdn.127.net/3aa67fee1c7d046a09f4ce878f4485ac.png?imageView&quality=85&thumbnail=330x330","info":"真空隔热，保温保冷","price":"32"},
                    {"tlt":"切尔西牛皮女靴","img":"http://yanxuan.nosdn.127.net/0e9ddf1a0ed5af78e8ec12cb9489df17.png?imageView&quality=85&thumbnail=330x330","info":"经典牛皮切尔西，时尚帅气","price":"289"},
                    {"tlt":"小馒头多色双肩包","img":"http://yanxuan.nosdn.127.net/455eee1712358dbcb2e33d54ab287808.png?imageView&quality=85&thumbnail=330x330","info":"奶油色泽，小巧减龄","price":"79"},
                    {"tlt":"全棉色织磨毛四件套","img":"http://yanxuan.nosdn.127.net/3e1c00ce7b49a78e645538a8c45cabcb.png?imageView&quality=85&thumbnail=330x330","info":"优雅色织，温暖磨毛","price":"299"},
                    {"tlt":"日式和风声波式电动牙刷","img":"http://yanxuan.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png?imageView&quality=85&thumbnail=330x330","info":"进口刷毛，专利技术","price":"119"},
                    {"tlt":"多功能商务双肩包","img":"http://yanxuan.nosdn.127.net/795884dc6d995eca9a091a6358e3634d.png?imageView&quality=85&thumbnail=330x330","info":"17个功能分区，内置分层收纳","price":"334"},
                    {"tlt":"黑凤梨20寸PC膜拉链登机箱","img":"http://yanxuan.nosdn.127.net/3108aaae80416b1cf27c3d7cc5661cea.png?imageView&quality=85&thumbnail=330x330","info":"热卖9万只，网易人手1只","price":"185"},
                    {"tlt":"日式蓬软太鼓抱枕","img":"http://yanxuan.nosdn.127.net/ad953e16ad8c33b714e7af941ce8cd56.png?imageView&quality=85&thumbnail=330x330","info":"萌趣太鼓造型 软糯轻柔回弹","price":"29"},
                    {"tlt":"可水洗抗菌防螨丝羽绒枕","img":"http://yanxuan.nosdn.127.net/a6c9e142fd008b3734c690a71a78ae5b.png?imageView&quality=85&thumbnail=330x330","info":"进口防螨布，热销50万件","price":"99"},
                    {"tlt":"双宫茧桑蚕丝被 空调被","img":"http://yanxuan.nosdn.127.net/6b341648f59d0c3eb48fa81e1d2de06e.png?imageView&quality=85&thumbnail=330x330","info":"一级桑蚕丝，吸湿透气柔软","price":"479"},
                    {"tlt":"怀抱休闲椅组合（皮款）","img":"http://yanxuan.nosdn.127.net/b5289125e9b55cf72e9a9623d006415e.png?imageView&quality=85&thumbnail=330x330","info":"葛优躺神器皮款","price":"3999"},
                    {"tlt":"欧式哑光餐具套装","img":"http://yanxuan.nosdn.127.net/431e86c88b4a6c9f065d1d8abea6b603.png?imageView&quality=85&thumbnail=330x330","info":"德化白瓷，坚实耐用","price":"189"},
                    {"tlt":"清新两用杯","img":"http://yanxuan.nosdn.127.net/431f5d142e3dd9946dc8e38c2aa3cd34.png?imageView&quality=85&thumbnail=330x330","info":"办公杯优选 轻松饮茶","price":"52"},
                    {"tlt":"两带式男/女款拖鞋","img":"http://yanxuan.nosdn.127.net/7d1c130c7d80edf824e4218c6829b7c8.png?imageView&quality=85&thumbnail=330x330","info":"鞋杯随脚型而变，舒适呵护","price":"69.9"}
                ],
                showLoading: 'hide'
            }
        },
        created () {
            /*
            * demo 使用假数据
            */
            // this.GET('api/home/index', res => {
            //     let result = res.data.result;
            //     this.YXBanners = result['banners'];
            //     this.makers = result['makers'];
            //     this.recommend = result['recommend'];
            // });
            // this.GET('api/home/pullGoods', res => {
            //     let result = res.data.result;
            //     this.goodsList = result['goods'];
            // })
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


<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 404010 */
        src: url('//at.alicdn.com/t/font_404010_f29c7wlkludz33di.eot');
        src: url('//at.alicdn.com/t/font_404010_f29c7wlkludz33di.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_404010_f29c7wlkludz33di.woff') format('woff'),
        url('//at.alicdn.com/t/font_404010_f29c7wlkludz33di.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_404010_f29c7wlkludz33di.svg#iconfont') format('svg');
    }
    .iconfont {
        font-family:iconfont;
    }
    .main-list{
        /* top: 168rpx;
        bottom: 90rpx; */
        left: 0;
        right: 0;
        margin-top: 134rpx;
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