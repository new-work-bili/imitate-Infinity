import SetWrapper from "../../components/leftBox/set/SetWrapper";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        // setShow: state.setShow,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeSetShow: () => {
            console.log(2);
            dispatch({ type: "changeSetShow", data: false });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SetWrapper);
