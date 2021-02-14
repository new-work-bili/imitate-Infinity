import React, { PureComponent } from "react";
import jsonP from "../http/func";
import Search from "./Search";
import LeftBox from "../connet/LeftBoxConnet";
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //获取壁纸
    getData(day) {
        var url = `https://bing.ioliu.cn/v1/?d=${day}&w=5456&h=3632`;
        jsonP
            .jsonp({
                url: url,
            })
            .then((resData) => {
                console.log(resData);
                //图片
                var img = document.createElement("img");
                img.src = resData.data.url;
                img.classList.add("bingImg");
                //删除之前的
                //

                document.body.appendChild(img);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    componentDidMount() {
        this.getData(1);
    }
    render() {
        return (
            <div className="div_home_wrapper">
                {/* 搜索 */}
                <Search className="div_search_wrapper"></Search>
                {/* 网站标签 */}
                <div className="div_webLabel_wrapper"></div>
                {/* 设置按钮 */}

                <LeftBox></LeftBox>
                {/* 随机壁纸按钮 */}
            </div>
        );
    }
}

export default Home;
