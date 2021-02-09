import React, { PureComponent } from "react";

export default class test extends PureComponent {
    // const [thisAction, setthisAction] = useState(null);
    constructor(props) {
        super(props);
        this.state = {
            thisAction: null,
        };
    }
    selectIconColor_click = (item) => {
        // this.setState({thisAction:"iconColorAction "});
        console.log(item);
    };

    // function selectIconColor_click(item) {
    //     console.log(item);

    // }

    render() {
        const colorArr = [
            "red",
            "#efa738",
            "#faec63",
            "#73b364",
            "#60c0d6",
            "#57a0ee",
            "#6c4cb9",
        ];
        const selectIconColor = colorArr.map((item, index) => {
            // console.log(item);
            return (
                <div
                    className={`div_selectIconColor_item ${this.state.thisAction}`}
                    style={{ backgroundColor: item }}
                    key={item}
                    onClick={(e) => this.selectIconColor_click(item, e)}
                ></div>
            );
        });
        return (
            <div className="div_diyWrapper_wrapper">
                {/* 图标 */}
                <div className="div_DIYIcon_wrapper">
                    {/* 默认是一个圆 */}
                    <div className="div_YinQingIcon_defaultIcon"></div>
                </div>
                {/* 编辑信息 */}
                <div className="div_setFrom_wrapper">
                    <div className="div_from">
                        <p>搜索引擎</p>
                        <input type="text" placeholder="名称" />
                        <p>网址</p>
                        <input type="text" placeholder="网站地址" />
                        <h2>图标</h2>
                        {/* 本来有两种方式：纯色、和上传图标。但上传图标就不写了还得配置啥的式 */}
                        <p>背景颜色</p>
                        <div className="div_iconColor_wrapper">
                            {selectIconColor}
                        </div>
                    </div>
                    <div className="div_confirmButton">
                        <button>确定</button>
                    </div>
                </div>
            </div>
        );
    }
}
