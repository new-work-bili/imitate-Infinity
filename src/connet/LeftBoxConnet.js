import LeftBox from "../page/LeftBox";
import { connect } from "react-redux";

const mapStateToProps = (state, action) => {
    return {
        setShow: state.setShow,
    };
};

export default connect(mapStateToProps, null)(LeftBox);
