import Search from "../../components/search/index";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    console.log(state);
    return {
        maskShow: state.reducer.maskShow,
        yinqingList: state.reducer.yinqingList,
        actionYinQingName: state.reducer.actionYinQingName,
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
