// import store from "../../redux/store";
import React, { PureComponent } from "react";

//图标Item
function IconItem(props) {
    const { clickAddYinqing, data, clickChangeYinqing } = props;
    var addicon = null;
    var style, clickFunc;
    if (data.icon === null) {
        //icon为null--->icon为 “添加图标” + 号
        addicon = "iconfont icon-tianjia";
        clickFunc = clickAddYinqing;
    } else if (data.icon) {
        style = {
            backgroundImage: `url(${data.icon})`,
        };
        clickFunc = clickChangeYinqing;
    } else if (data.actionColor) {
        console.log(2);
        //自定义搜索引擎目前没有上传图标选项，而是自定义图标的背景颜色。所以要进行区分处理
        style = {
            backgroundColor: data.actionColor,
            borderRadius: "50%",
        };
        clickFunc = clickChangeYinqing;
    }

    function clickSend(e) {
        props.ClickSend(e, data.name);
    }

    return (
        <li className="li_yinqingIcon" onClick={clickFunc}>
            <div>
                <div className="div_addIcon_wrapper">
                    <div className={`icon ${addicon}`} style={style}></div>
                    <p className="text">{data.name}</p>
                </div>
                {/* 删除按钮 */}
                <div
                    className={`div_deleteButton ${
                        data.name == "添加" ? null : "iconfont icon-shanchu"
                    }`}
                    onClick={clickSend}
                ></div>
            </div>
        </li>
    );
}

class yinqingIcon extends PureComponent {
    //删除搜索引擎
    deleteYinqing = (e, name) => {
        e.stopPropagation();
        console.log(name);
        this.props.DeleteYinqing(name);
    };

    //添加搜索引擎，打开自定义界面
    addYinqing = () => {
        // store.dispatch({ type: "changeSetShow", data: "YinQingAdd" });
        this.props.changeSetShow("YinQingAdd");
    };
    render() {
        const { data, click } = this.props;
        console.log(data);
        return (
            <div className="div_yinqingIcon_wrapper">
                <ul className="ul_yinqingIcon">
                    {data.map((item, index) => {
                        return (
                            <IconItem
                                key={item.name}
                                data={item}
                                clickChangeYinqing={click}
                                ClickSend={this.deleteYinqing}
                            ></IconItem>
                        );
                    })}
                    {/* 添加 */}
                    <IconItem
                        data={{ name: "添加", icon: null }}
                        clickAddYinqing={this.addYinqing}
                    />
                </ul>
            </div>
        );
    }
}

export default yinqingIcon;
