import yinqingIconBox from "../../components/search/yinqingIconBox";

import { connect } from "react-redux";

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        DeleteYinqing: (name) => {
            console.log(555);
            //value是一个函数，redux会自己去调用
            dispatch({
                type: "DeleteYinqing",
                name: name,
            });
        },
        changeSetShow: (data) => {
            dispatch({
                type: "changeSetShow",
                data: data,
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(yinqingIconBox);
