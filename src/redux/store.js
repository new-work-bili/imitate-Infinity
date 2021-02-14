import { createStore, combineReducers } from "redux";
import BottomReducer from "../reducer/BottomWebBoxReducer";

//localStorage中存储的数据进行初始化判断
const yinqingList_local = localStorage.getItem("yinqingList");
const actionYinQingName_local = localStorage.getItem("actionYinQingName_local");

const initYinqingList = [
    {
        name: "百度",
        icon:
            "https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png?imageView2/0/format/webp/q/100/_=1018",
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=", //联想词请求
        openUrl: "https://www.baidu.com/s?ie=UTF-8&wd=", //搜索网址()
    },
    {
        name: "雅虎",
        icon:
            "https://infinity-permanent.infinitynewtab.com/infinity/search-add/yahoo.png?imageView2/0/format/webp/q/100/_=1018",
    },
    {
        name: "谷歌",
        icon:
            "https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png?imageView2/0/format/webp/q/100/_=1018",
    },
    {
        name: "必应",
        icon:
            "https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing.png?imageView2/0/format/webp/q/100/_=1018",
    },
];
localStorage.setItem("yinqingList", JSON.stringify(initYinqingList));

var initData = {
    maskShow: false,
    num: 1,
    yinqingList:
        yinqingList_local == null
            ? initYinqingList
            : JSON.parse(yinqingList_local),
    setShow: "YinQingAdd", //显示哪一个设置页面，'WebSet' || 'YinQingAdd',
    //当前的搜索引擎
    actionYinQingName:
        actionYinQingName_local == null
            ? "百度"
            : JSON.parse(actionYinQingName_local),
};
console.log(initData.yinqingList);
const reducer = (state = initData, action) => {
    switch (action.type) {
        case "changeMaskShow":
            return { ...state, maskShow: !state.maskShow, num: state.num + 1 };
        case "AddYinqing":
            // console.log('addYinqing');
            var yinqingList = state.yinqingList;
            yinqingList.push(action.data);

            localStorage.setItem("yinqingList", JSON.stringify(yinqingList));
            return { ...state, yinqingList: yinqingList };
        case "DeleteYinqing":
            var yinqingList = [];
            state.yinqingList.forEach((item) => {
                if (item.name !== action.name) {
                    yinqingList.push(item);
                }
            });

            localStorage.setItem("yinqingList", JSON.stringify(yinqingList));
            return { ...state, yinqingList: yinqingList };
        case "changeSetShow":
            console.log(state.setShow);
            return { ...state, setShow: action.data };
        case "setActionYinQingName":
            localStorage.setItem(
                "actionYinQingName",
                JSON.stringify(action.data)
            );
            return { ...state, actionYinQingName: action.data };
        default:
            return state;
    }
};
console.log(BottomReducer);

// const store = createStore(
//     combineReducers({
//         reducer,
//         BottomReducer,
//     })
// );

const store = createStore(reducer);
export default store;
