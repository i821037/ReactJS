/// <reference path="../typings/tsd.d.ts" />  
// 以為加上這行，就可以直接寫 import * as React from 'React'
//import * as React from '../typings/react/index'; // 不寫也可以，寫了執行不過....，直接寫'react'還是不行
//import * as ReactDOM from '../typings/react-dom/index'; // 不寫也可以
ReactDOM.render(React.createElement(AnswerMultipleChoiceQuestion, { label: "Here" }), document.getElementById('content'));
//# sourceMappingURL=index.js.map