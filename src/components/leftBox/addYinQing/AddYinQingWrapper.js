import Header from "../header";
import React, { PureComponent } from "react";
import "../../../assets/style/set.scss";
import YinQingDiy from "./yinqingDiy";

class YinQingAdd extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            labelAction: "默认", //标识选中
        };
    }

    close = () => {
        this.props.changeSetShow(false);
    };
    //自定义搜索引擎，点击确定
    confirm_click = (formData, actionColor) => {
        console.log(formData, actionColor);
        const List = this.props.yinqingList;
        //判断，name不能重复，因为他是map循环的key
        for (var index in List) {
            if (List[index].name === formData.name) {
                alert("搜索引擎名字重复！");
                return;
            }
        }
        //添加
        this.props.addYinQing({ ...formData, actionColor });
        //关闭侧导航栏
        this.props.changeSetShow(false);
    };
    render() {
        return (
            <div className="div_YinQingAdd_wrapper">
                <Header onClick={this.close}>
                    <span>添加搜索引擎</span>
                </Header>
                {/*选项标签  */}
                <div className="div_label_wrapper">
                    <div
                        className={`${
                            this.state.labelAction == "默认"
                                ? "labelAction"
                                : null
                        }`}
                        onClick={() => {
                            this.setState({ labelAction: "默认" });
                        }}
                    >
                        <span>默认</span>
                    </div>

                    <div
                        className={`${
                            this.state.labelAction == "自定义"
                                ? "labelAction"
                                : null
                        }`}
                        onClick={() => {
                            this.setState({ labelAction: "自定义" });
                        }}
                    >
                        {" "}
                        <span>自定义</span>{" "}
                    </div>
                </div>

                {/* 标签页内容 */}
                <div className="div_lavelMain_wrapper">
                    {/* 默认标签页内容 */}
                    {/* 自定义标签页内容 */}
                    {this.state.labelAction === "默认" ? (
                        <div>待定</div>
                    ) : (
                        // 自定义
                        <div className="div_DIY">
                            <YinQingDiy
                                confirm_click={this.confirm_click}
                            ></YinQingDiy>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default YinQingAdd;
