"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9610],{892311:function(u,c,n){n.r(c);var o=n(863942),m=n(502143),p=n(968521),g=n(702951),h=n(521587),x=n(199100),i=n(828089),b=n(825673),v=n(902068),f=n(574399),j=n(316073),y=n(24628),E=n(719260),P=n(956140),a=n(127179),l=n(905388),k=n(245583),D=n(606965),B=n(268696),C=n(587302),t=n(424128),O=n(249706),R=n(795127),w=n(116846),T=n(720538),M=n(212039),A=n(73024),S=n(553913),s=n(454769),I=n(667294),e=n(785893);function d(){var _=(0,s.eL)(),r=_.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:r[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:r[1].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(l.Z,{items:[{demo:{id:"result-demo-success"},previewerProps:{title:"Success",filename:"components/result/demo/success.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  />
);
export default App;
`,description:"<p>Show successful results.</p>"}},{demo:{id:"result-demo-info"},previewerProps:{title:"Info",filename:"components/result/demo/info.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    title="Your operation has been executed"
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>Show processing results.</p>"}},{demo:{id:"result-demo-warning"},previewerProps:{title:"Warning",filename:"components/result/demo/warning.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Button type="primary" key="console">
        Go Console
      </Button>
    }
  />
);
export default App;
`,description:"<p>The result of the warning.</p>"}},{demo:{id:"result-demo-403"},previewerProps:{title:"403",filename:"components/result/demo/403.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>you are not authorized to access this page.</p>"}},{demo:{id:"result-demo-404"},previewerProps:{title:"404",filename:"components/result/demo/404.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>The page you visited does not exist.</p>"}},{demo:{id:"result-demo-500"},previewerProps:{title:"500",filename:"components/result/demo/500.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    status="500"
    title="500"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);
export default App;
`,description:"<p>Something went wrong on server.</p>"}},{demo:{id:"result-demo-error"},previewerProps:{title:"Error",filename:"components/result/demo/error.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Result, Typography } from 'antd';
const { Paragraph, Text } = Typography;
const App = () => (
  <Result
    status="error"
    title="Submission Failed"
    subTitle="Please check and modify the following information before resubmitting."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ]}
  >
    <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          The content you submitted has the following error:
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
        frozen. <a>Thaw immediately &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
        eligible to apply. <a>Apply Unlock &gt;</a>
      </Paragraph>
    </div>
  </Result>
);
export default App;
`,description:"<p>Complex error feedback.</p>",style:`.site-result-demo-error-icon {
  color: red;
}`}},{demo:{id:"result-demo-customicon"},previewerProps:{title:"Custom icon",filename:"components/result/demo/customIcon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
const App = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, we have done all the operations!"
    extra={<Button type="primary">Next</Button>}
  />
);
export default App;
`,description:"<p>Custom icon.</p>"}},{demo:{id:"result-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/result/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, ConfigProvider, Result } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Result: {
          titleFontSize: 18,
          subtitleFontSize: 14,
          iconFontSize: 48,
          extraMargin: \`12px 0 0 0\`,
        },
      },
    }}
  >
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[r[2].value,(0,e.jsx)(t.Z,{to:"/docs/react/common-props",sourceType:"Link",children:r[3].value})]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:r[4].value}),(0,e.jsx)("th",{children:r[5].value}),(0,e.jsx)("th",{children:r[6].value}),(0,e.jsx)("th",{children:r[7].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[8].value}),(0,e.jsx)("td",{children:r[9].value}),(0,e.jsx)("td",{children:r[10].value}),(0,e.jsx)("td",{children:r[11].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[12].value}),(0,e.jsx)("td",{children:r[13].value}),(0,e.jsx)("td",{children:r[14].value}),(0,e.jsx)("td",{children:r[15].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[16].value}),(0,e.jsx)("td",{children:r[17].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:r[18].value}),r[19].value,(0,e.jsx)("code",{children:r[20].value}),r[21].value,(0,e.jsx)("code",{children:r[22].value}),r[23].value,(0,e.jsx)("code",{children:r[24].value}),r[25].value,(0,e.jsx)(o.Z,{hsv:{h:300,s:1,v:.26666666666666666,a:1},hsvString:"hsv(300, 100%, 27%)",hsl:{h:300,s:1,l:.13333333333333333,a:1},hslString:"hsl(300, 100%, 13%)",number:4456516,hex:"440044",hexString:"#440044",hex8:"440044ff",hex8String:"#440044ff",hexShortString:"#440044",rgb:{r:68,g:0,b:68,a:1},rgbString:"rgb(68, 0, 68)",percentageRgb:{r:"27%",g:"0%",b:"27%",a:1},percentageRgbString:"rgb(27%, 0%, 27%)",name:!1,string:"#440044",value:"#440044",children:r[26].value}),r[27].value,(0,e.jsx)(o.Z,{hsv:{h:315,s:1,v:.26666666666666666,a:1},hsvString:"hsv(315, 100%, 27%)",hsl:{h:315,s:1,l:.13333333333333333,a:1},hslString:"hsl(315, 100%, 13%)",number:4456499,hex:"440033",hexString:"#440033",hex8:"440033ff",hex8String:"#440033ff",hexShortString:"#440033",rgb:{r:68,g:0,b:51,a:1},rgbString:"rgb(68, 0, 51)",percentageRgb:{r:"27%",g:"0%",b:"20%",a:1},percentageRgbString:"rgb(27%, 0%, 20%)",name:!1,string:"#440033",value:"#440033",children:r[28].value}),r[29].value,(0,e.jsx)(o.Z,{hsv:{h:0,s:1,v:.3333333333333333,a:1},hsvString:"hsv(0, 100%, 33%)",hsl:{h:0,s:1,l:.16666666666666666,a:1},hslString:"hsl(0, 100%, 17%)",number:5570560,hex:"550000",hexString:"#550000",hex8:"550000ff",hex8String:"#550000ff",hexShortString:"#550000",rgb:{r:85,g:0,b:0,a:1},rgbString:"rgb(85, 0, 0)",percentageRgb:{r:"33%",g:"0%",b:"0%",a:1},percentageRgbString:"rgb(33%, 0%, 0%)",name:!1,string:"#550000",value:"#550000",children:r[30].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:r[31].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[32].value}),(0,e.jsx)("td",{children:r[33].value}),(0,e.jsx)("td",{children:r[34].value}),(0,e.jsx)("td",{children:r[35].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:r[36].value}),(0,e.jsx)("td",{children:r[37].value}),(0,e.jsx)("td",{children:r[38].value}),(0,e.jsx)("td",{children:r[39].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(a.Z,{component:"Result"})]})})}c.default=d}}]);
