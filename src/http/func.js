import JsonP from "jsonp";

//封装jsonp请求
export default class JsonPFunc {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, function (err, res) {
                console.log(res);
                if (res?.status?.code === 200) {
                    resolve(res);
                } else {
                    reject(err);
                }
            });
        });
    }
}
