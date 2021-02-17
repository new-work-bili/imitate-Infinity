const mapStateToProps = (state) => {
    return {
        maskShow: state.reducer.maskShow,
        yinqingList: state.reducer.yinqingList,
        setShow: state.reducer.setShow,
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
        changeSetShow: (data) => {
            dispatch({ type: "changeSetShow", data: data });
        },
        DeleteYinqing: (name) => {
            console.log(555);
            //value是一个函数，redux会自己去调用
            dispatch({
                type: "DeleteYinqing",
                name: name,
            });
        },
    };
};

export { mapStateToProps, mapDispatchToProps };
