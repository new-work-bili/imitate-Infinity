import YinQingAdd from "../../components/leftBox/addYinQing/AddYinQingWrapper";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        yinqingList: state.yinqingList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSetShow: (data) => {
            console.log(2);
            dispatch({ type: "changeSetShow", data: data });
        },
        addYinQing: (data) => {
            console.log("ddd");
            dispatch({ type: "AddYinqing", data: data });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(YinQingAdd);
