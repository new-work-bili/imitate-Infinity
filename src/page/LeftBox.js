import YinQingAddConnet from "../connet/set/YinQingAddConnet";
import WebsetConnet from "../connet/set/SetConnet";

import React, { PureComponent, useState, useEffect } from "react";

export default function useLeftBox({ setShow }) {
    // const { setShow } = this.props;
    return (
        <div>
            {(setShow == "WebSet" || setShow == "YinQingAdd") && (
                <div className="div_set_wrapper">
                    {/* 设置页面--添加搜索引擎 */}
                    {setShow == "YinQingAdd" && (
                        <YinQingAddConnet></YinQingAddConnet>
                    )}
                    {/* 设置页面--添加页面书签 */}
                    {setShow == "WebSet" && <WebsetConnet></WebsetConnet>}
                </div>
            )}
        </div>
    );
}
