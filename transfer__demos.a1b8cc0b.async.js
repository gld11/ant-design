"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[2893],{979331:function(J,C,e){e.d(C,{Z:function(){return G}});var Z=e(97857),m=e.n(Z),P=e(9783),n=e.n(P),j=e(805574),O=e.n(j),H=e(513769),B=e.n(H),W=e(667294),I=e(100628),E=e.n(I),S=e(294184),y=e.n(S),R=e(33413),T=e(189265),U=e(73287),k=e(147315),A=e(947170),N=e(510274),D=e(548073),l=e(141035),s=e(986943),a=function(t){var o,i,f,g,d,_=t.componentCls,u=t.trackHeightSM,v=t.trackPadding,p=t.trackMinWidthSM,z=t.innerMinMarginSM,M=t.innerMaxMarginSM,Q=t.handleSizeSM,F="".concat(_,"-inner");return n()({},_,n()({},"&".concat(_,"-small"),(d={minWidth:p,height:u,lineHeight:"".concat(u,"px")},n()(d,"".concat(_,"-inner"),(o={paddingInlineStart:M,paddingInlineEnd:z},n()(o,"".concat(F,"-checked"),{marginInlineStart:"calc(-100% + ".concat(Q+v*2,"px - ").concat(M*2,"px)"),marginInlineEnd:"calc(100% - ".concat(Q+v*2,"px + ").concat(M*2,"px)")}),n()(o,"".concat(F,"-unchecked"),{marginTop:-u,marginInlineStart:0,marginInlineEnd:0}),o)),n()(d,"".concat(_,"-handle"),{width:Q,height:Q}),n()(d,"".concat(_,"-loading-icon"),{top:(Q-t.switchLoadingIconSize)/2,fontSize:t.switchLoadingIconSize}),n()(d,"&".concat(_,"-checked"),(f={},n()(f,"".concat(_,"-inner"),(i={paddingInlineStart:z,paddingInlineEnd:M},n()(i,"".concat(F,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),n()(i,"".concat(F,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(Q+v*2,"px + ").concat(M*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(Q+v*2,"px - ").concat(M*2,"px)")}),i)),n()(f,"".concat(_,"-handle"),{insetInlineStart:"calc(100% - ".concat(Q+v,"px)")}),f)),n()(d,"&:not(".concat(_,"-disabled):active"),(g={},n()(g,"&:not(".concat(_,"-checked) ").concat(F),n()({},"".concat(F,"-unchecked"),{marginInlineStart:t.marginXXS/2,marginInlineEnd:-t.marginXXS/2})),n()(g,"&".concat(_,"-checked ").concat(F),n()({},"".concat(F,"-checked"),{marginInlineStart:-t.marginXXS/2,marginInlineEnd:t.marginXXS/2})),g)),d)))},r=function(t){var o,i=t.componentCls,f=t.handleSize;return n()({},i,(o={},n()(o,"".concat(i,"-loading-icon").concat(t.iconCls),{position:"relative",top:(f-t.fontSize)/2,color:t.switchLoadingIconColor,verticalAlign:"top"}),n()(o,"&".concat(i,"-checked ").concat(i,"-loading-icon"),{color:t.switchColor}),o))},h=function(t){var o,i,f=t.componentCls,g=t.motion,d=t.trackPadding,_=t.handleBg,u=t.handleShadow,v=t.handleSize,p="".concat(f,"-handle");return n()({},f,(i={},n()(i,p,{position:"absolute",top:d,insetInlineStart:d,width:v,height:v,transition:"all ".concat(t.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:_,borderRadius:v/2,boxShadow:u,transition:"all ".concat(t.switchDuration," ease-in-out"),content:'""'}}),n()(i,"&".concat(f,"-checked ").concat(p),{insetInlineStart:"calc(100% - ".concat(v+d,"px)")}),n()(i,"&:not(".concat(f,"-disabled):active"),g?(o={},n()(o,"".concat(p,"::before"),{insetInlineEnd:t.switchHandleActiveInset,insetInlineStart:0}),n()(o,"&".concat(f,"-checked ").concat(p,"::before"),{insetInlineEnd:0,insetInlineStart:t.switchHandleActiveInset}),o):{}),i))},$=function(t){var o,i,f,g,d=t.componentCls,_=t.trackHeight,u=t.trackPadding,v=t.innerMinMargin,p=t.innerMaxMargin,z=t.handleSize,M="".concat(d,"-inner");return n()({},d,(g={},n()(g,M,(o={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:p,paddingInlineEnd:v,transition:"padding-inline-start ".concat(t.switchDuration," ease-in-out, padding-inline-end ").concat(t.switchDuration," ease-in-out")},n()(o,"".concat(M,"-checked, ").concat(M,"-unchecked"),{display:"block",color:t.colorTextLightSolid,fontSize:t.fontSizeSM,transition:"margin-inline-start ".concat(t.switchDuration," ease-in-out, margin-inline-end ").concat(t.switchDuration," ease-in-out"),pointerEvents:"none"}),n()(o,"".concat(M,"-checked"),{marginInlineStart:"calc(-100% + ".concat(z+u*2,"px - ").concat(p*2,"px)"),marginInlineEnd:"calc(100% - ".concat(z+u*2,"px + ").concat(p*2,"px)")}),n()(o,"".concat(M,"-unchecked"),{marginTop:-_,marginInlineStart:0,marginInlineEnd:0}),o)),n()(g,"&".concat(d,"-checked ").concat(M),(i={paddingInlineStart:v,paddingInlineEnd:p},n()(i,"".concat(M,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),n()(i,"".concat(M,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(z+u*2,"px + ").concat(p*2,"px)"),marginInlineEnd:"calc(-100% + ".concat(z+u*2,"px - ").concat(p*2,"px)")}),i)),n()(g,"&:not(".concat(d,"-disabled):active"),(f={},n()(f,"&:not(".concat(d,"-checked) ").concat(M),n()({},"".concat(M,"-unchecked"),{marginInlineStart:u*2,marginInlineEnd:-u*2})),n()(f,"&".concat(d,"-checked ").concat(M),n()({},"".concat(M,"-checked"),{marginInlineStart:-u*2,marginInlineEnd:u*2})),f)),g))},X=function(t){var o,i=t.componentCls,f=t.trackHeight,g=t.trackMinWidth;return n()({},i,m()(m()(m()({},(0,D.Wf)(t)),{},n()({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:g,height:f,lineHeight:"".concat(f,"px"),verticalAlign:"middle",background:t.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(t.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(i,"-disabled)"),{background:t.colorTextTertiary}),(0,D.Qy)(t)),{},(o={},n()(o,"&".concat(i,"-checked"),n()({background:t.switchColor},"&:hover:not(".concat(i,"-disabled)"),{background:t.colorPrimaryHover})),n()(o,"&".concat(i,"-loading, &").concat(i,"-disabled"),{cursor:"not-allowed",opacity:t.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),n()(o,"&".concat(i,"-rtl"),{direction:"rtl"}),o)))},x=(0,l.Z)("Switch",function(c){var t=(0,s.TS)(c,{switchDuration:c.motionDurationMid,switchColor:c.colorPrimary,switchDisabledOpacity:c.opacityLoading,switchLoadingIconSize:c.fontSizeIcon*.75,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(c.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[X(t),$(t),h(t),r(t),a(t)]},function(c){var t=c.fontSize,o=c.lineHeight,i=c.controlHeight,f=c.colorWhite,g=t*o,d=i/2,_=2,u=g-_*2,v=d-_*2;return{trackHeight:g,trackHeightSM:d,trackMinWidth:u*2+_*4,trackMinWidthSM:v*2+_*2,trackPadding:_,handleBg:f,handleSize:u,handleSizeSM:v,handleShadow:"0 2px 4px 0 ".concat(new N.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:u/2,innerMaxMargin:u+_+_*2,innerMinMarginSM:v/2,innerMaxMarginSM:v+_+_*2}}),w=e(785893),b=["prefixCls","size","disabled","loading","className","rootClassName","style"],K=W.forwardRef(function(c,t){var o,i=c.prefixCls,f=c.size,g=c.disabled,d=c.loading,_=c.className,u=c.rootClassName,v=c.style,p=B()(c,b);if(!1)var z;var M=W.useContext(U.E_),Q=M.getPrefixCls,F=M.direction,V=M.switch,ee=W.useContext(k.Z),q=(g!=null?g:ee)||d,L=Q("switch",i),Y=(0,w.jsx)("div",{className:"".concat(L,"-handle"),children:d&&(0,w.jsx)(E(),{className:"".concat(L,"-loading-icon")})}),ne=x(L),te=O()(ne,2),ae=te[0],oe=te[1],re=(0,A.Z)(f),se=y()(V==null?void 0:V.className,(o={},n()(o,"".concat(L,"-small"),re==="small"),n()(o,"".concat(L,"-loading"),d),n()(o,"".concat(L,"-rtl"),F==="rtl"),o),_,u,oe),_e=m()(m()({},V==null?void 0:V.style),v);return ae((0,w.jsx)(T.Z,{component:"Switch",children:(0,w.jsx)(R.Z,m()(m()({},p),{},{prefixCls:L,className:se,style:_e,disabled:q,ref:t,loadingIcon:Y}))}))});K.__ANT_SWITCH=!0;var G=K},409922:function(J,C,e){e.r(C);var Z=e(805574),m=e.n(Z),P=e(667294),n=e(988872),j=e(312328),O=e(785893),H=function(){var W=(0,P.useState)([]),I=m()(W,2),E=I[0],S=I[1],y=(0,P.useState)([]),R=m()(y,2),T=R[0],U=R[1],k=function(){for(var l=[],s=[],a=0;a<20;a++){var r={key:a.toString(),title:"content".concat(a+1),description:"description of content".concat(a+1),chosen:a%2===0};r.chosen&&l.push(r.key),s.push(r)}S(s),U(l)};(0,P.useEffect)(function(){k()},[]);var A=function(l){U(l)},N=function(l,s){var a=s.direction;return a==="left"?(0,O.jsx)(n.ZP,{size:"small",style:{float:"left",margin:5},onClick:k,children:"Left button reload"}):(0,O.jsx)(n.ZP,{size:"small",style:{float:"right",margin:5},onClick:k,children:"Right button reload"})};return(0,O.jsx)(j.Z,{dataSource:E,showSearch:!0,listStyle:{width:250,height:300},operations:["to right","to left"],targetKeys:T,onChange:A,render:function(l){return"".concat(l.title,"-").concat(l.description)},footer:N})};C.default=H},388561:function(J,C,e){e.r(C);var Z=e(719632),m=e.n(Z),P=e(805574),n=e.n(P),j=e(667294),O=e(312328),H=e(785893),B=Array.from({length:20}).map(function(E,S){return{key:S.toString(),title:"content".concat(S+1),description:"description of content".concat(S+1)}}),W=B.filter(function(E){return Number(E.key)>10}).map(function(E){return E.key}),I=function(){var S=(0,j.useState)(W),y=n()(S,2),R=y[0],T=y[1],U=(0,j.useState)([]),k=n()(U,2),A=k[0],N=k[1],D=function(r,h,$){console.log("targetKeys:",r),console.log("direction:",h),console.log("moveKeys:",$),T(r)},l=function(r,h){console.log("sourceSelectedKeys:",r),console.log("targetSelectedKeys:",h),N([].concat(m()(r),m()(h)))},s=function(r,h){console.log("direction:",r),console.log("target:",h.target)};return(0,H.jsx)(O.Z,{dataSource:B,titles:["Source","Target"],targetKeys:R,selectedKeys:A,onChange:D,onSelectChange:l,onScroll:s,render:function(r){return r.title}})};C.default=I},641708:function(J,C,e){e.r(C);var Z=e(719632),m=e.n(Z),P=e(805574),n=e.n(P),j=e(97857),O=e.n(j),H=e(513769),B=e.n(H),W=e(291966),I=e.n(W),E=e(667294),S=e(312328),y=e(631229),R=e(844183),T=e(773036),U=e(209269),k=e(979331),A=e(785893),N=["leftColumns","rightColumns"],D=function(x){var w=x.leftColumns,b=x.rightColumns,K=B()(x,N);return(0,A.jsx)(S.Z,O()(O()({},K),{},{children:function(c){var t=c.direction,o=c.filteredItems,i=c.onItemSelectAll,f=c.onItemSelect,g=c.selectedKeys,d=c.disabled,_=t==="left"?w:b,u={getCheckboxProps:function(p){return{disabled:d||p.disabled}},onSelectAll:function(p,z){var M=z.filter(function(F){return!F.disabled}).map(function(F){var V=F.key;return V}),Q=p?I()(M,g):I()(g,M);i(Q,p)},onSelect:function(p,z){var M=p.key;f(M,z)},selectedRowKeys:g};return(0,A.jsx)(y.Z,{rowSelection:u,columns:_,dataSource:o,size:"small",style:{pointerEvents:d?"none":void 0},onRow:function(p){var z=p.key,M=p.disabled;return{onClick:function(){M||d||f(z,!g.includes(z))}}}})}}))},l=["cat","dog","bird"],s=Array.from({length:20}).map(function(X,x){return{key:x.toString(),title:"content".concat(x+1),description:"description of content".concat(x+1),disabled:x%4===0,tag:l[x%3]}}),a=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(x){return(0,A.jsx)(R.Z,{children:x})}},{dataIndex:"description",title:"Description"}],r=[{dataIndex:"title",title:"Name"}],h=s.filter(function(X){return Number(X.key)>10}).map(function(X){return X.key}),$=function(){var x=(0,E.useState)(h),w=n()(x,2),b=w[0],K=w[1],G=(0,E.useState)([]),c=n()(G,2),t=c[0],o=c[1],i=function(L,Y,ne){console.log("targetKeys:",L),console.log("direction:",Y),console.log("moveKeys:",ne),K(L)},f=function(L,Y){console.log("sourceSelectedKeys:",L),console.log("targetSelectedKeys:",Y),o([].concat(m()(L),m()(Y)))},g=function(L,Y){console.log("direction:",L),console.log("target:",Y.target)},d=(0,E.useState)(!1),_=n()(d,2),u=_[0],v=_[1],p=(0,E.useState)(!1),z=n()(p,2),M=z[0],Q=z[1],F=function(L){K(L)},V=function(L){v(L)},ee=function(L){Q(L)};return(0,A.jsxs)(T.ZP,{theme:{components:{Transfer:{listWidth:40,listWidthLG:50,listHeight:30,itemHeight:20,itemPaddingBlock:10,headerHeight:18}}},children:[(0,A.jsx)(S.Z,{dataSource:s,titles:["Source","Target"],targetKeys:b,selectedKeys:t,onChange:i,onSelectChange:f,onScroll:g,render:function(L){return L.title}}),(0,A.jsx)(S.Z,{status:"error"}),(0,A.jsx)(S.Z,{status:"warning",showSearch:!0}),(0,A.jsx)(D,{dataSource:s,targetKeys:b,disabled:u,showSearch:M,onChange:F,filterOption:function(L,Y){return Y.title.indexOf(L)!==-1||Y.tag.indexOf(L)!==-1},leftColumns:a,rightColumns:r}),(0,A.jsxs)(U.Z,{style:{marginTop:16},children:[(0,A.jsx)(k.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:u,onChange:V}),(0,A.jsx)(k.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:M,onChange:ee})]})]})};C.default=$},959116:function(J,C,e){e.r(C);var Z=e(805574),m=e.n(Z),P=e(667294),n=e(312328),j=e(785893),O=function(){var B=(0,P.useState)([]),W=m()(B,2),I=W[0],E=W[1],S=(0,P.useState)([]),y=m()(S,2),R=y[0],T=y[1],U=function(){for(var D=[],l=[],s=0;s<20;s++){var a={key:s.toString(),title:"content".concat(s+1),description:"description of content".concat(s+1),chosen:s%2===0};a.chosen&&D.push(a.key),l.push(a)}E(l),T(D)};(0,P.useEffect)(function(){U()},[]);var k=function(D,l,s){console.log(D,l,s),T(D)},A=function(D){var l=(0,j.jsxs)("span",{className:"custom-item",children:[D.title," - ",D.description]});return{label:l,value:D.title}};return(0,j.jsx)(n.Z,{dataSource:I,listStyle:{width:300,height:300},targetKeys:R,onChange:k,render:A})};C.default=O},495201:function(J,C,e){e.r(C);var Z=e(805574),m=e.n(Z),P=e(667294),n=e(312328),j=e(785893),O=Array.from({length:10}).map(function(I,E){return{key:E.toString(),title:"content".concat(E+1),description:"description of content".concat(E+1)}}),H=O.filter(function(I){return Number(I.key)%3>1}).map(function(I){return I.key}),B=["Select All",function(I){var E=I.selectedCount,S=I.totalCount;return"".concat(E,"/").concat(S)}],W=function(){var E=(0,P.useState)(H),S=m()(E,2),y=S[0],R=S[1];return(0,j.jsx)(n.Z,{dataSource:O,targetKeys:y,onChange:R,render:function(U){return U.title},selectAllLabels:B})};C.default=W},736246:function(J,C,e){e.r(C);var Z=e(805574),m=e.n(Z),P=e(667294),n=e(312328),j=e(979331),O=e(785893),H=function(){var W=(0,P.useState)(!1),I=m()(W,2),E=I[0],S=I[1],y=(0,P.useState)([]),R=m()(y,2),T=R[0],U=R[1],k=(0,P.useState)([]),A=m()(k,2),N=A[0],D=A[1];(0,P.useEffect)(function(){for(var s=[],a=[],r=0;r<2e3;r++){var h={key:r.toString(),title:"content".concat(r+1),description:"description of content".concat(r+1),chosen:r%2===0};h.chosen&&s.push(h.key),a.push(h)}D(s),U(a)},[]);var l=function(a,r,h){console.log(a,r,h),D(a)};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(n.Z,{dataSource:T,targetKeys:N,onChange:l,render:function(a){return a.title},oneWay:E,pagination:!0}),(0,O.jsx)("br",{}),(0,O.jsx)(j.Z,{unCheckedChildren:"one way",checkedChildren:"one way",checked:E,onChange:S})]})};C.default=H},779410:function(J,C,e){e.r(C);var Z=e(719632),m=e.n(Z),P=e(805574),n=e.n(P),j=e(667294),O=e(312328),H=e(979331),B=e(785893),W=Array.from({length:20}).map(function(S,y){return{key:y.toString(),title:"content".concat(y+1),description:"description of content".concat(y+1),disabled:y%3<1}}),I=W.filter(function(S){return Number(S.key)%3>1}).map(function(S){return S.key}),E=function(){var y=(0,j.useState)(I),R=n()(y,2),T=R[0],U=R[1],k=(0,j.useState)([]),A=n()(k,2),N=A[0],D=A[1],l=(0,j.useState)(!1),s=n()(l,2),a=s[0],r=s[1],h=function(b,K,G){U(b),console.log("targetKeys: ",b),console.log("direction: ",K),console.log("moveKeys: ",G)},$=function(b,K){D([].concat(m()(b),m()(K))),console.log("sourceSelectedKeys: ",b),console.log("targetSelectedKeys: ",K)},X=function(b,K){console.log("direction:",b),console.log("target:",K.target)},x=function(b){r(b)};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(O.Z,{dataSource:W,titles:["Source","Target"],targetKeys:T,selectedKeys:N,onChange:h,onSelectChange:$,onScroll:X,render:function(b){return b.title},disabled:a,oneWay:!0,style:{marginBottom:16}}),(0,B.jsx)(H.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:a,onChange:x})]})};C.default=E},480209:function(J,C,e){e.r(C);var Z=e(805574),m=e.n(Z),P=e(667294),n=e(312328),j=e(785893),O=function(){var B=(0,P.useState)([]),W=m()(B,2),I=W[0],E=W[1],S=(0,P.useState)([]),y=m()(S,2),R=y[0],T=y[1],U=function(){for(var l=[],s=[],a=0;a<20;a++){var r={key:a.toString(),title:"content".concat(a+1),description:"description of content".concat(a+1),chosen:a%2===0};r.chosen&&l.push(r.key),s.push(r)}E(s),T(l)};(0,P.useEffect)(function(){U()},[]);var k=function(l,s){return s.description.indexOf(l)>-1},A=function(l){T(l)},N=function(l,s){console.log("search:",l,s)};return(0,j.jsx)(n.Z,{dataSource:I,showSearch:!0,filterOption:k,targetKeys:R,onChange:A,onSearch:N,render:function(l){return l.title}})};C.default=O},27200:function(J,C,e){e.r(C);var Z=e(667294),m=e(209269),P=e(312328),n=e(785893),j=function(){return(0,n.jsxs)(m.Z,{direction:"vertical",children:[(0,n.jsx)(P.Z,{status:"error"}),(0,n.jsx)(P.Z,{status:"warning",showSearch:!0})]})};C.default=j},809493:function(J,C,e){e.r(C);var Z=e(805574),m=e.n(Z),P=e(97857),n=e.n(P),j=e(513769),O=e.n(j),H=e(667294),B=e(291966),W=e.n(B),I=e(312328),E=e(631229),S=e(844183),y=e(209269),R=e(979331),T=e(785893),U=["leftColumns","rightColumns"],k=function(h){var $=h.leftColumns,X=h.rightColumns,x=O()(h,U);return(0,T.jsx)(I.Z,n()(n()({},x),{},{children:function(b){var K=b.direction,G=b.filteredItems,c=b.onItemSelectAll,t=b.onItemSelect,o=b.selectedKeys,i=b.disabled,f=K==="left"?$:X,g={getCheckboxProps:function(_){return{disabled:i||_.disabled}},onSelectAll:function(_,u){var v=u.filter(function(z){return!z.disabled}).map(function(z){var M=z.key;return M}),p=_?W()(v,o):W()(o,v);c(p,_)},onSelect:function(_,u){var v=_.key;t(v,u)},selectedRowKeys:o};return(0,T.jsx)(E.Z,{rowSelection:g,columns:f,dataSource:G,size:"small",style:{pointerEvents:i?"none":void 0},onRow:function(_){var u=_.key,v=_.disabled;return{onClick:function(){v||i||t(u,!o.includes(u))}}}})}}))},A=["cat","dog","bird"],N=Array.from({length:20}).map(function(r,h){return{key:h.toString(),title:"content".concat(h+1),description:"description of content".concat(h+1),disabled:h%4===0,tag:A[h%3]}}),D=N.filter(function(r){return Number(r.key)%3>1}).map(function(r){return r.key}),l=[{dataIndex:"title",title:"Name"},{dataIndex:"tag",title:"Tag",render:function(h){return(0,T.jsx)(S.Z,{children:h})}},{dataIndex:"description",title:"Description"}],s=[{dataIndex:"title",title:"Name"}],a=function(){var h=(0,H.useState)(D),$=m()(h,2),X=$[0],x=$[1],w=(0,H.useState)(!1),b=m()(w,2),K=b[0],G=b[1],c=(0,H.useState)(!1),t=m()(c,2),o=t[0],i=t[1],f=function(u){x(u)},g=function(u){G(u)},d=function(u){i(u)};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(k,{dataSource:N,targetKeys:X,disabled:K,showSearch:o,onChange:f,filterOption:function(u,v){return v.title.indexOf(u)!==-1||v.tag.indexOf(u)!==-1},leftColumns:l,rightColumns:s}),(0,T.jsxs)(y.Z,{style:{marginTop:16},children:[(0,T.jsx)(R.Z,{unCheckedChildren:"disabled",checkedChildren:"disabled",checked:K,onChange:g}),(0,T.jsx)(R.Z,{unCheckedChildren:"showSearch",checkedChildren:"showSearch",checked:o,onChange:d})]})]})};C.default=a},194050:function(J,C,e){e.r(C);var Z=e(805574),m=e.n(Z),P=e(719632),n=e.n(P),j=e(97857),O=e.n(j),H=e(513769),B=e.n(H),W=e(667294),I=e(965516),E=e(312328),S=e(72218),y=e(785893),R=["children"],T=["dataSource","targetKeys"],U=function(s,a){return s.includes(a)},k=function l(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return s.map(function(r){var h=r.children,$=B()(r,R);return O()(O()({},$),{},{disabled:a.includes($.key),children:l(h,a)})})},A=function(s){var a=s.dataSource,r=s.targetKeys,h=B()(s,T),$=I.Z.useToken(),X=$.token,x=[];function w(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];b.forEach(function(K){x.push(K),w(K.children)})}return w(a),(0,y.jsx)(E.Z,O()(O()({},h),{},{targetKeys:r,dataSource:x,className:"tree-transfer",render:function(K){return K.title},showSelectAll:!1,children:function(K){var G=K.direction,c=K.onItemSelect,t=K.selectedKeys;if(G==="left"){var o=[].concat(n()(t),n()(r));return(0,y.jsx)("div",{style:{padding:X.paddingXS},children:(0,y.jsx)(S.Z,{blockNode:!0,checkable:!0,checkStrictly:!0,defaultExpandAll:!0,checkedKeys:o,treeData:k(a,r),onCheck:function(f,g){var d=g.node.key;c(d,!U(o,d))},onSelect:function(f,g){var d=g.node.key;c(d,!U(o,d))}})})}}}))},N=[{key:"0-0",title:"0-0"},{key:"0-1",title:"0-1",children:[{key:"0-1-0",title:"0-1-0"},{key:"0-1-1",title:"0-1-1"}]},{key:"0-2",title:"0-2"},{key:"0-3",title:"0-3"},{key:"0-4",title:"0-4"}],D=function(){var s=(0,W.useState)([]),a=m()(s,2),r=a[0],h=a[1],$=function(x){h(x)};return(0,y.jsx)(A,{dataSource:N,targetKeys:r,onChange:$})};C.default=D}}]);
