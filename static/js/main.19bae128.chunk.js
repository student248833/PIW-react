(this.webpackJsonplab4=this.webpackJsonplab4||[]).push([[0],{25:function(e,t,r){},26:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r.n(a),n=r(19),o=r.n(n),f=(r(25),r(26),r(8)),i=r(9),c=r(12),l=r(11),d=r(2),h=r(0),_=function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"offer",children:[Object(h.jsxs)("div",{className:"name",children:[" ",e.name," "]}),Object(h.jsxs)("div",{className:"text",children:[" ",e.text," "]}),Object(h.jsxs)("div",{className:"email",children:[" ",e.email," "]}),Object(h.jsxs)("div",{className:"tags",children:[" ",e.tags," "]})]})})},j=function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("b",{children:[" (",e.text,") "]})})};function b(e){var t=0;if(0==e.length)return t;for(var r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return t}var u=function(e){for(var t=[],r=0,a=0;a<e.offers.offers_name.length;a++)"true"===e.offers.offers_visible[a]&&(t.push(Object(h.jsx)(_,{name:e.offers.offers_name[a],text:e.offers.offers_text[a],email:e.offers.offers_email[a],tags:e.offers.offers_tags[a],shown:e.offers.offers_visible[a]},b(e.offers.offers_name[a]))),r++);return Object(h.jsxs)("div",{className:"offers-div",children:[Object(h.jsxs)("h3",{children:["Lista ofert ",Object(h.jsx)(j,{text:r})]}),Object(h.jsx)("ul",{children:t})]})},x=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(f.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={text:""},e.onChange=function(t){e.setState({text:t.target.value})},e.append=function(){e.props.adder(),e.forceUpdate()},e.handleNewEntry_name=function(t){e.props.offers.new_offer_name_value=t.target.value,e.forceUpdate()},e.handleNewEntry_text=function(t){e.props.offers.new_offer_text_value=t.target.value,e.forceUpdate()},e.handleNewEntry_email=function(t){e.props.offers.new_offer_email_value=t.target.value,e.forceUpdate()},e.handleNewEntry_tags=function(t){e.props.offers.new_offer_tags_value=t.target.value,e.forceUpdate()},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"offer-add-div",id:"offer-div",children:[Object(h.jsx)("h2",{children:this.props.text_add_offer}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"new_offer_name",children:"Imi\u0119 i nazwisko:"}),Object(h.jsx)("input",{type:"text",name:"new_offer_name",value:this.props.offers.new_offer_name_value,onChange:this.handleNewEntry_name})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"new_offer_text",children:"Tre\u015b\u0107 oferty:"}),Object(h.jsx)("input",{type:"text",name:"new_offer_text",value:this.props.offers.new_offer_text_value,onChange:this.handleNewEntry_text})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"new_offer_email",children:"Email:"}),Object(h.jsx)("input",{type:"text",name:"new_offer_email",value:this.props.offers.new_offer_email_value,onChange:this.handleNewEntry_email})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{htmlFor:"new_offer_tags",children:"Tagi:"}),Object(h.jsx)("input",{type:"text",name:"new_offer_tags",value:this.props.offers.new_offer_tags_value,onChange:this.handleNewEntry_tags})]}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"button",name:"add_offer",value:this.props.offers.add_offer_button_text,onClick:this.append})})]})]}),this.props.offers.showWarning&&Object(h.jsx)("h1",{style:{color:"red"},children:this.props.offers.errorMessage}),this.props.offers.showWarning2&&Object(h.jsx)("h1",{style:{color:"red"},children:this.props.offers.errorMessage2})]})}}]),r}(a.Component),p=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(f.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search_box_value:"",radio_state:"",search_text:"Wyszukiwarka"},e.handleNewEntry_search=function(t){e.setState({search_box_value:t.target.value});for(var r=Array(e.props.offers.offers_text.length),a=0;a<e.props.offers.offers_text.length;a++){var s;if("name"===e.state.radio_state)s=e.props.offers.offers_name[a];else if("text"===e.state.radio_state)s=e.props.offers.offers_text[a];else if("email"===e.state.radio_state)s=e.props.offers.offers_email[a];else{if("tags"!==e.state.radio_state)return;s=e.props.offers.offers_tags[a]}s.toLowerCase().includes(t.target.value.toLowerCase())?r[a]="true":r[a]="false"}for(a=0;a<e.props.offers.offers_text.length;a++)e.props.offers.offers_visible[a]=r[a];e.props.main.forceUpdate()},e.handleChangeRadio_name=function(t){e.setState({radio_state:"name",search_box_value:""});for(var r=0;r<e.props.offers.offers_text.length;r++)e.props.offers.offers_visible[r]="true";e.props.main.forceUpdate()},e.handleChangeRadio_text=function(t){e.setState({radio_state:"text",search_box_value:""});for(var r=0;r<e.props.offers.offers_text.length;r++)e.props.offers.offers_visible[r]="true";e.props.main.forceUpdate()},e.handleChangeRadio_email=function(t){e.setState({radio_state:"email",search_box_value:""});for(var r=0;r<e.props.offers.offers_text.length;r++)e.props.offers.offers_visible[r]="true";e.props.main.forceUpdate()},e.handleChangeRadio_tags=function(t){e.setState({radio_state:"tags",search_box_value:""});for(var r=0;r<e.props.offers.offers_text.length;r++)e.props.offers.offers_visible[r]="true";e.props.main.forceUpdate()},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"search-div",children:[Object(h.jsx)("h2",{children:this.state.search_text}),Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",name:"search_box",id:"search-box",value:this.state.search_box_value,onChange:this.handleNewEntry_search})}),Object(h.jsxs)("div",{id:"radiobuttons",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",id:"rdb-name",name:"search_rdb",onClick:this.handleChangeRadio_name}),Object(h.jsx)("label",{htmlFor:"rdb-name",children:"Imi\u0119 i nazwisko"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",id:"rdb-text",name:"search_rdb",onClick:this.handleChangeRadio_text}),Object(h.jsx)("label",{htmlFor:"rdb-text",children:"Tre\u015b\u0107 oferty"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",id:"rdb-email",name:"search_rdb",onClick:this.handleChangeRadio_email}),Object(h.jsx)("label",{htmlFor:"rdb-email",children:"Email"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",id:"rdb-tags",name:"search_rdb",onClick:this.handleChangeRadio_tags}),Object(h.jsx)("label",{htmlFor:"rdb-tags",children:"Tagi"})]})]})]})})}},{key:"componentWillMount",value:function(){for(var e=0;e<this.props.offers.offers_text.length;e++)this.props.offers.offers_visible[e]="true";this.props.main.forceUpdate()}}]),r}(s.a.Component),m=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(f.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={offers_name:["Student248833","Andrzej92","Henryk95"],offers_text:["Wszystko czego dzi\u015b chc\u0119 to zaliczenie lab z PIW :)","Czy kto\u015b wie jak wyj\u015b\u0107 z vima?","Szukam osoby do startupu w j\u0119zyku C++, kontakt priv"],offers_email:["248833@poczta_studencka","andrzej92@skrzynka","henryk95@totally-not-a-scam"],offers_tags:["PIWo","vim","c++ startup"],offers_visible:["true","true","true"],new_offer_name_value:"",new_offer_text_value:"",new_offer_email_value:"",new_offer_tags_value:"",add_offer_button_text:"Dodaj",showWarning:!1,showWarning2:!1,errorMessage:"U\u017cytkownik ju\u017c istnieje",errorMessage2:"Pola nie mog\u0105 by\u0107 puste"},e.addNew=function(){e.state.offers_name.includes(e.state.new_offer_name_value)?e.setState({showWarning:!0,showWarning2:!1}):e.state.new_offer_name_value.trim()&&e.state.new_offer_text_value.trim()&&e.state.new_offer_email_value.trim()&&e.state.new_offer_tags_value.trim()?e.setState({offers_name:e.state.offers_name.concat(e.state.new_offer_name_value),offers_text:e.state.offers_text.concat(e.state.new_offer_text_value),offers_email:e.state.offers_email.concat(e.state.new_offer_email_value),offers_tags:e.state.offers_tags.concat(e.state.new_offer_tags_value),offers_visible:e.state.offers_visible.concat("true"),new_offer_name_value:"",new_offer_text_value:"",new_offer_email_value:"",new_offer_tags_value:"",showWarning:!1,showWarning2:!1}):e.setState({showWarning:!1,showWarning2:!0})},e}return Object(i.a)(r,[{key:"render",value:function(){return Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",exact:!0,children:Object(h.jsxs)("section",{children:[Object(h.jsx)(p,{offers:this.state,main:this}),Object(h.jsx)(u,{offers:this.state,toggler:this.toggleItem})]})}),Object(h.jsx)(d.a,{path:"/new",children:Object(h.jsx)("section",{children:Object(h.jsx)(x,{offers:this.state,text_add_offer:"Dodaj ofert\u0119",adder:this.addNew})})}),Object(h.jsx)(d.a,{children:Object(h.jsx)("section",{children:Object(h.jsx)("h1",{children:"Error 404 - not found"})})})]})}}]),r}(a.Component),v=(r(33),function(){return Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Tinder do projekt\xf3w"}),Object(h.jsx)("h2",{children:"Przegl\u0105danie i wyszukiwanie"})]})}}),Object(h.jsx)(d.a,{path:"/new",render:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Tinder do projekt\xf3w"}),Object(h.jsx)("h2",{children:"Dodawanie oferty"})]})}})]})}),O=r(10);var g=function(){return Object(h.jsxs)(O.a,{basename:"/PIW-react",children:[Object(h.jsx)("header",{children:Object(h.jsx)(v,{})}),Object(h.jsxs)("main",{children:[Object(h.jsxs)("nav",{children:[Object(h.jsx)(O.b,{to:"/",exact:!0,children:"Lista wszytkich"}),Object(h.jsx)(O.b,{to:"/new",children:"Dodaj nowy"})]}),Object(h.jsx)(m,{})]}),Object(h.jsx)("footer",{children:"Student248833"})]})};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.19bae128.chunk.js.map