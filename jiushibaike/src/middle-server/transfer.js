var http = require('http');
var url = require('url');

var server = http.createServer((req, res) => {  //这里就是创建的我们自己的服务器
   res.writeHead(200, {
        'Content-type': 'text/plain; charset=utf8',
        'Access-Control-Allow-Origin': '*'
    })
    // console.log("req.url====>",url.parse(req.url, true).query);
    // console.log("req.query=====>" , req.query.page)
    // https://m2.qiushibaike.com/article/list/text?page=1&count=30&readarticles=[121074263]
    // http://api.apiopen.top/recommendPoetry
    var options = {
        hostname: 'm2.qiushibaike.com',
        port: 80,
        path: '/article/list/image?page=1&count=6',
        method: 'GET',
    };
    //上面path中的page是给个默认值1，如果有传进来的参数，则重新赋值page
    if (url.parse(req.url, true).query.path) {
        options.path = url.parse(req.url, true).query.path
    }

    var request = http.request(options, function (response) {
        // console.log(response.statusCode);
        response.setEncoding('utf8');
        var data = ''
        response.on('data', (chunk) => {
            // console.log(chunk);
            data += chunk;
        });
        response.on('end', () => {  //我们的服务器与想要爬虫的网站接口之间的响应结束
            console.log('响应中已无数据。');
            if (JSON.parse(data)) {  
                //如果(data)能转换成json形式，说明数据是完整的，没有出现断点，有结束符号' } '的存在，那么就完整的返回给浏览器
                // console.log(JSON.parse(data));
                res.end(data);//我们自己的服务器与客户浏览器之间的响应结束
            }
            
        });
    })
    request.end();  //我们的服务器与想要爬虫的网站接口之间的请求结束

}).listen(8081, () => {
    console.log('===============')
})