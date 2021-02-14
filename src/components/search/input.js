import { useState, useEffect } from "react";
import JsonP from "jsonp";

//搜索框以及搜索联想词
function useInput({ actionYinQingName, yinqingList }) {
    const [inputValue, setInputValue] = useState("");
    const [wordList, setwordList] = useState([]);
    var url, openUrl;
    for (var value of yinqingList) {
        if (value.name === actionYinQingName) {
            url = value.url;
            openUrl = value.openUrl;
            continue;
        }
    }
    //jsonp请求，请求联想词
    function jsonPWord(str) {
        if (str != "") {
            var word = str.trim();
            url = `${url}${word}&cb=jq`;
            //+word
            JsonP(url, { name: "jq" }, (err, res) => {
                if (err) {
                } else {
                    console.log(res);
                    setwordList(res.s);
                }
            });
        }
    }
    function inputChange(e) {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        jsonPWord(inputValue);
    }, [inputValue]);
    //回车/点击联想词，跳转至搜索页面
    function jump(word) {
        var a = document.createElement("a");
        a.setAttribute("href", `${openUrl}${word}`);
        document.body.appendChild(a);
        a.click();
    }
    return (
        <>
            <input
                className="input_searchInput"
                type="text"
                placeholder="输入并搜索..."
                onInput={inputChange}
                value={inputValue}
                onKeyDown={(e) => {
                    if (e.keyCode === 13) return jump(inputValue, e);
                }}
            />
            {inputValue && (
                <div className="div_searchWord_wrapper">
                    {wordList.map((item) => {
                        return (
                            <li key={item} onClick={(e) => jump(item, e)}>
                                {item}
                            </li>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default useInput;
