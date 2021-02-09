import React, { PureComponent } from "react";
import "../../assets/style/search.scss";
import YinQingBox from "./yinqingIconBox";
import Input from "./input";

class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            defaultClass: true,
            typeList: ["网页", "图片", "新闻", "视频", "地图"],
            //当前搜索引擎;默认是百度
            changStyle: {},
            actionYinQingName: "百度", //当前的搜索引擎
        };
    }
    clickType = (e) => {
        const item = e.target.innerText;
        this.setState({
            defaultClass: item,
        });
    };
    //点击当前搜索引擎图标
    clickIconButton = (e) => {
        this.props.changeMaskShow();
    };

    //点击选择搜索引擎
    clickYinqingIcon = (e) => {
        const textarget = e.currentTarget.children[0].children[0],
            iconTarget = e.currentTarget.children[0].children[0].children[0],
            name = textarget.innerText, //搜索引擎名字
            url = iconTarget.style.backgroundImage, //搜索引擎图标地址
            color = iconTarget.style.backgroundColor;
        this.props.setActionYinQingName(name);
        if (url) {
            this.setState({
                changStyle: {
                    backgroundImage: url,
                    backgroundColor: "transparent",
                },
            });
        } else if (color) {
            console.log(typeof color);
            //自定义图标没有上传图标功能，只是设置了bgColor;所以进行区分
            this.setState({
                changStyle: {
                    backgroundImage: "none",
                    borderRadius: "50%",
                    backgroundColor: color,
                },
            });
        }

        //关闭框
        this.props.changeMaskShow();
    };

    render() {
        const { defaultClass } = this.state;
        const { yinqingList, actionYinQingName } = this.props;
        return (
            <div className={this.props.className}>
                <div className="div_search_wrapperIn">
                    {/* 搜索类型 */}
                    <ul className="ul_searchType">
                        {this.state.typeList.map((item, index) => {
                            return (
                                <li
                                    key={item}
                                    onClick={this.clickType}
                                    className={`li_searchType ${
                                        (defaultClass === true &&
                                            index === 0) ||
                                        item == defaultClass
                                            ? "li_searchType_action"
                                            : null
                                    }`}
                                >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>

                    {/* 搜素框 */}
                    <div className="div_searchInput">
                        {/* 图标 */}
                        <button
                            className="button_icon_wrapper"
                            onClick={this.clickIconButton}
                        >
                            <div
                                className="div_icon"
                                style={this.state.changStyle}
                            ></div>
                        </button>

                        {/* input */}
                        <Input
                            className="input_searchInput"
                            type="text"
                            placeholder="输入并搜索..."
                            actionYinQingName={actionYinQingName}
                            yinqingList={yinqingList}
                        />
                    </div>
                    {/* 选择搜索引擎 */}
                    {this.props.maskShow && (
                        <YinQingBox
                            data={yinqingList}
                            click={this.clickYinqingIcon}
                        ></YinQingBox>
                    )}
                </div>
            </div>
        );
    }
}

export default index;
