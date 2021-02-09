import DIYSlot from "../DIYSlot";
// import DIYSlot from "../test";

import React, { PureComponent } from "react";

export default class yinqingDiy extends PureComponent {
    render() {
        return (
            <div>
                <DIYSlot confirm_click={this.props.confirm_click}></DIYSlot>
            </div>
        );
    }
}
