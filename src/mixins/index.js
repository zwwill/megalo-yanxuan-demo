
export default {
    methods: {
        jump(to) {
            // if (this.$router) {
            //     this.$router.push(to)
            // }
        },
        GET (api, callback) {
            wx.request({
                url: `https://doc.zwwill.com/yanxuan/${api}`,
                success: callback
            })
            // axios.get(`http://cdn.zwwill.com/yanxuan/${api}`)
            // .then((data)=>{
            //     console.log('-----',data)
            // })
            // return stream.fetch({
            //     method: 'GET',
            //     type: 'json',
            //     url: 'http://cdn.zwwill.com/yanxuan/' + api
            //     // url: 'http://10.242.69.181:8089/yanxuan/' + api
            // }, callback)
        }

    }
}
