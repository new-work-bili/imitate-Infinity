import logo from "./logo.svg";
import "./App.scss";
import Home from "./page/Home";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux/map";

function App(props) {
    const { maskShow, changeMaskShow, changeSetShow, setShow } = props;
    //点击mask，隐藏搜索引擎选择框
    function clickMask(e) {
        if (setShow === "YinQingAdd") {
            //隐藏侧导航栏
            changeSetShow(false);
        } else if (!setShow) {
            //隐藏mask
            changeMaskShow();
        }
    }
    return (
        <div className="App">
            <Home className="div_home_wrapper"></Home>
            <div className="div_mask"></div>
            {maskShow && (
                <div
                    className="div_mask div_deepMask"
                    onClick={clickMask}
                ></div>
            )}
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
