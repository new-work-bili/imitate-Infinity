// const initDatas = {
//     webItem: [
//         {
//             name: "哔哩哔哩",
//             iconUrl:
//                 "https://infinityicon.infinitynewtab.com/user-share-icon/d8b62f4d64bda8800b1c788cd5ba3c68.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim",
//             url: "https://www.bilibili.com/",
//         },
//     ],
// };
// const BottomReducer = (state = initDatas, action) => {
//     switch (action.type) {
//         default:
//             return state;
//             break;
//     }
// };

// export default BottomReducer;

// const initialTodoState = [
//     {
//         id: 1,
//         text: "你好, 图雀",
//         completed: false,
//     },
//     {
//         id: 2,
//         text: "我是一只小小小小图雀",
//         completed: false,
//     },
//     {
//         id: 3,
//         text: "小若燕雀，亦可一展宏图！",
//         completed: false,
//     },
// ];

// const initialTodoState = {
//     a: 1,
// };

const initialTodoState = "2";
const todos = (state = initialTodoState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            // return [
            //     ...state,
            //     {
            //         id: action.id,
            //         text: action.text,
            //         completed: false,
            //     },
            // ];
            return "d";
        }

        // case "TOGGLE_TODO": {
        //     return state.map((todo) =>
        //         todo.id === action.id
        //             ? { ...todo, completed: !todo.completed }
        //             : todo
        //     );
        // }

        default:
            console.log(state);
            return state;
    }
};

export default todos;
