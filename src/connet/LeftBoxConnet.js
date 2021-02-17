import LeftBox from "../page/LeftBox";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        setShow: state.reducer.setShow,
    };
};

export default connect(mapStateToProps, null)(LeftBox);
