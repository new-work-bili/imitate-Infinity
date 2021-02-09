import store from "./store";

const mapStateToProps = (store) => {
    return {
        maskShow: store.maskShow,
        yinqingList: store.yinqingList,
        setShow: store.setShow,
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
