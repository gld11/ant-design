"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{148050:function(Rn,rn,o){o.d(rn,{Z:function(){return q}});var G=o(168400),S=o.n(G),J=o(667294),j=o(186548),En=o(65630),Q=o(879587),vn=o(785893),d,u="https://github.com/ant-design/ant-design/edit/master/",H=(0,En.kc)(function(W){var nn=W.token,jn=W.css,p=nn.colorIcon,k=nn.colorText,z=nn.iconCls;return{editButton:jn(d||(d=S()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),z,p,k)}});function q(W){var nn=W.title,jn=W.filename,p=H(),k=p.styles;return(0,vn.jsx)(Q.Z,{title:nn,children:(0,vn.jsx)("a",{className:k.editButton,href:"".concat(u).concat(jn),target:"_blank",rel:"noopener noreferrer",children:(0,vn.jsx)(j.Z,{})})})}},472638:function(Rn,rn,o){var G=o(97857),S=o.n(G),J=o(952677),j=o.n(J),En=o(805574),Q=o.n(En),vn=o(513769),d=o.n(vn),u=o(667294),H=o(454769),q=o(574865),W=o.n(q),nn=o(785893),jn=["to","children"],p=(0,u.forwardRef)(function(k,z){var n=k.to,U=k.children,Vn=d()(k,jn),Fn=(0,u.useTransition)(),_n=Q()(Fn,2),Zn=_n[0],Xn=_n[1],Wn=(0,H.s0)(),Yn=(0,H.TH)(),In=Yn.pathname,Cn=(0,u.useMemo)(function(){return j()(n)==="object"?"".concat(n.pathname||In).concat(n.search||"").concat(n.hash||""):n},[n]),zn=function(Tn){Cn!=null&&Cn.startsWith("http")||!Tn.metaKey&&!Tn.ctrlKey&&!Tn.shiftKey&&(Tn.preventDefault(),Xn(function(){Cn&&Wn(Cn)}))};return(0,u.useLayoutEffect)(function(){Zn?W().start():W().done()},[Zn]),(0,nn.jsx)("a",S()(S()({ref:z,href:Cn,onClick:zn},Vn),{},{children:U}))});rn.Z=p},334230:function(Rn,rn,o){o.r(rn),o.d(rn,{default:function(){return Lr}});var G=o(805574),S=o.n(G),J=o(294184),j=o.n(J),En=o(727484),Q=o.n(En),vn=o(533852),d=o(454769),u=o(667294),H=o(715778),q=o(773036),W=o(302559),nn=o(438746),jn=o(168400),p=o.n(jn),k=o(370917),z=o(65630),n=o(785893),U,Vn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Fn=function(){var e=(0,z.Fg)(),t=function i(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return m<=10?`
.palette-`.concat(l,"-").concat(m,` {
  background: `).concat(e["".concat(l,"-").concat(m)],`;
}
`).concat(i(l,m+1),`
    `):""},r=function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return l<=13?`
