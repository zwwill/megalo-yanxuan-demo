
export default {
    methods: {
        jump(to) {
            // if (this.$router) {
            //     this.$router.push(to)
            // }
        },
        GET (api, callback) {
            let { platform } = this.$mp || {},
                request = ()=>{}
            switch(platform) {
                case 'wechat':
                    request = wx && wx.request
                break;
                case 'alipay':
                    request = my && my.httpRequest
                break;
                case 'swan':
                    request = swan && swan.request
                break;
                default:
                break;
            }
            request && request({
                url: `https://doc.zwwill.com/yanxuan/${api}`,
                success: callback
            })
        }

    }
}
