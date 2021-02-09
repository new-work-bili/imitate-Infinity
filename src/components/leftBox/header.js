function Header(props) {
    const { children,onClick } = props;

    return (
        <div className="div_setHeader_wrapper">
            {children}
            <div className="div_closeButton" onClick={onClick}>
                <span className="span_closeButton iconfont icon-guanbi"></span>
            </div>
        </div>
    );
}

export default Header;
