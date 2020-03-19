(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(44)},29:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);n(45);var a,r,o=n(0),c=n.n(o),s=n(18),u=n.n(s),l=n(49),i=n(2),m=n(3),h=n(5),d=n(4),f=n(6),p={API_ENPOINT:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_ENDPOINT,TOKEN_KEY:"blogful-client-auth-token"},g=n(19),E=n.n(g),b={saveAuthToken:function(e){window.localStorage.setItem(p.TOKEN_KEY,e)},getAuthToken:function(){return window.localStorage.getItem(p.TOKEN_KEY)},clearAuthToken:function(){window.localStorage.removeItem(p.TOKEN_KEY)},hasAuthToken:function(){return!!b.getAuthToken()},parseJwt:function(e){return E()(e)},parseAuthToken:function(){var e=b.getAuthToken();return e?b.parseJwt(e):void 0},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=b._getMsUntilExpiry(b.parseAuthToken());a=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(a)}},v=b,k={postUser:function(e){return fetch("".concat(p.API_ENDPOINT,"/api/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postLogin:function(e){var t=e.username,n=e.password;return fetch("".concat(p.API_ENDPOINT,"/api/auth/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},refreshToken:function(){return fetch("".concat(p.API_ENDPOINT,"/api/auth/token"),{method:"PUT",headers:{authorization:"Bearer ".concat(v.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},O=null,j=["mousedown","mousemove","keypress","scroll","touchstart"],y={setIdleCallback:function(e){O=e},resetIdleTimer:function(e){clearTimeout(r),r=setTimeout(O,3e5)},regiserIdleTimerResets:function(){j.forEach(function(e){return document.addEventListener(e,y.resetIdleTimer,!0)})},unRegisterIdleResets:function(){clearTimeout(r),j.forEach(function(e){return document.removeEventListener(e,y.resetIdleTimer,!0)})}},w=y,x=n(13),T=n.n(x),N=n(14),C={getLang:function(){return fetch("".concat(p.API_ENDPOINT,"/api/language"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(v.getAuthToken())}}).then(function(e){return e.json()}).then(function(e){return e})},getHead:function(){return fetch("".concat(p.API_ENDPOINT,"/api/language/head"),{method:"GET",headers:{"content-type":"applicatopn/json",authorization:"Bearer ".concat(v.getAuthToken())}}).then(function(e){return e.json()}).then(function(e){return e})},postGuess:function(e){return fetch("".concat(p.API_ENDPOINT,"/api/language/guess"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(v.getAuthToken())},body:JSON.stringify({guess:e})}).then(function(e){return e.json()}).then(function(e){return e})}},S=c.a.createContext({error:null,language:{},words:[],setContext:function(){},head:{},getHead:function(){},feedbackRes:{},nextWord:function(){},feedback:null,guess:"",setGuess:function(){},feedbackFalse:function(){}}),I=S,L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).giveFeedback=function(){n.setState({feedback:!0})},n.nextWord=function(){n.setState({head:{nextWord:n.state.feedbackRes.nextWord,totalScore:n.state.feedbackRes.totalScore,wordCorrectCount:n.state.feedbackRes.wordCorrectCount,wordIncorrectCount:n.state.feedbackRes.wordIncorrectCount},feedback:!1})},n.getHead=function(){C.getHead().then(function(e){n.setState({head:e})})},n.setGuess=function(e){n.setState({guess:e})},n.feedbackFalse=function(){n.setState({feedback:!1})},n.setContext=Object(N.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getLanguage().then(function(e){return n.setState({error:null,language:e.language,words:e.words})});case 2:n.getHead();case 3:case"end":return e.stop()}},e)})),n.setFeedback=function(e){n.setState({feedbackRes:e})},n.getLanguage=function(){return fetch("".concat(p.API_ENDPOINT,"/language"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(v.getAuthToken())}}).then(function(e){return e.json()}).then(function(e){return e})},n.state={error:null,language:{id:0,name:"placeholder",user_id:0,head:1,total_score:0},setContext:function(){},words:[],head:{},getHead:function(){},feedbackRes:{nextWord:"",wordCorrectCount:0,wordIncorrectCount:0,totalScore:0,answer:"",isCorrect:!1,guess:"",setGuess:function(){}},nextWord:n.nextWord,giveFeedback:n.giveFeedback,setFeedback:function(){},feedback:!1,feedbackFalse:function(){}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e={error:this.state.error,language:this.state.language,words:this.state.words,head:this.state.head,setContext:this.setContext,getHead:this.getHead,nextWord:this.state.nextWord,giveFeedback:this.state.giveFeedback,feedbackRes:this.state.feedbackRes,setFeedback:this.setFeedback,feedback:this.state.feedback,guess:this.state.guess,setGuess:this.setGuess,feedbackFalse:this.feedbackFalse};return c.a.createElement(S.Provider,{value:e},this.props.children)}}]),t}(c.a.Component),A=c.a.createContext({user:{},error:null,setError:function(){},clearError:function(){},setUser:function(){},processLogin:function(){},processLogout:function(){}}),R=A,P=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setUser=function(e){n.setState({user:e})},n.setContent=function(){L.initializeContent()},n.processLogin=function(e){v.saveAuthToken(e);var t=v.parseAuthToken();n.setUser({id:t.user_id,name:t.name,username:t.sub}),w.regiserIdleTimerResets(),v.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})},n.processLogout=function(){v.clearAuthToken(),v.clearCallbackBeforeExpiry(),w.unRegisterIdleResets(),n.setUser({})},n.logoutBecauseIdle=function(){v.clearAuthToken(),v.clearCallbackBeforeExpiry(),w.unRegisterIdleResets(),n.setUser({idle:!0})},n.fetchRefreshToken=function(){k.refreshToken().then(function(e){v.saveAuthToken(e.authToken),v.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})}).catch(function(e){n.setError(e)})};var a={user:{},error:null},r=v.parseAuthToken();return r&&(a.user={id:r.user_id,name:r.name,username:r.sub}),n.state=a,w.setIdleCallback(n.logoutBecauseIdle),n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.hasAuthToken()&&(w.regiserIdleTimerResets(),v.queueCallbackBeforeExpiry(function(){e.fetchRefreshToken()}))}},{key:"componentWillUnmount",value:function(){w.unRegisterIdleResets(),v.clearCallbackBeforeExpiry()}},{key:"render",value:function(){var e={user:this.state.user,error:this.state.error,setError:this.setError,clearError:this.clearError,setUser:this.setUser,processLogin:this.processLogin,processLogout:this.processLogout};return c.a.createElement(A.Provider,{value:e},this.props.children)}}]),t}(o.Component),F=n(51),D=n(50),_=n(47),W=(n(29),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLogoutClick=function(){n.context.processLogout()},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"renderLogoutLink",value:function(){return c.a.createElement("div",null,c.a.createElement("span",null,this.context.user.name),c.a.createElement("nav",null,c.a.createElement(_.a,{onClick:this.handleLogoutClick,to:"/login"},"Logout")))}},{key:"renderLoginLink",value:function(){return c.a.createElement("nav",null,c.a.createElement(_.a,{to:"/login"},"Login ")," ",c.a.createElement(_.a,{to:"/register"},"Sign up"))}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement(_.a,{to:"/"},"Espanolingo")),v.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink())}}]),t}(o.Component));W.contextType=R;var B=W,U=(n(32),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"stats"},c.a.createElement("p",null,"Your total score is: ",c.a.createElement("strong",null,this.context.head.totalScore)),c.a.createElement("p",null,"You have answered this word correctly ",c.a.createElement("strong",null,this.context.head.wordCorrectCount)," times."),c.a.createElement("p",null,"You have answered this word incorrectly ",c.a.createElement("strong",null,this.context.head.wordIncorrectCount)," times."))}}]),t}(c.a.Component));U.contextType=I;var G=U,q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",null,this.context.user.name&&c.a.createElement(G,null))}}]),t}(c.a.Component);q.contextType=R;var H=q,Y=n(9),K=n(48);function J(e){var t=e.component,n=Object(Y.a)(e,["component"]),a=t;return c.a.createElement(D.a,Object.assign({},n,{render:function(e){return c.a.createElement(R.Consumer,null,function(t){return c.a.createElement(I.Consumer,null,function(n){return t.user.id?c.a.createElement(a,Object.assign({},e,{user:t,content:n})):c.a.createElement(K.a,{to:{pathname:t.user.idle?"/login":"/register",state:{from:e.location}}})})})}}))}function M(e){var t=e.component,n=Object(Y.a)(e,["component"]),a=t;return c.a.createElement(D.a,Object.assign({},n,{render:function(e){return c.a.createElement(R.Consumer,null,function(t){return t.user.id?c.a.createElement(K.a,{to:"/"}):c.a.createElement(a,e)})}}))}var z=n(12),V=n.n(z);n(34);function $(e){var t=e.className,n=Object(Y.a)(e,["className"]);return c.a.createElement("label",Object.assign({className:V()("Label",t)},n))}var Q=c.a.forwardRef(function(e,t){var n=e.className,a=Object(Y.a)(e,["className"]);return c.a.createElement("input",Object.assign({className:V()("Input",n),type:"text",ref:t},a))});function X(e){var t=e.className,n=Object(Y.a)(e,["className"]);return c.a.createElement("span",Object.assign({className:V()("Required",t)},n),"*")}n(35);var Z=c.a.forwardRef(function(e,t){var n=e.className,a=Object(Y.a)(e,["className"]);return c.a.createElement("button",Object.assign({className:V()("Button",n),ref:t},a))}),ee=(n(36),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.username,o=t.password;k.postUser({name:a.value,username:r.value,password:o.value}).then(function(e){a.value="",r.value="",o.value="",n.props.onRegistrationSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("div",null,c.a.createElement($,{htmlFor:"registration-name-input"},"Enter your name",c.a.createElement(X,null)),c.a.createElement(Q,{ref:this.firstInput,id:"registration-name-input",name:"name",required:!0})),c.a.createElement("div",null,c.a.createElement($,{htmlFor:"registration-username-input"},"Choose a username",c.a.createElement(X,null)),c.a.createElement(Q,{id:"registration-username-input",name:"username",required:!0})),c.a.createElement("div",null,c.a.createElement($,{htmlFor:"registration-password-input"},"Choose a password",c.a.createElement(X,null)),c.a.createElement(Q,{id:"registration-password-input",name:"password",type:"password",required:!0})),c.a.createElement("footer",null,c.a.createElement(Z,{type:"submit"},"Sign up")," ",c.a.createElement(_.a,{to:"/login"},"Already have an account?")))}}]),t}(o.Component));ee.defaultProps={onRegistrationSuccess:function(){}};var te=ee,ne=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleRegistrationSuccess=function(){n.props.history.push("/login")},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("p",null,"Practice learning a language with the spaced reptition revision technique."),c.a.createElement("h2",null,"Sign up"),c.a.createElement(te,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(o.Component);ne.defaultProps={history:{push:function(){}}};var ae=ne,re=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,a=t.username,r=t.password;n.setState({error:null}),k.postLogin({username:a.value,password:r.value}).then(function(e){a.value="",r.value="",n.context.processLogin(e.authToken),n.props.onLoginSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{className:"LoginForm",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("div",{className:"regEntryFields"},c.a.createElement($,{htmlFor:"login-username-input"},"Username"),c.a.createElement(Q,{ref:this.firstInput,id:"login-username-input",name:"username",required:!0})),c.a.createElement("div",{className:"regEntryFields"},c.a.createElement($,{htmlFor:"login-password-input"},"Password"),c.a.createElement(Q,{id:"login-password-input",name:"password",type:"password",required:!0})),c.a.createElement(Z,{type:"submit"},"Login"),c.a.createElement("br",null)," ",c.a.createElement(_.a,{to:"/register"},"New learner? Sign up here!"))}}]),t}(o.Component);re.defaultProps={onLoginSuccess:function(){}},re.contextType=R;var oe=re,ce=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleLoginSuccess=function(){var e=n.props,t=e.location,a=e.history,r=(t.state||{}).from||"/";a.push(r)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"viewport"},c.a.createElement("h2",null,"Login"),c.a.createElement(oe,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(o.Component);ce.defaultProps={location:{},history:{push:function(){}}};var se=ce,ue=(n(37),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).noFeedback=function(){n.context.feedbackFalse()},n.state={language:"",words:["Placeholder"]},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"dashboardContainer"},c.a.createElement("h2",null,"Welcome back, ",this.props.user.user.name||"placeholder","!",c.a.createElement("br",null),"Language: ",void 0!==this.context.language.name&&this.context.language.name||"placeholder",c.a.createElement("br",null),"Total correct answers: ",this.context.head.totalScore||"0"," "),c.a.createElement(_.a,{to:"/learn"},c.a.createElement("button",{onClick:this.noFeedback},"Start practicing")),c.a.createElement("div",{className:"infoArea"},c.a.createElement("div",{className:"infoHeader"},c.a.createElement("h3",null,"Words to practice")),c.a.createElement("div",{className:"wordsHolder"},c.a.createElement("div",{className:"words"},c.a.createElement("h4",null,this.context.language.name||"Language"),c.a.createElement("ul",null,this.context.words.map(function(e,t){return c.a.createElement("li",{key:t},c.a.createElement("h4",null,e.original),c.a.createElement("div",null,"correct answer count: ",e.correct_count,c.a.createElement("br",null),"incorrect answer count: ",e.incorrect_count))})||this.state.words[0])))))}}]),t}(c.a.Component));ue.defaultProps={language:{name:"Default Language",total_score:0},user:{user:{name:"Default username"}}},ue.contextType=I;var le=ue,ie=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.context.setContext()}},{key:"render",value:function(){return c.a.createElement("section",{className:"viewport"},c.a.createElement(le,{content:this.props.content,user:this.props.user}))}}]),t}(o.Component);ie.contextType=I;var me=ie,he=(n(38),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleNext=function(e){e.preventDefault(),n.context.nextWord()},n.state={},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"correct"},c.a.createElement("div",{className:"DisplayScore"},c.a.createElement("p",null,"Total Score: ",this.context.feedbackRes.totalScore)),c.a.createElement("h3",null,"Yay! You were correct! :D"),c.a.createElement("div",{className:"DisplayFeedback"},c.a.createElement("p",null,"The correct translation for ",c.a.createElement("strong",null,this.context.head.nextWord)," was ",c.a.createElement("strong",null,this.context.feedbackRes.answer)," and you chose ",c.a.createElement("strong",null,this.context.guess),"!")),c.a.createElement("button",{onClick:this.handleNext},"Try another word!"))}}]),t}(c.a.Component));he.contextType=I;var de=he,fe=(n(39),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleNext=function(e){e.preventDefault(),n.context.nextWord()},n.state={},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("feedback response: ",this.context.feedbackRes),c.a.createElement("div",{className:"incorrect"},c.a.createElement("div",{className:"DisplayScore"},c.a.createElement("p",null,"Your total score is: ",this.context.feedbackRes.totalScore)),c.a.createElement("h3",null,"Good try, but not quite right :("),c.a.createElement("div",{className:"DisplayFeedback"},c.a.createElement("p",null,"The correct translation for ",c.a.createElement("strong",null,this.context.head.nextWord)," was ",c.a.createElement("strong",null,this.context.feedbackRes.answer)," and you chose ",c.a.createElement("strong",null,this.context.guess),"!")),c.a.createElement("button",{onClick:this.handleNext},"Try another word!"))}}]),t}(c.a.Component));fe.contextType=I;var pe=fe,ge=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,this.props.correct&&c.a.createElement(de,null),!this.props.correct&&c.a.createElement(pe,null))}}]),t}(c.a.Component),Ee=(n(40),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleSubmit=function(){var e=Object(N.a)(T.a.mark(function e(t){var a,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state.guess.toLowerCase(),e.next=4,n.context.setGuess(a);case 4:return e.next=6,C.postGuess(a);case 6:return r=e.sent,e.next=9,n.context.setFeedback(r);case 9:n.setState({guess:""}),n.setState({correct:r.isCorrect}),n.context.giveFeedback();case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.changeGuess=function(e){e.preventDefault(),n.setState({guess:e.target.value})},n.state={guess:"",feedback:!1,correct:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.context.getHead()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"infoArea"},c.a.createElement("div",{className:"infoHeader"},c.a.createElement("div",{className:"stack"},c.a.createElement("h2",null,"Translate the word:"),c.a.createElement("span",null,this.context.head.nextWord)),c.a.createElement("br",null)),!this.context.feedback&&c.a.createElement("div",{className:"wordsHolder"},c.a.createElement("div",{className:"guess"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"learn-guess-input"},"What's the translation for this word?"),c.a.createElement("input",{id:"learn-guess-input",value:this.state.guess,onChange:this.changeGuess,type:"text",autocomplete:"off",required:!0}),c.a.createElement("button",{type:"submit"},"Submit your answer")))),this.context.feedback&&c.a.createElement(ge,{correct:this.state.correct})))}}]),t}(c.a.Component));Ee.contextType=I;var be=Ee,ve=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={currentWord:{},language:{}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"viewport"},c.a.createElement(be,null))}}]),t}(o.Component),ke=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"viewport"},c.a.createElement("h2",null,"404 - Page not found"),c.a.createElement("p",null,"Try going back to your previous page."),c.a.createElement(_.a,{to:"/"},c.a.createElement("button",null,"Go home!")," "))}}]),t}(o.Component),Oe=(n(41),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.hasError;return c.a.createElement("div",{className:"App"},c.a.createElement(B,null),c.a.createElement("main",null,e&&c.a.createElement("div",{className:"error"},c.a.createElement("p",null,"There was an error! Oh no!")),c.a.createElement(F.a,null,c.a.createElement(J,{exact:!0,path:"/",component:me}),c.a.createElement(J,{path:"/learn",component:ve}),c.a.createElement(M,{path:"/register",component:ae}),c.a.createElement(M,{path:"/login",component:se}),c.a.createElement(D.a,{component:ke}))),c.a.createElement(H,null))}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),t}(o.Component));n(42),n(43),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(c.a.createElement(l.a,null,c.a.createElement(P,null,c.a.createElement(L,null,c.a.createElement("div",{className:"o o1"}),c.a.createElement("div",{className:"o o2"}),c.a.createElement("div",{className:"o o3"}),c.a.createElement("div",{className:"o o4"}),c.a.createElement(Oe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.ca535255.chunk.js.map