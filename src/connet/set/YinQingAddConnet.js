import YinQingAdd from "../../components/leftBox/addYinQing/AddYinQingWrapper";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        yinqingList: state.yinqingList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSetShow: () => {
            console.log(2);
            dispatch({ type: "changeSetShow", data: false });
        },
        addYinQing: (data) => {
            dispatch({ type: "AddYinqing", data: data });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(YinQingAdd);
