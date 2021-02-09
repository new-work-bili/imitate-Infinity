import React, { useState } from "react";

function useDIY({ confirm_click }) {
    const arr = [
        {
            color: "red",
            action: false,
        },
        {
            color: "#efa738",
            action: false,
        },
        {
            color: "#faec63",
            action: false,
        },
        {
            color: "#73b364",
            action: false,
        },
        {
            color: "#60c0d6",
            action: false,
        },
        {
            color: "#57a0ee",
            action: false,
        },
        {
            color: "#6c4cb9",
            action: false,
        },
    ];
    const obj = {
        name: "",
        url: "",
    };
    const [colorArr, setcolorArr] = useState(arr);
    const [actionColor, setActionColor] = useState("#df5f47");
    const [formData, setFormData] = useState(obj);

    const selectColorRef = React.createRef();
    //点击切换图标颜色
    function selectIconColor_click(itemColor, e) {
        setActionColor(itemColor);
        //先清除其他选中样式
        var childrenArr = Array.from(selectColorRef.current.children);
        childrenArr.forEach((item, index) => {
            item.setAttribute(
                "style",
                `background-color:${colorArr[index].color}; border: 1px solid ${colorArr[index].color}`
            );
            item.children[0].setAttribute("style", `display:none`);
        });

        //在设置选中演示
        const div = e.currentTarget;
        const children = div.children[0];
        div.setAttribute(
            "style",
            `background-color:#fff; border: 1px solid ${itemColor}`
        );
        console.log(div);
        children.setAttribute(
            "style",
            `background-color:${itemColor};display:block`
        );
    }

    //表单双向绑定
    function inputChange(type, event) {
        if (type === "name") {
            setFormData({ ...formData, name: event.target.value });
        } else {
            setFormData({ ...formData, url: event.target.value });
        }
    }
    //点击确定
    //循环渲染，颜色圆
    const selectIconColor = colorArr.map((item, index) => {
        return (
            <div
                className={`div_selectIconColor_item `}
                style={{
                    backgroundColor: item.color,
                    border: `1px solid ${item.color}`,
                }}
                key={item.color}
                onClick={(e) => selectIconColor_click(item.color, e)}
            >
                <i style={{ backgroundColor: item.color }}></i>
            </div>
        );
    });
    return (
        <div className="div_diyWrapper_wrapper">
            {/* 图标 */}
            <div className="div_DIYIcon_wrapper">
                {/* 默认是一个圆 */}
                <div
                    className="div_YinQingIcon_defaultIcon"
                    style={{ backgroundColor: actionColor }}
                ></div>
            </div>
            {/* 编辑信息 */}
            <div className="div_setFrom_wrapper">
                <div className="div_from">
                    <p>搜索引擎</p>
                    <input
                        type="text"
                        placeholder="名称"
                        value={formData.name}
                        onChange={(e) => inputChange("name", e)}
                    />
                    <p>网址</p>
                    <input
                        type="text"
                        placeholder="网站地址"
                        value={formData.url}
                        onChange={(e) => inputChange("url", e)}
                    />
                    <h2>图标</h2>
                    {/* 本来有两种方式：纯色、和上传图标。但上传图标就不写了还得配置啥的式 */}
                    <p>背景颜色</p>
                    <div className="div_iconColor_wrapper" ref={selectColorRef}>
                        {selectIconColor}
                    </div>
                </div>
                <div className="div_confirmButton">
                    <button
                        onClick={() => confirm_click(formData, actionColor)}
                    >
                        确定
                    </button>
                </div>
            </div>
        </div>
    );
}

export default useDIY;
