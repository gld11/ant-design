"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[453],{520739:function(m,i,n){n.r(i);var p=n(863942),u=n(502143),h=n(968521),g=n(702951),x=n(521587),c=n(199100),o=n(828089),E=n(825673),v=n(902068),j=n(574399),P=n(316073),b=n(24628),y=n(719260),f=n(956140),_=n(127179),d=n(905388),D=n(245583),M=n(606965),O=n(268696),C=n(587302),r=n(424128),T=n(249706),I=n(795127),k=n(116846),A=n(720538),L=n(212039),R=n(73024),w=n(553913),s=n(454769),B=n(667294),e=n(785893);function a(){var l=(0,s.eL)(),t=l.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:t[1].value}),(0,e.jsx)("li",{children:t[2].value})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(d.Z,{items:[{demo:{id:"empty-demo-basic"},previewerProps:{title:"Basic",filename:"components/empty/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty />;
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"empty-demo-simple"},previewerProps:{title:"Chose image",filename:"components/empty/demo/simple.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
export default App;
`,description:"<p>You can choose another style of <code>image</code> by setting image to <code>Empty.PRESENTED_IMAGE_SIMPLE</code>.</p>"}},{demo:{id:"empty-demo-customize"},previewerProps:{title:"Customize",filename:"components/empty/demo/customize.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Empty } from 'antd';
const App = () => (
  <Empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Customize <a href="#API">Description</a>
      </span>
    }
  >
    <Button type="primary">Create Now</Button>
  </Empty>
);
export default App;
`,description:"<p>Customize image source, image size, description and extra content.</p>"}},{demo:{id:"empty-demo-config-provider"},previewerProps:{title:"ConfigProvider",filename:"components/empty/demo/config-provider.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import {
  Cascader,
  ConfigProvider,
  Divider,
  List,
  Select,
  Space,
  Switch,
  Table,
  Transfer,
  TreeSelect,
} from 'antd';
const customizeRenderEmpty = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <SmileOutlined
      style={{
        fontSize: 20,
      }}
    />
    <p>Data Not Found</p>
  </div>
);
const style = {
  width: 200,
};
const App = () => {
  const [customize, setCustomize] = useState(true);
  return (
    <>
      <Switch
        unCheckedChildren="default"
        checkedChildren="customize"
        checked={customize}
        onChange={setCustomize}
      />
      <Divider />
      <ConfigProvider renderEmpty={customize ? customizeRenderEmpty : undefined}>
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          <h4>Select</h4>
          <Select style={style} />
          <h4>TreeSelect</h4>
          <TreeSelect style={style} treeData={[]} />
          <h4>Cascader</h4>
          <Cascader style={style} options={[]} showSearch />
          <h4>Transfer</h4>
          <Transfer />
          <h4>Table</h4>
          <Table
            style={{
              marginTop: 8,
            }}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
              },
            ]}
          />
          <h4>List</h4>
          <List />
        </Space>
      </ConfigProvider>
    </>
  );
};
export default App;
`,description:"<p>Use ConfigProvider set global Empty style.</p>"}},{demo:{id:"empty-demo-description"},previewerProps:{title:"No description",filename:"components/empty/demo/description.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Empty } from 'antd';
const App = () => <Empty description={false} />;
export default App;
`,description:"<p>Simplest Usage with no description.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[t[3].value,(0,e.jsx)(r.Z,{to:"/docs/react/common-props",sourceType:"Link",children:t[4].value})]}),(0,e.jsx)(c.Z,{lang:"jsx",children:t[5].value}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[6].value}),(0,e.jsx)("th",{children:t[7].value}),(0,e.jsx)("th",{children:t[8].value}),(0,e.jsx)("th",{children:t[9].value}),(0,e.jsx)("th",{children:t[10].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[11].value}),(0,e.jsx)("td",{children:t[12].value}),(0,e.jsx)("td",{children:t[13].value}),(0,e.jsx)("td",{children:t[14].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[15].value}),(0,e.jsx)("td",{children:t[16].value}),(0,e.jsx)("td",{children:t[17].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[18].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[19].value}),(0,e.jsx)("td",{children:t[20].value}),(0,e.jsx)("td",{children:t[21].value}),(0,e.jsx)("td",{children:t[22].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h2",{id:"built-in-images",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#built-in-images",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Built-in images"]}),(0,e.jsxs)("ul",{children:[(0,e.jsxs)("li",{children:[(0,e.jsx)("p",{children:t[23].value}),(0,e.jsx)("div",{className:"site-empty-buildIn-img site-empty-buildIn-simple",children:(0,e.jsx)("div",{})})]}),(0,e.jsxs)("li",{children:[(0,e.jsx)("p",{children:t[24].value}),(0,e.jsx)("div",{className:"site-empty-buildIn-img site-empty-buildIn-default"})]})]}),(0,e.jsx)("style",{dangerouslySetInnerHTML:{__html:`
  .site-empty-buildIn-img {
    background-repeat: no-repeat;
    background-size: contain;
  }
  .site-empty-buildIn-simple {
    width: 55px;
    height: 35px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591679-b0ceb580-4a65-11e9-925c-ad15b4eae93d.png");
  }
  .site-empty-buildIn-default {
    width: 121px;
    height: 116px;
    background-image: url("https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png");
  }
`}}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(_.Z,{component:"Empty"})]})})}i.default=a}}]);