.palette-gray-`.concat(l,` {
  background: `).concat(Vn[l],`;
}
`).concat(i(l+1),`
    `):""};return(0,n.jsx)(k.xB,{styles:(0,k.iv)(U||(U=p()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),r())})},_n=Fn,Zn,Xn=function(){return(0,n.jsx)(k.xB,{styles:(0,k.iv)(Zn||(Zn=p()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},Wn,Yn=function(){var a=(0,z.Fg)();return(0,n.jsx)(k.xB,{styles:(0,k.iv)(Wn||(Wn=p()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),a.colorText,a.fontSize,a.fontFamily,a.lineHeight,a.colorBgContainer)})},In,Cn=function(){var a=(0,z.Fg)(),e=a.anchorTop;return(0,n.jsx)(k.xB,{styles:(0,k.iv)(In||(In=p()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }

      [id] {
        scroll-margin-top: `,`px;
      }

      [data-prefers-color='dark'] {
        color-scheme: dark;
      }

      [data-prefers-color='light'] {
        color-scheme: light;
      }
    `])),e)})},zn=o(510274),te,Tn=function(){var e=(0,z.Fg)(),t=e.antCls,r=e.colorPrimary;return(0,n.jsx)(k.xB,{styles:(0,k.iv)(te||(te=p()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown > a > img,
        .markdown > img {
          display: block;
          margin: 0 auto;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,r,new zn.C(r).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new zn.C(r).setAlpha(.75).toHexString(),t,t,new zn.C(r).setAlpha(.75).toHexString(),t,t,t,t,new zn.C(r).setAlpha(.6).toHexString(),t,t,t)})},oe=Tn,re,ue=function(){var a=(0,z.Fg)();return(0,n.jsx)(k.xB,{styles:(0,k.iv)(re||(re=p()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),a.colorText,a.fontSize,a.borderRadius)})},an,c=function(){var e=(0,z.Fg)(),t=e.antCls,r=e.iconCls;return(0,n.jsx)(k.xB,{styles:(0,k.iv)(an||(an=p()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
              padding: 12px 16px;
              margin-top: -16px;
              font-size: 13px;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,r,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,r,e.colorBgContainer,r,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},N=c,E,D=function(){var a=(0,z.Fg)(),e=a.antCls,t=a.iconCls;return(0,n.jsx)(k.xB,{styles:(0,k.iv)(E||(E=p()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,a.colorPrimary,t,e)})},R,dn=function(){var a=(0,z.Fg)(),e=a.iconCls;return(0,n.jsx)(k.xB,{styles:(0,k.iv)(R||(R=p()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),a.colorIcon,a.colorIconHover,a.colorBorder,a.colorTextSecondary,e,a.colorLinkHover)})},pn,bn=function(){return(0,n.jsx)(k.xB,{styles:(0,k.iv)(pn||(pn=p()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},un,ln=function(){var a=(0,z.Fg)();return(0,n.jsx)(k.xB,{styles:(0,k.iv)(un||(un=p()([`
        .nav-phone-icon {
          position: absolute;
          bottom: 17px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),a.screenLG,a.colorBgContainer,a.colorSplit,a.colorLink,a.colorBgContainer)})},sn,en=function(){var a=(0,z.Fg)();return(0,n.jsx)(k.xB,{styles:(0,k.iv)(sn||(sn=p()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary,a.colorPrimary)})},mn,kn=function(){var a=(0,z.Fg)();return(0,n.jsx)(k.xB,{styles:(0,k.iv)(mn||(mn=p()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),a.colorPrimary,a.colorError,a.colorText,a.colorTextSecondary,a.colorBgContainer,a.borderRadius,a.colorBgContainer,a.colorBgContainer)})},hn,yn="dumi-default-",Mn=function(){var a=(0,z.Fg)();return(0,n.jsx)(k.xB,{styles:(0,k.iv)(hn||(hn=p()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),yn,a.colorText,a.colorBgContainer,a.colorBgContainer,a.colorTextPlaceholder,yn,a.colorBgElevated,a.colorBgElevated,yn,a.controlItemBgActive,a.controlItemBgHover,a.colorText,a.colorText)})},Ln,Hn=function(){return(0,n.jsx)(k.xB,{styles:(0,k.iv)(Ln||(Ln=p()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},Nn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Yn,{}),(0,n.jsx)(Cn,{}),(0,n.jsx)(oe,{}),(0,n.jsx)(ue,{}),(0,n.jsx)(N,{}),(0,n.jsx)(D,{}),(0,n.jsx)(dn,{}),(0,n.jsx)(bn,{}),(0,n.jsx)(ln,{}),(0,n.jsx)(en,{}),(0,n.jsx)(kn,{}),(0,n.jsx)(Hn,{}),(0,n.jsx)(_n,{}),(0,n.jsx)(Xn,{}),(0,n.jsx)(Mn,{})]})},gn=Nn,$n=o(857278),Jn=o(430932),Dn=o(985093),wn=o(115668),Pn=o(642207),ae=o(301210),Qn=o(13923),qn=o(825035),me=o(937993),he=o(448118),ge=o(938545),Me=o(569980),Le=o(391298),xe=o(630770),Bn=o(438199),ie=o(693399),Un="ant-where-checker",fe={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function De(){var a=(0,W.Z)(fe),e=S()(a,1),t=e[0],r=u.useState(!0),i=S()(r,2),l=i[0],m=i[1];return u.useEffect(function(){var s=document.createElement("p");s.className=Un,s.style.position="fixed",s.style.pointerEvents="none",s.style.visibility="hidden",s.style.width="0",document.body.appendChild(s),(0,ie.updateCSS)(`
:where(.`.concat(Un,`) {
  content: "__CHECK__";
}
    `),Un);var g=getComputedStyle(s),h=g.content;m(String(h).includes("CHECK")),document.body.removeChild(s),(0,ie.removeCSS)(Un)},[]),l?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var le,Te,Jt={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Qt=function(){var e=(0,u.useContext)(Bn.Z),t=e.isMobile;return(0,z.kc)(function(r){var i=r.token,l=r.css,m=new zn.C((0,xe.Z)("#f0f3fa","#fff")).onBackground(i.colorBgContainer).toHexString();return{holder:l(le||(le=p()([`
      background: `,`;
    `])),m),footer:l(Te||(Te=p()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),m,i.colorTextSecondary,i.colorText,t?60:0,t?20:0,i.marginXXL,i.fontSize)}})()},qt=function(){var e=(0,nn.Z)(),t=(0,W.Z)(Jt),r=S()(t,2),i=r[0],l=r[1],m=Qt(),s=m.styles,g=e.getLink,h=u.useMemo(function(){var f=l==="cn",b={title:(0,n.jsx)(d._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:f?"https://ant-design-charts.antgroup.com":"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:f?"https://ant-design-mobile.antgroup.com/zh":"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:f?"https://ant-design-mini.antgroup.com/":"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(d._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(d._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(d._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(d._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(d._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(d._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(d._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(d._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},y={title:(0,n.jsx)(d._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)($n.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Jn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(Dn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(wn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(wn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(d._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(d._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};f&&y.items.push({icon:(0,n.jsx)(Pn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.work_with_us"}),url:g("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:d.rU});var C={title:(0,n.jsx)(d._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(ae.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Qn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.change-log"}),url:g("/changelog"),LinkComponent:d.rU},{icon:(0,n.jsx)(qn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.faq"}),url:g("/docs/react/faq"),LinkComponent:d.rU},{icon:(0,n.jsx)(me.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(he.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(ge.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(qn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(qn.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},L={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(d._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(d._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(d._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.antgroup.com",description:(0,n.jsx)(d._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(d._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(d._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(d._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(Me.Z,{}),title:(0,n.jsx)(d._H,{id:"app.footer.theme"}),url:g("/theme-editor"),LinkComponent:d.rU}]};return[b,y,C,L]},[l,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Le.Z,{columns:h,className:s.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:i.owner})]})}),(0,n.jsx)(De,{})]})},ve=qt,no=o(97857),P=o.n(no),eo=o(9783),be=o.n(eo),Ne=o(660532),to=o(469181),oo=o(344682),ro=o(11739),ao=o(664095),se=o(883458),io=o(722449),lo=o(316165),so="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",co="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",po=function(e){return(0,n.jsx)(lo.Z,P()(P()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?so:co})})}))},Pe=po,uo=o(562925),cn=o(373638),Be,Ae,mo=(0,z.kc)(function(a){var e=a.token,t=a.css,r=e.headerHeight,i=e.colorTextHeading,l=e.fontFamily,m=e.mobileMaxWidth;return{logo:t(Be||(Be=p()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),r,i,l,r,i,m),title:t(Ae||(Ae=p()([`
      line-height: 32px;
    `])))}}),ho=function(e){var t=e.isZhCN,r=(0,d.TH)(),i=r.search,l=mo(),m=l.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(d.rU,{to:cn.J1("/",t,i),className:m.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:m.title,children:"Ant Design"})]})})},go=ho,xo=o(280882),fo=o(963918),An=o(988872),Oe,Ze,Ie,He,Re=(0,z.kc)(function(a){var e=a.css,t=a.token;return{smallStyle:e(Oe||(Oe=p()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),down:e(Ze||(Ze=p()([`
    color: `,`;
  `])),t.colorTextQuaternary),downOutlined:e(Ie||(Ie=p()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(He||(He=p()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),Fe=function(){var e=Re(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(d._H,{id:"app.implementation.community"}),")"]})},_e=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(d._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(Fe,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(Fe,{})]}),key:"vue"}]},vo=function(e){var t=e.isRTL,r=Re(),i=r.styles;return(0,n.jsx)(fo.Z,{menu:{items:_e()},placement:"bottomRight",children:(0,n.jsxs)(An.ZP,{size:"small",children:[(0,n.jsx)(d._H,{id:"app.header.menu.more"}),(0,n.jsx)(xo.Z,{className:j()(t?i.downOutlinedRTL:i.downOutlined,i.down)})]})})},bo=vo,yo=o(719632),On=o.n(yo),We=o(923232),Sn=o(472638),$e,Ue,wo={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},jo=(0,z.kc)(function(a){var e=a.token,t=e.antCls,r=e.iconCls,i=e.fontFamily,l=e.headerHeight,m=e.menuItemBorder,s=e.colorPrimary,g=e.colorText;return{nav:(0,z.iv)($e||($e=p()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }

          a {
            color: `,`;
          }

          a:before {
            position: absolute;
            inset: 0;
            background-color: transparent;
            content: "";
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),i,t,t,t,40+12*2,l,l,m,g,t,r,t,s,t,t),popoverMenuNav:(0,z.iv)(Ue||(Ue=p()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),Co=function(a){var e,t,r,i=a.isZhCN,l=a.isMobile,m=a.responsive,s=a.directionText,g=a.onLangChange,h=a.onDirectionChange,f=(0,d.TH)(),b=f.pathname,y=f.search,C=(0,W.Z)(wo),L=S()(C,1),M=L[0],A=(0,d.yh)(),T=((e=A["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],v=jo(),x=v.styles,Z=l?"inline":"horizontal",V=b.split("/").filter(function(w){return w}).slice(0,-1).join("/"),I=V||"home";b.startsWith("/changelog")?I="docs/react":b.startsWith("/docs/resources")&&(I="docs/resources");var X,Y=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(d._H,{id:"app.header.lang"}),onClick:g,key:"switch-lang"},{label:s,onClick:h,key:"switch-direction"}].concat(On()(_e()));l?X=Y:m==="crowded"&&(X=[{label:(0,n.jsx)(Ne.Z,{}),key:"additional",children:On()(Y)}]);var xn=[{label:(0,n.jsx)(Sn.Z,{to:cn.J1("/docs/spec/introduce",i,y),children:M.design}),key:"docs/spec"},{label:(0,n.jsx)(Sn.Z,{to:cn.J1("/docs/react/introduce",i,y),children:M.development}),key:"docs/react"},{label:(0,n.jsx)(Sn.Z,{to:cn.J1("/components/overview/",i,y),children:M.components}),key:"components"},T.length?{label:(0,n.jsx)(Sn.Z,{to:cn.J1(T.sort(function(w,F){return w.frontmatter.date>F.frontmatter.date?-1:1})[0].link,i,y),children:M.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(Sn.Z,{to:cn.J1("/docs/resources",i,y),children:M.resources}),key:"docs/resources"},i?{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u56FD\u5185\u955C\u50CF"}),key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",target:"_blank",rel:"noreferrer",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",target:"_blank",rel:"noreferrer",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(On()((r=X)!==null&&r!==void 0?r:[]));return(0,n.jsx)(We.Z,{mode:Z,selectedKeys:[I],className:x.nav,disabledOverflow:!0,items:xn,style:{borderRight:0}})},Ke=o(879587),Ge,Ve,Xe,Ye,Je,Kn="1.2em",ko=(0,z.kc)(function(a){var e=a.token,t=a.css,r=e.colorText,i=e.colorBorder,l=e.colorBgContainer,m=e.colorBgTextHover,s=e.borderRadius,g=e.controlHeight,h=e.motionDurationMid;return{btn:t(Ge||(Ge=p()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),r,i,g,g,s,h,h,m,Kn,Kn,Kn),innerDiv:t(Ve||(Ve=p()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Kn,Kn),labelStyle:t(Xe||(Xe=p()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Kn,r,r),label1Style:t(Ye||(Ye=p()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),r,l),label2Style:t(Je||(Je=p()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),So=function(e){var t=e.label1,r=e.label2,i=e.tooltip1,l=e.tooltip2,m=e.value,s=e.pure,g=e.onClick,h=ko(),f=h.styles,b=f.btn,y=f.innerDiv,C=f.labelStyle,L=f.label1Style,M=f.label2Style,A=(0,n.jsx)("button",{onClick:g,className:b,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[s&&(m===1?t:r),!s&&(0,n.jsxs)("div",{className:y,children:[(0,n.jsx)("span",{className:j()(C,m===1?L:M),children:t}),(0,n.jsx)("span",{className:j()(C,m===1?M:L),children:r})]})]})},"lang-button");return i||l?(0,n.jsx)(Ke.Z,{title:m===1?i:l,children:A}):A},ye=So,Qe,qe,nt,et,tt,ot,rt=1120,at=1200,Eo={cn:{message:"\u8BED\u96C0\u516C\u76CA\u8BA1\u5212\uFF1A\u5927\u5B66\u751F\u8BA4\u8BC1\u6559\u80B2\u90AE\u7BB1\uFF0C\u5373\u53EF\u514D\u8D39\u83B7\u5F97\u8BED\u96C0\u4F1A\u5458\u3002\u8BED\u96C0\uFF0C\u652F\u4ED8\u5B9D\u5320\u5FC3\u6253\u9020\u7684\u5728\u7EBF\u6587\u6863\u5E73\u53F0\u3002",shortMessage:"\u652F\u4ED8\u5B9D\u8BED\u96C0 \xB7 \u5927\u5B66\u751F\u516C\u76CA\u8BA1\u5212\u706B\u70ED\u8FDB\u884C\u4E2D\uFF01",more:"\u4E86\u89E3\u66F4\u591A"}},zo=(0,z.kc)(function(a){var e=a.token,t=a.css,r="#ced4d9";return{header:t(Qe||(Qe=p()([`
      position: sticky;
      top: 0;
      z-index: 1000;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;
      backdrop-filter: blur(8px);

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,r,r,r),menuRow:t(qe||(qe=p()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(nt||(nt=p()([`
      width: 16px;
    `]))),popoverMenu:be()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0}),banner:t(et||(et=p()([`
      width: 100%;
      text-align: center;
      word-break: keep-all;
      user-select: none;
    `]))),link:t(tt||(tt=p()([`
      margin-left: 10px;

      @media only screen and (max-width: `,`px) {
        margin-left: 0;
      }
    `])),e.mobileMaxWidth),icon:t(ot||(ot=p()([`
      margin-right: 10px;
      width: 22px;
      height: 22px;
    `])))}}),Mo=function(){var e=(0,W.Z)(Eo),t=S()(e,2),r=t[0],i=t[1],l=(0,d.WF)(),m=l.pkg,s=(0,cn.Is)(),g=(0,u.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),h=S()(g,2),f=h[0],b=h[1],y=(0,u.useContext)(Bn.Z),C=y.direction,L=y.isMobile,M=y.bannerVisible,A=y.updateSiteConfig,T=(0,u.useRef)(null),v=(0,d.TH)(),x=v.pathname,Z=v.search,V=zo(),I=V.styles,X=(0,u.useCallback)(function(){b(function(_){return P()(P()({},_),{},{menuVisible:!1})})},[]),Y=(0,u.useCallback)(function(){b(function(_){return P()(P()({},_),{},{windowWidth:window.innerWidth})})},[]),xn=(0,u.useCallback)(function(){b(function(_){return P()(P()({},_),{},{menuVisible:!0})})},[]),w=(0,u.useCallback)(function(_){b(function(fn){return P()(P()({},fn),{},{menuVisible:_})})},[]),F=function(){A({direction:C!=="rtl"?"rtl":"ltr"})},K=function(){A({bannerVisible:!1}),cn.Fy()&&localStorage.setItem(uo.ANT_DESIGN_NOT_SHOW_BANNER,Q()().toISOString())};(0,u.useEffect)(function(){X()},[v]),(0,u.useEffect)(function(){return Y(),window.addEventListener("resize",Y),function(){window.removeEventListener("resize",Y),T.current&&clearTimeout(T.current)}},[]);var tn=(0,u.useCallback)(function(_){var fn=window.location.href,pe=window.location.pathname;if(/overview/.test(pe)&&/0?[1-39][0-3]?x/.test(_)){window.location.href=fn.replace(window.location.origin,_).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(_)?"":"/react","/introduce")).replace(/\/$/,"");return}var ze=new URL(fn.replace(window.location.origin,_));ze.host.includes("antgroup")&&(window.location.href="".concat(ze.href.replace(/\/$/,""),"/")),window.location.href=ze.href.replace(/\/$/,"")},[]),on=(0,u.useCallback)(function(){var _="".concat(window.location.protocol,"//"),fn=window.location.href.slice(_.length);cn.Fy()&&localStorage.setItem("locale",cn.KE(x)?"en-US":"zh-CN"),window.location.href=_+fn.replace(window.location.pathname,cn.J1(x,!cn.KE(x),Z).pathname)},[v]),ke=(0,u.useMemo)(function(){return C!=="rtl"?"RTL":"LTR"},[C]),B=(0,u.useMemo)(function(){return C==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[C]),O=f.menuVisible,$=f.windowWidth,Gn=f.searching,Kt=P()(be()({},m.version,m.version),s==null?void 0:s.docVersions),Dr=Object.keys(Kt).map(function(_){return{value:Kt[_],label:_}}),Gt=["","index","index-cn"].includes(x),Vt=i==="cn",Tr=C==="rtl",Se=null;$<rt?Se="crowded":$<at&&(Se="narrow");var Nr=j()(I.header,"clearfix",{"home-header":Gt}),Ee={isZhCN:Vt,isRTL:Tr},Xt=(0,n.jsx)(Co,P()(P()({},Ee),{},{responsive:Se,isMobile:L,directionText:ke,onLangChange:on,onDirectionChange:F}),"nav"),ee=[Xt,(0,n.jsx)(to.Z,{className:"version",size:"small",defaultValue:m.version,onChange:tn,dropdownStyle:B,popupMatchSelectWidth:!1,getPopupContainer:function(fn){return fn.parentNode},options:Dr},"version"),(0,n.jsx)(bo,P()({},Ee),"more"),(0,n.jsx)(ye,{onClick:on,value:cn.KE(x)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(ye,{onClick:F,value:C==="rtl"?2:1,label1:(0,n.jsx)(Pe,{className:I.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(Pe,{className:I.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(ye,{value:1,label1:(0,n.jsx)(ae.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];$<rt?ee=Gn?[]:[Xt]:$<at&&(ee=Gn?[]:ee);var Yt=Gt?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:Nr,children:[L&&(0,n.jsx)(oo.Z,{overlayClassName:I.popoverMenu,placement:"bottomRight",content:ee,trigger:"click",open:O,arrow:{arrowPointAtCenter:!0},onOpenChange:w,children:(0,n.jsx)(Ne.Z,{className:"nav-phone-icon",onClick:xn})}),Vt&&M&&(0,n.jsx)(q.ZP,{theme:{token:{colorInfoBg:"#daf5eb",colorTextBase:"#000"}},children:(0,n.jsx)(ro.Z,{className:I.banner,message:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{className:I.icon,src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",alt:"yuque"}),(0,n.jsx)("span",{children:L?r.shortMessage:r.message}),(0,n.jsx)("a",{className:I.link,href:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd",target:"_blank",rel:"noreferrer",onClick:function(){var fn,pe;(fn=(pe=window).gtag)===null||fn===void 0||fn.call(pe,"event","\u70B9\u51FB",{event_category:"top_banner",event_label:"https://www.yuque.com/yuque/blog/welfare-edu?source=antd"})},children:r.more})]}),type:"info",banner:!0,closable:!0,showIcon:!1,onClose:K})}),(0,n.jsxs)(ao.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(se.Z,P()(P()({},Yt[0]),{},{children:(0,n.jsx)(go,P()(P()({},Ee),{},{location:v}))})),(0,n.jsxs)(se.Z,P()(P()({},Yt[1]),{},{className:I.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(io.ZP,{})}),!L&&ee]}))]})]})},Lo=Mo,Pr=o(945462),Do=o(377376),ce=o(185209),To=function(){var e=(0,d.eL)(),t=(0,u.useMemo)(function(){var m;if(!e.frontmatter.subtitle&&!e.frontmatter.title)m="404 Not Found - Ant Design";else{var s;m="".concat(e.frontmatter.subtitle||""," ").concat(((s=e.frontmatter)===null||s===void 0?void 0:s.title)||""," - Ant Design")}var g=e.frontmatter.description||"";return[m,g]},[e]),r=S()(t,2),i=r[0],l=r[1];return(0,n.jsxs)(d.ql,{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("meta",{property:"og:title",content:i}),l&&(0,n.jsx)("meta",{name:"description",content:l})]})},it=To,lt=o(148050),No=o(823493),Po=o.n(No),Bo=o(468990),Ao=o(658192),st,ct,dt,pt=["scroll","resize"],Oo=(0,z.kc)(function(a){var e=a.token,t=a.css,r=e.boxShadowSecondary,i=e.antCls;return{affixTabs:t(st||(st=p()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),r,i,i,i),affixTabsFixed:t(ct||(ct=p()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(dt||(dt=p()([`
      text-transform: capitalize;
    `])))}}),ut=32,Zo=function(){var e=u.useRef(null),t=u.useRef([]),r=u.useState(!1),i=S()(r,2),l=i[0],m=i[1],s=u.useState(null),g=S()(s,2),h=g[0],f=g[1],b=Oo(),y=b.styles,C=y.affixTabs,L=y.affixTabsFixed,M=y.span;function A(v){var x=document.getElementById(v);if(x){var Z=x.offsetTop-e.current.offsetHeight-ut;(0,Ao.Z)(Z)}}u.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(v){var x=v.id;return x}),m(!0)},[]),u.useEffect(function(){var v=decodeURIComponent((location.hash||"").slice(1));v&&A(v)},[l]);var T=u.useMemo(function(){function v(){for(var x=window,Z=x.scrollY,V=e.current.offsetHeight,I=t.current.length-1;I>=0;I-=1){var X=t.current[I],Y=document.getElementById(X),xn=Y.offsetTop-V-ut;if(xn<=Z){f(X);return}}f(null)}return Po()(v)},[]);return u.useEffect(function(){return pt.forEach(function(v){return window.addEventListener(v,T)}),T(),function(){pt.forEach(function(v){return window.removeEventListener(v,T)})}},[]),(0,n.jsx)("div",{className:j()(C,h&&L),ref:e,children:(0,n.jsx)(Bo.Z,{activeKey:h,onChange:A,items:t.current.map(function(v){return{key:v,label:(0,n.jsx)("span",{className:M,children:v.replace(/-/g," ")})}})})})},Io=Zo,mt,ht,gt,xt=40,de=1208,we=24,Ho=(0,z.kc)(function(a){var e=a.token,t=a.css,r=e.antCls;return{resourcePage:t(mt||(mt=p()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),de),resourceContent:t(ht||(ht=p()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),xt,de,we,r),banner:t(gt||(gt=p()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),xt,de,de,we,we)}}),Ro=function(e){var t,r=e.children,i=Ho(),l=i.styles,m=(0,d.eL)();return(0,n.jsx)(q.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(Do.Z,{children:[(0,n.jsx)(it,{}),(0,n.jsxs)("div",{id:"resources-page",className:l.resourcePage,children:[(0,n.jsx)(Io,{}),(0,n.jsxs)("div",{className:l.banner,children:[(0,n.jsxs)(ce.Z.Title,{style:{fontSize:30},children:[(t=m.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(lt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:m.frontmatter.filename})]}),(0,n.jsx)("section",{children:m.frontmatter.description})]}),(0,n.jsx)("div",{className:l.resourceContent,children:r}),(0,n.jsx)(ve,{})]})]})})},Fo=Ro,_o=o(720841),Wo=o(538294),ft=o(575054),vt=o(796586),$o=o(605071),je=o(209269),Uo=o(217187),ne=o(618073),bt=o(206171),Ko=o(844183),Go=o(566254),Vo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,d.yh)(),r=(0,nn.Z)(),i=r.pathname,l=r.search,m=(0,d.tx)(),s=e.before,g=e.after,h=(0,u.useMemo)(function(){var f,b=On()(m!=null?m:[]);if(i.startsWith("/docs/spec")){var y=b.splice(0,1);b.push.apply(b,On()(y))}if(i.startsWith("/docs/react")){var C,L=(C=Object.entries(t).find(function(v){var x=S()(v,1),Z=x[0];return Z.startsWith("/changelog")}))===null||C===void 0?void 0:C[1];L&&b.splice(1,0,L[0])}if(i.startsWith("/changelog")){var M,A=(M=Object.entries(t).find(function(v){var x=S()(v,1),Z=x[0];return Z.startsWith("/docs/react")}))===null||M===void 0?void 0:M[1];A&&(b.unshift(A[0]),b.push.apply(b,On()(A.slice(1))))}var T=function(x){var Z=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return x&&Z&&(0,n.jsx)(Ko.Z,{color:x==="New"?"success":"processing",bordered:!1,style:{marginInlineStart:"auto",marginInlineEnd:0,marginTop:-2},children:x.replace("VERSION",Go.Z)})};return(f=b==null?void 0:b.reduce(function(v,x){if(x!=null&&x.title)if(i.startsWith("/docs/spec")){var Z,V,I=x.children.reduce(function(w,F){var K,tn,on=(K=(tn=F.frontmatter)===null||tn===void 0?void 0:tn.type)!==null&&K!==void 0?K:"default";return w[on]||(w[on]=[]),w[on].push(F),w},{}),X=[];X.push.apply(X,On()((Z=(V=I.default)===null||V===void 0?void 0:V.map(function(w){return{label:(0,n.jsxs)(Sn.Z,{to:"".concat(w.link).concat(l),children:[s,w==null?void 0:w.title,g]}),key:w.link.replace(/(-cn$)/g,"")}}))!==null&&Z!==void 0?Z:[])),Object.entries(I).forEach(function(w){var F=S()(w,2),K=F[0],tn=F[1];K!=="default"&&X.push({type:"group",label:K,key:K,children:tn==null?void 0:tn.map(function(on){return{label:(0,n.jsxs)(Sn.Z,{to:"".concat(on.link).concat(l),children:[s,on==null?void 0:on.title,g]}),key:on.link.replace(/(-cn$)/g,"")}})})}),v.push({label:x==null?void 0:x.title,key:x==null?void 0:x.title,children:X})}else{var Y;v.push({type:"group",label:x==null?void 0:x.title,key:x==null?void 0:x.title,children:(Y=x.children)===null||Y===void 0?void 0:Y.map(function(w){var F,K;return{label:(0,n.jsxs)(Sn.Z,{to:"".concat(w.link).concat(l),style:{display:"flex",alignItems:"center"},children:[s,(0,n.jsx)("span",{children:w==null?void 0:w.title},"english"),(0,n.jsx)("span",{className:"chinese",children:(F=w.frontmatter)===null||F===void 0?void 0:F.subtitle},"chinese"),T((K=w.frontmatter)===null||K===void 0?void 0:K.tag,!s&&!g),g]}),key:w.link.replace(/(-cn$)/g,"")}})})}else{var xn=x.children||[];xn.every(function(w){var F;return w==null||(F=w.frontmatter)===null||F===void 0?void 0:F.date})&&xn.sort(function(w,F){var K,tn;return((K=w.frontmatter)===null||K===void 0?void 0:K.date)>((tn=F.frontmatter)===null||tn===void 0?void 0:tn.date)?-1:1}),v.push.apply(v,On()(xn.map(function(w){return{label:(0,n.jsxs)(Sn.Z,{to:"".concat(w.link).concat(l),style:{display:"flex",alignItems:"center"},children:[s,w==null?void 0:w.title,T(w.frontmatter.tag,!s&&!g),g]}),key:w.link.replace(/(-cn$)/g,"")}})))}return v},[]))!==null&&f!==void 0?f:[]},[m,t,i,l,e]);return[h,i]},yt=Vo,wt,jt,Ct,kt,Xo=(0,z.kc)(function(a){var e=a.token,t=a.css,r=e.colorSplit,i=e.iconCls,l=e.fontSizeIcon;return{prevNextNav:t(wt||(wt=p()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),r),pageNav:t(jt||(jt=p()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),i,l),prevNav:t(Ct||(Ct=p()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(kt||(kt=p()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Yo=function a(e){return Array.isArray(e)?e.reduce(function(t,r){if(!r)return t;if("children"in r&&r.children){var i;return t.concat((i=a(r.children))!==null&&i!==void 0?i:[])}return t.concat(r)},[]):null},Jo=function(e){var t=e.rtl,r=Xo(),i=r.styles,l={className:"footer-nav-icon-before"},m={className:"footer-nav-icon-after"},s=t?(0,n.jsx)(ne.Z,P()({},l)):(0,n.jsx)(bt.Z,P()({},l)),g=t?(0,n.jsx)(bt.Z,P()({},m)):(0,n.jsx)(ne.Z,P()({},m)),h=yt({before:s,after:g}),f=S()(h,2),b=f[0],y=f[1],C=(0,u.useContext)(Bn.Z),L=C.isMobile,M=(0,u.useMemo)(function(){var x=Yo(b);if(!x)return[null,null];var Z=-1;return x.forEach(function(V,I){V&&V.key===y&&(Z=I)}),[x[Z-1],x[Z+1]]},[b,y]),A=S()(M,2),T=A[0],v=A[1];return L?null:(0,n.jsxs)("section",{className:i.prevNextNav,children:[T&&u.cloneElement(T.label,{className:j()(i.pageNav,i.prevNav,T.className)}),v&&u.cloneElement(v.label,{className:j()(i.pageNav,i.nextNav,v.className)})]})},Qo=Jo,qo=o(302281),nr=o(15060),er=o(889812),St,Et,zt,tr=(0,z.kc)(function(a){var e=a.token,t=a.css;return{history:t(St||(St=p()([`
    position: absolute;
    top: 0;
    inset-inline-end: 0;
  `]))),li:t(Et||(Et=p()([`
    // white-space: pre;
  `]))),ref:t(zt||(zt=p()([`
    margin-left: `,`px;
  `])),e.marginXS)}}),or={cn:{full:"\u5B8C\u6574\u66F4\u65B0\u65E5\u5FD7",changelog:"\u66F4\u65B0\u65E5\u5FD7",loading:"\u52A0\u8F7D\u4E2D...",empty:"\u6682\u65E0\u66F4\u65B0"},en:{full:"Full Changelog",changelog:"Changelog",loading:"loading...",empty:"Nothing update"}};function rr(a){var e=a.changelog,t=e===void 0?"":e,r=a.refs,i=r===void 0?[]:r,l=a.styles,m=u.useMemo(function(){for(var s=[],g=!1,h="",f=0;f<t.length;f+=1){var b=t[f];if(b!=="`")h+=b;else{var y=h;g&&(y=(0,n.jsx)("code",{children:y})),s.push(y),h="",g=!g}}return s.push(h),s},[t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:m}),i==null?void 0:i.map(function(s){var g;return(0,n.jsxs)("a",{className:l.ref,href:s,target:"_blank",rel:"noreferrer",children:["#",(g=s.match(/^.*\/(\d+)$/))===null||g===void 0?void 0:g[1]]},s)})]})}function ar(a,e){var t=(0,er.Z)(e==="cn"?{key:"component-changelog-cn",request:function(){return o.e(2104).then(o.t.bind(o,332104,19))}}:{key:"component-changelog-en",request:function(){return o.e(5212).then(o.t.bind(o,365212,19))}});return(0,u.useMemo)(function(){var r=a.replace(/-/g,""),i=Object.keys(t).find(function(l){return l.toLowerCase()===r.toLowerCase()});return t[i]},[t,a])}function ir(a){var e,t=a.pathname,r=t===void 0?"":t,i=(0,W.Z)(or),l=S()(i,2),m=l[0],s=l[1],g=u.useState(!1),h=S()(g,2),f=h[0],b=h[1],y=tr(),C=y.styles,L=((e=r.match(/\/components\/([^/]+)/))===null||e===void 0?void 0:e[1])||"",M=ar(L,s),A=u.useMemo(function(){var T={};return M==null||M.forEach(function(v){T[v.version]=T[v.version]||[],T[v.version].push(v)}),Object.keys(T).map(function(v){var x=T[v];return{children:(0,n.jsxs)(ce.Z,{children:[(0,n.jsx)("h4",{children:v}),(0,n.jsx)("ul",{children:x.map(function(Z,V){return(0,n.jsx)("li",{className:C.li,children:(0,n.jsx)(rr,P()(P()({},Z),{},{styles:C}))},V)})})]})}})},[M]);return!M||!M.length?null:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(An.ZP,{className:C.history,icon:(0,n.jsx)(Qn.Z,{}),onClick:function(){b(!0)},children:m.changelog}),(0,n.jsx)(qo.Z,{title:m.changelog,extra:(0,n.jsx)(Sn.Z,{style:{fontSize:14},to:"/changelog".concat(s==="cn"?"-cn":""),children:m.full}),open:f,width:"40vw",onClose:function(){b(!1)},destroyOnClose:!0,children:(0,n.jsx)(nr.Z,{items:A})})]})}var lr=function(a){return(0,n.jsx)(u.Suspense,{fallback:null,children:(0,n.jsx)(ir,P()({},a))})},sr=o(524229),Mt=o(211646),cr=o(294047),Lt=o(315816),dr=function(e){var t=e.className,r=e.style;return(0,n.jsx)("svg",{className:t,style:r,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Dt=dr,Tt,Nt,Pt,Bt,At,Ot,Zt,Ce="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",pr=(0,z.kc)(function(a){var e=a.token,t=a.css;return{card:t(Tt||(Tt=p()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Nt||(Nt=p()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Pt||(Pt=p()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Bt||(Bt=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(At||(At=p()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Ot||(Ot=p()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Zt||(Zt=p()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),ur={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},mr=function(e){var t=e.zhihuLink,r=e.yuqueLink,i=e.juejinLink,l=(0,W.Z)(ur),m=S()(l,1),s=m[0],g=pr(),h=g.styles,f=h.card,b=h.bigTitle,y=h.cardBody,C=h.left,L=h.title,M=h.subTitle,A=h.btn;return!t&&!r&&!i?null:(0,n.jsxs)(cr.Z,{className:f,bordered:!1,children:[(0,n.jsx)("h3",{className:b,children:s.bigTitle}),t&&(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:C,children:[(0,n.jsx)("img",{src:Ce,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:L,children:"Ant Design"}),(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)(wn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(ne.Z,{className:"arrowIcon"}),(0,n.jsx)(An.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:s.zhiHu})]})]})]}),(0,n.jsx)(An.ZP,{type:"primary",className:A,icon:(0,n.jsx)(wn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:s.buttonText})]}),r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Lt.Z,{}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:C,children:[(0,n.jsx)("img",{src:Ce,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:L,children:"Ant Design"}),(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)(Mt.Z,{className:"logo yuque-logo"}),(0,n.jsx)(ne.Z,{className:"arrowIcon"}),(0,n.jsx)(An.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:s.yuQue})]})]})]}),(0,n.jsx)(An.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Mt.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:r,children:s.buttonText})]})]}),i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Lt.Z,{}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:C,children:[(0,n.jsx)("img",{src:Ce,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:L,children:"Ant Design"}),(0,n.jsxs)("div",{className:M,children:[(0,n.jsx)(Dt,{className:"logo juejin-logo"}),(0,n.jsx)(ne.Z,{className:"arrowIcon"}),(0,n.jsx)(An.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:s.junjin})]})]})]}),(0,n.jsx)(An.ZP,{type:"primary",className:A,icon:(0,n.jsx)(Dt,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:i,children:s.buttonText})]})]})]})},hr=mr,It,Ht,Rt,Ft,_t,gr=(0,z.kc)(function(a){var e=a.token,t=a.css,r=e.antCls;return{contributorsList:t(It||(It=p()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),r,r,e.motionDurationSlow,r),listMobile:t(Ht||(Ht=p()([`
      margin: 1em 0 !important;
    `]))),toc:t(Rt||(Rt=p()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),r,r),tocWrapper:t(Ft||(Ft=p()([`
      position: fixed;
      top: `,`px;
      inset-inline-end: 0;
      width: 160px;
      margin: 0 0 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;
      z-index: 1000;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.headerHeight+e.contentMarginTop,e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(_t||(_t=p()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),xr=function(e){var t=e.num,r=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:r}).map(function(i,l){return(0,n.jsx)(ft.Z.Avatar,{size:"small",active:!0,style:{marginLeft:l===0?0:-8}},l)})})},fr=function(e){var t=e.name,r=e.avatar,i=(0,u.useState)(!0),l=S()(i,2),m=l[0],s=l[1],g=(0,u.useState)(!1),h=S()(g,2),f=h[0],b=h[1];return(0,u.useLayoutEffect)(function(){var y=new Image;y.src=r,y.onload=function(){return s(!1)},y.onerror=function(){return b(!0)}},[]),f?null:m?(0,n.jsx)(ft.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(vt.C,{size:"small",src:r,alt:t,children:t})},vr=function(e){var t,r,i,l,m,s,g=e.children,h=(0,d.eL)(),f=(0,d.zh)(),b=(0,nn.Z)(),y=b.pathname,C=b.hash,L=(0,d.YB)(),M=L.formatMessage,A=gr(),T=A.styles,v=(0,z.Fg)(),x=(0,u.useContext)(Bn.Z),Z=x.direction,V=x.isMobile,I=(0,Uo.Z)(!1),X=S()(I,2),Y=X[0],xn=X[1],w=(0,u.useMemo)(function(){var B;return((B=h.toc)===null||B===void 0?void 0:B.filter(function(O){return O._debug_demo}).map(function(O){return O.id}))||[]},[h]),F=w.includes(C.slice(1));(0,u.useLayoutEffect)(function(){xn(F)},[]);var K=(0,u.useMemo)(function(){return{showDebug:Y,setShowDebug:xn}},[Y,w]),tn=(0,u.useMemo)(function(){return((f==null?void 0:f.toc)||h.toc).reduce(function(B,O){if(O.depth===2)B.push(P()({},O));else if(O.depth===3){var $=B[B.length-1];$&&($.children=$.children||[],$.children.push(P()({},O)))}return B},[])},[f==null?void 0:f.toc,h.toc]),on=Z==="rtl",ke=(0,u.useMemo)(function(){var B=h.frontmatter.author;return B?typeof B=="string"?B.split(",").map(function(O){return{name:O,avatar:"https://github.com/".concat(O,".png")}}):Array.isArray(B)?B:[]:[]},[h.frontmatter.author]);return(0,n.jsx)(sr.Z.Provider,{value:K,children:(0,n.jsxs)(se.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[!!h.frontmatter.toc&&(0,n.jsx)("section",{className:T.tocWrapper,children:(0,n.jsx)($o.Z,{className:T.toc,affix:!1,targetOffset:v.anchorTop,showInkInFixed:!0,items:tn.map(function(B){var O;return{href:"#".concat(B.id),title:B.title,key:B.id,children:(O=B.children)===null||O===void 0?void 0:O.filter(function($){return Y||!w.includes($.id)}).map(function($){return{key:$.id,href:"#".concat($.id),title:(0,n.jsx)("span",{className:j()(w.includes($.id)&&"toc-debug"),children:$==null?void 0:$.title})}})}})})}),(0,n.jsxs)("article",{className:j()(T.articleWrapper,{rtl:on}),children:[(t=h.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(ce.Z.Title,{style:{fontSize:30,position:"relative"},children:[(0,n.jsxs)(je.Z,{size:"small",children:[(r=h.frontmatter)===null||r===void 0?void 0:r.title,(i=h.frontmatter)===null||i===void 0?void 0:i.subtitle,!y.startsWith("/components/overview")&&(0,n.jsx)(lt.Z,{title:(0,n.jsx)(d._H,{id:"app.content.edit-page"}),filename:h.frontmatter.filename})]}),y.startsWith("/components/")&&(0,n.jsx)(lr,{pathname:y})]}):null,h.frontmatter.date||h.frontmatter.author?(0,n.jsx)(ce.Z.Paragraph,{children:(0,n.jsxs)(je.Z,{children:[h.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(_o.Z,{})," ",Q()(h.frontmatter.date).format("YYYY-MM-DD")]}),ke.map(function(B){return(0,n.jsx)("a",{href:"https://github.com/".concat(B.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(je.Z,{size:3,children:[(0,n.jsx)(fr,{name:B.name,avatar:B.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",B.name]})]})},B.name)})]})}):null,!h.frontmatter.__autoDescription&&h.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:g}),(((l=h.frontmatter)===null||l===void 0?void 0:l.zhihu_url)||((m=h.frontmatter)===null||m===void 0?void 0:m.yuque_url)||((s=h.frontmatter)===null||s===void 0?void 0:s.juejin_url))&&(0,n.jsx)(hr,{zhihuLink:h.frontmatter.zhihu_url,yuqueLink:h.frontmatter.yuque_url,juejinLink:h.frontmatter.juejin_url}),h.frontmatter.filename&&(0,n.jsx)(Wo.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:j()(T.contributorsList,be()({},T.listMobile,V)),fileName:h.frontmatter.filename,renderItem:function(O,$){var Gn;return!O||$?(0,n.jsx)(xr,{}):(Gn=O.username)!==null&&Gn!==void 0&&Gn.includes("github-actions")?null:(0,n.jsx)(Ke.Z,{mouseEnterDelay:.3,title:"".concat(M({id:"app.content.contributors"}),": ").concat(O.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(O.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(vt.C,{size:"small",src:O.url,alt:O.username,children:O.username})})})},O.username)}})]}),(0,n.jsx)(Qo,{rtl:on}),(0,n.jsx)(ve,{})]})})},br=vr,yr=o(650010),Wt,$t,wr=(0,z.kc)(function(a){var e=a.token,t=a.css,r=e.antCls,i=e.fontFamily,l=e.colorSplit;return{asideContainer:t(Wt||(Wt=p()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),i,r,r,r,r,r,r,l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),mainMenu:t($t||($t=p()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: `,`px;
        width: 100%;
        height: 100%;
        max-height: calc(100vh - `,`px);
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])),e.headerHeight+e.contentMarginTop,e.headerHeight+e.contentMarginTop)}}),jr=function(){var e=(0,d.tx)(),t=(0,u.useContext)(Bn.Z),r=t.isMobile,i=t.theme,l=wr(),m=l.styles,s=yt(),g=S()(s,2),h=g[0],f=g[1],b=i.includes("dark"),y=(0,z.Fg)(),C=y.colorBgContainer,L=(0,n.jsx)(q.ZP,{theme:{components:{Menu:{itemBg:C,darkItemBg:C}}},children:(0,n.jsx)(We.Z,{items:h,inlineIndent:30,className:m.asideContainer,mode:"inline",theme:b?"dark":"light",selectedKeys:[f],defaultOpenKeys:e==null?void 0:e.map(function(M){var A=M.title;return A}).filter(function(M){return M})})});return r?(0,n.jsx)(yr.Z,{children:L},"Mobile-menu"):(0,n.jsx)(se.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:m.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:L})})},Cr=jr,Ut,kr=(0,z.kc)(function(a){var e=a.css,t=a.token;return{main:e(Ut||(Ut=p()([`
    display: flex;
    margin-top: `,`px;
  `])),t.contentMarginTop)}}),Sr=function(e){var t=e.children,r=kr(),i=r.styles;return(0,n.jsxs)("main",{className:i.main,children:[(0,n.jsx)(it,{}),(0,n.jsx)(Cr,{}),(0,n.jsx)(br,{children:t})]})},Er=Sr,zr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},Mr=function(){var e=(0,d.pC)(),t=(0,nn.Z)(),r=t.pathname,i=t.search,l=(0,W.Z)(zr),m=S()(l,2),s=m[0],g=m[1],h=(0,u.useRef)(null),f=(0,u.useContext)(Bn.Z),b=f.direction;(0,u.useLayoutEffect)(function(){g==="cn"?Q().locale("zh-cn"):Q().locale("en")},[]),(0,u.useEffect)(function(){var C=document.getElementById("nprogress-style");C&&(h.current=setTimeout(function(){var L;(L=C.parentNode)===null||L===void 0||L.removeChild(C)},0))},[]),(0,u.useEffect)(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",r+i)},[t]);var y=(0,u.useMemo)(function(){return["","/"].some(function(C){return C===r})||["/index"].some(function(C){return r.startsWith(C)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(ve,{})]}):r.startsWith("/docs/resource")?(0,n.jsx)(Fo,{children:e}):r.startsWith("/theme-editor")?e:(0,n.jsx)(Er,{children:e})},[r,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(d.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:g==="cn"?"zh-CN":g,"data-direction":b,className:j()({rtl:b==="rtl"})}),(0,n.jsx)("title",{children:s==null?void 0:s.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:s.description}),(0,n.jsx)("meta",{property:"og:title",content:s==null?void 0:s.title}),(0,n.jsx)("meta",{property:"og:description",content:s.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(q.ZP,{direction:b,locale:g==="cn"?H.Z:void 0,children:[(0,n.jsx)(gn,{}),(0,n.jsx)(Lo,{}),y]})]})},Lr=Mr},647727:function(Rn,rn,o){o.d(rn,{Z:function(){return G.Z}});var G=o(582485)},302281:function(Rn,rn,o){o.d(rn,{Z:function(){return ue}});var G=o(97857),S=o.n(G),J=o(9783),j=o.n(J),En=o(805574),Q=o.n(En),vn=o(513769),d=o.n(vn),u=o(667294),H=o(294184),q=o.n(H),W=o(650010),nn=o(851863),jn=o(73287),p=o(976883),k=o(578294),z=o(358245),n=o(46287),U=o(785893),Vn=function(c){var N=c.prefixCls,E=c.title,D=c.footer,R=c.extra,dn=c.closeIcon,pn=c.closable,bn=c.onClose,un=c.headerStyle,ln=c.drawerStyle,sn=c.bodyStyle,en=c.footerStyle,mn=c.children,kn=u.useCallback(function(gn){return(0,U.jsx)("button",{type:"button",onClick:bn,"aria-label":"Close",className:"".concat(N,"-close"),children:gn})},[bn]),hn=(0,n.Z)(pn,dn,kn,void 0,!0),yn=Q()(hn,2),Mn=yn[0],Ln=yn[1],Hn=u.useMemo(function(){return!E&&!Mn?null:(0,U.jsxs)("div",{style:un,className:q()("".concat(N,"-header"),j()({},"".concat(N,"-header-close-only"),Mn&&!E&&!R)),children:[(0,U.jsxs)("div",{className:"".concat(N,"-header-title"),children:[Ln,E&&(0,U.jsx)("div",{className:"".concat(N,"-title"),children:E})]}),R&&(0,U.jsx)("div",{className:"".concat(N,"-extra"),children:R})]})},[Mn,Ln,R,un,N,E]),Nn=u.useMemo(function(){if(!D)return null;var gn="".concat(N,"-footer");return(0,U.jsx)("div",{className:gn,style:en,children:D})},[D,en,N]);return(0,U.jsxs)("div",{className:"".concat(N,"-wrapper-body"),style:ln,children:[Hn,(0,U.jsx)("div",{className:"".concat(N,"-body"),style:sn,children:mn}),Nn]})},Fn=Vn,_n=o(141035),Zn=o(986943),Xn=function(c){var N,E=c.componentCls,D=c.motionDurationSlow,R={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:"all ".concat(D)}}};return j()({},E,(N={},j()(N,"".concat(E,"-mask-motion"),{"&-enter, &-appear, &-leave":{"&-active":{transition:"all ".concat(D)}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}}),j()(N,"".concat(E,"-panel-motion"),{"&-left":[R,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[R,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[R,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[R,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}),N))},Wn=Xn,Yn=function(c){var N,E,D=c.componentCls,R=c.zIndexPopup,dn=c.colorBgMask,pn=c.colorBgElevated,bn=c.motionDurationSlow,un=c.motionDurationMid,ln=c.padding,sn=c.paddingLG,en=c.fontSizeLG,mn=c.lineHeightLG,kn=c.lineWidth,hn=c.lineType,yn=c.colorSplit,Mn=c.marginSM,Ln=c.colorIcon,Hn=c.colorIconHover,Nn=c.colorText,gn=c.fontWeightStrong,$n=c.footerPaddingBlock,Jn=c.footerPaddingInline,Dn="".concat(D,"-content-wrapper");return j()({},D,(E={position:"fixed",inset:0,zIndex:R,pointerEvents:"none","&-pure":(N={position:"relative",background:pn},j()(N,"&".concat(D,"-left"),{boxShadow:c.boxShadowDrawerLeft}),j()(N,"&".concat(D,"-right"),{boxShadow:c.boxShadowDrawerRight}),j()(N,"&".concat(D,"-top"),{boxShadow:c.boxShadowDrawerUp}),j()(N,"&".concat(D,"-bottom"),{boxShadow:c.boxShadowDrawerDown}),N),"&-inline":{position:"absolute"}},j()(E,"".concat(D,"-mask"),{position:"absolute",inset:0,zIndex:R,background:dn,pointerEvents:"auto"}),j()(E,Dn,{position:"absolute",zIndex:R,maxWidth:"100vw",transition:"all ".concat(bn),"&-hidden":{display:"none"}}),j()(E,"&-left > ".concat(Dn),{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:c.boxShadowDrawerLeft}),j()(E,"&-right > ".concat(Dn),{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:c.boxShadowDrawerRight}),j()(E,"&-top > ".concat(Dn),{top:0,insetInline:0,boxShadow:c.boxShadowDrawerUp}),j()(E,"&-bottom > ".concat(Dn),{bottom:0,insetInline:0,boxShadow:c.boxShadowDrawerDown}),j()(E,"".concat(D,"-content"),{width:"100%",height:"100%",overflow:"auto",background:pn,pointerEvents:"auto"}),j()(E,"".concat(D,"-wrapper-body"),{display:"flex",flexDirection:"column",width:"100%",height:"100%"}),j()(E,"".concat(D,"-header"),{display:"flex",flex:0,alignItems:"center",padding:"".concat(ln,"px ").concat(sn,"px"),fontSize:en,lineHeight:mn,borderBottom:"".concat(kn,"px ").concat(hn," ").concat(yn),"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}}),j()(E,"".concat(D,"-extra"),{flex:"none"}),j()(E,"".concat(D,"-close"),{display:"inline-block",marginInlineEnd:Mn,color:Ln,fontWeight:gn,fontSize:en,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:"color ".concat(un),textRendering:"auto","&:focus, &:hover":{color:Hn,textDecoration:"none"}}),j()(E,"".concat(D,"-title"),{flex:1,margin:0,color:Nn,fontWeight:c.fontWeightStrong,fontSize:en,lineHeight:mn}),j()(E,"".concat(D,"-body"),{flex:1,minWidth:0,minHeight:0,padding:sn,overflow:"auto"}),j()(E,"".concat(D,"-footer"),{flexShrink:0,padding:"".concat($n,"px ").concat(Jn,"px"),borderTop:"".concat(kn,"px ").concat(hn," ").concat(yn)}),j()(E,"&-rtl",{direction:"rtl"}),E))},In=(0,_n.Z)("Drawer",function(an){var c=(0,Zn.TS)(an,{});return[Yn(c),Wn(c)]},function(an){return{zIndexPopup:an.zIndexPopupBase,footerPaddingBlock:an.paddingXS,footerPaddingInline:an.padding}}),Cn=["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"],zn=["prefixCls","style","className","placement"],te=null,Tn={distance:180},oe=function(c){var N=c.rootClassName,E=c.width,D=c.height,R=c.size,dn=R===void 0?"default":R,pn=c.mask,bn=pn===void 0?!0:pn,un=c.push,ln=un===void 0?Tn:un,sn=c.open,en=c.afterOpenChange,mn=c.onClose,kn=c.prefixCls,hn=c.getContainer,yn=c.style,Mn=c.className,Ln=c.visible,Hn=c.afterVisibleChange,Nn=d()(c,Cn),gn=u.useContext(jn.E_),$n=gn.getPopupContainer,Jn=gn.getPrefixCls,Dn=gn.direction,wn=gn.drawer,Pn=Jn("drawer",kn),ae=In(Pn),Qn=Q()(ae,2),qn=Qn[0],me=Qn[1],he=hn===void 0&&$n?function(){return $n(document.body)}:hn,ge=q()(j()({"no-mask":!bn},"".concat(Pn,"-rtl"),Dn==="rtl"),N,me);if(!1)var Me,Le;var xe=u.useMemo(function(){return E!=null?E:dn==="large"?736:378},[E,dn]),Bn=u.useMemo(function(){return D!=null?D:dn==="large"?736:378},[D,dn]),ie={motionName:(0,nn.m)(Pn,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Un=function(le){return{motionName:(0,nn.m)(Pn,"panel-motion-".concat(le)),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}},fe=(0,z.H)();return qn((0,U.jsx)(k.BR,{children:(0,U.jsx)(p.Ux,{status:!0,override:!0,children:(0,U.jsx)(W.Z,S()(S()({prefixCls:Pn,onClose:mn,maskMotion:ie,motion:Un},Nn),{},{open:sn!=null?sn:Ln,mask:bn,push:ln,width:xe,height:Bn,style:S()(S()({},wn==null?void 0:wn.style),yn),className:q()(wn==null?void 0:wn.className,Mn),rootClassName:ge,getContainer:he,afterOpenChange:en!=null?en:Hn,panelRef:fe,children:(0,U.jsx)(Fn,S()(S()({prefixCls:Pn},Nn),{},{onClose:mn}))}))})}))},re=function(c){var N=c.prefixCls,E=c.style,D=c.className,R=c.placement,dn=R===void 0?"right":R,pn=d()(c,zn),bn=u.useContext(jn.E_),un=bn.getPrefixCls,ln=un("drawer",N),sn=In(ln),en=Q()(sn,2),mn=en[0],kn=en[1],hn=q()(ln,"".concat(ln,"-pure"),"".concat(ln,"-").concat(dn),kn,D);return mn((0,U.jsx)("div",{className:hn,style:E,children:(0,U.jsx)(Fn,S()({prefixCls:ln},pn))}))};oe._InternalPanelDoNotUseOrYouWillBeFired=re;var ue=oe},377376:function(Rn,rn,o){var G=o(83996),S=o(296708),J=G.ZP;J.Header=G.h4,J.Footer=G.$_,J.Content=G.VY,J.Sider=S.Z,rn.Z=J},715778:function(Rn,rn,o){o.d(rn,{Z:function(){return W}});var G=o(174219),S=o(97857),J=o.n(S),j=o(585369),En={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},Q=En,vn={lang:J()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},j.Z),timePickerLocale:J()({},Q)};vn.lang.ok="\u786E\u5B9A";var d=vn,u=d,H="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",q={locale:"zh-cn",Pagination:G.Z,DatePicker:d,TimePicker:Q,Calendar:u,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:H,method:H,array:H,object:H,number:H,date:H,boolean:H,integer:H,float:H,regexp:H,email:H,url:H,hex:H},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},W=q}}]);
