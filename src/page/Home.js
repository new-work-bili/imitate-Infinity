import React, { PureComponent } from "react";
import jsonP from "../http/func";
// import JsonP from "jsonp";
import Search from "./Search";
import leftBox from "./LeftBox";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../redux/map";

const LeftBox = connect(mapStateToProps, mapDispatchToProps)(leftBox);
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
        const { setShow } = this.props;
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
