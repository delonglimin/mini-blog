/**
 * 打赏二维码
 */
var moneyUrl ="https://i.bmp.ovh/imgs/2019/07/ec5597226122fbd7.jpg"

/**
 * 公众号二维码
 */
var wechatUrl ="https://i.bmp.ovh/imgs/2019/07/c6aa0539f0926bd5.jpg"

/**
 * 云开发环境
 */
var env ="mini-blog-8noa2"
/**
 * 个人文章操作枚举
 */
var postRelatedType = {
    COLLECTION: 1,
    ZAN: 2,
    properties: {
        1: {
            desc: "收藏"
        },
        2: {
            desc: "点赞"
        }
    }
};

module.exports = {
    postRelatedType: postRelatedType,
    moneyUrl:moneyUrl,
    wechatUrl:wechatUrl,
    env:env
}