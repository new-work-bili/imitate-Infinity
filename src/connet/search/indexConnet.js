import Search from "../../components/search/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        maskShow: state.maskShow,
        yinqingList: state.yinqingList,
        actionYinQingName: state.actionYinQingName,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeMaskShow: () => {
            //value是一个函数，redux会自己去调用
            dispatch({
                type: "changeMaskShow",
            });
        },
        setActionYinQingName: (name) => {
            //value是一个函数，redux会自己去调用
            dispatch({
                type: "setActionYinQingName",
                data: name,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
