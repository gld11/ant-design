"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6812],{781939:function(h,c,r){r.r(c);var i=r(863942),u=r(502143),g=r(968521),x=r(702951),v=r(521587),l=r(199100),o=r(828089),b=r(825673),a=r(902068),f=r(574399),j=r(316073),k=r(24628),E=r(719260),T=r(956140),d=r(127179),m=r(905388),C=r(245583),P=r(606965),w=r(268696),D=r(587302),t=r(424128),O=r(249706),R=r(795127),M=r(116846),S=r(720538),y=r(212039),A=r(73024),L=r(553913),s=r(454769),I=r(667294),e=r(785893);function _(){var p=(0,s.eL)(),n=p.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:n[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:n[1].value}),(0,e.jsx)("li",{children:n[2].value})]})]}),(0,e.jsx)(a.Z,{message:"After version 5.2.0, we provide a simpler usage <Timeline items={[...]} /> with better performance and potential of writing simpler code style in your applications. Meanwhile, we deprecated the old usage in browser console, we will remove it in antd 6.0."}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)(l.Z,{lang:"jsx",children:n[3].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(m.Z,{items:[{demo:{id:"components-timeline-demo-basic"},previewerProps:{title:"Basic",filename:"components/timeline/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Basic timeline.</p>"}},{demo:{id:"components-timeline-demo-color"},previewerProps:{title:"Color",filename:"components/timeline/demo/color.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    items={[
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'green',
        children: 'Create a services site 2015-09-01',
      },
      {
        color: 'red',
        children: (
          <>
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
          </>
        ),
      },
      {
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: 'gray',
        children: (
          <>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <SmileOutlined />,
        children: <p>Custom color testing</p>,
      },
    ]}
  />
);
export default App;
`,description:"<p>Set the color of circles. <code>green</code> means completed or success status, <code>red</code> means warning or error, and <code>blue</code> means ongoing or other default status, <code>gray</code> for unfinished or disabled status.</p>"}},{demo:{id:"components-timeline-demo-pending"},previewerProps:{title:"Last node and Reversing",filename:"components/timeline/demo/pending.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Button, Timeline } from 'antd';
const App = () => {
  const [reverse, setReverse] = useState(false);
  const handleClick = () => {
    setReverse(!reverse);
  };
  return (
    <div>
      <Timeline
        pending="Recording..."
        reverse={reverse}
        items={[
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            children: 'Technical testing 2015-09-01',
          },
        ]}
      />
      <Button
        type="primary"
        style={{
          marginTop: 16,
        }}
        onClick={handleClick}
      >
        Toggle Reverse
      </Button>
    </div>
  );
};
export default App;
`,description:"<p>When the timeline is incomplete and ongoing, put a ghost node at last. Set <code>pending</code> as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, <code>pendingDot={a React Element}</code> is used to customize the dot of the pending item. <code>reverse={true}</code> is used for reversing nodes.</p>"}},{demo:{id:"components-timeline-demo-alternate"},previewerProps:{title:"Alternate",filename:"components/timeline/demo/alternate.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    mode="alternate"
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
        color: 'green',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        children: \`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\`,
      },
      {
        color: 'red',
        children: 'Network problems being solved 2015-09-01',
      },
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        children: 'Technical testing 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Alternate timeline.</p>"}},{demo:{id:"components-timeline-demo-custom"},previewerProps:{title:"Custom",filename:"components/timeline/demo/custom.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Set a node as an icon or other custom element.</p>",style:`.timeline-clock-icon {
  font-size: 16px;
}`}},{demo:{id:"components-timeline-demo-right"},previewerProps:{title:"Right alternate",filename:"components/timeline/demo/right.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
const App = () => (
  <Timeline
    mode="right"
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        dot: (
          <ClockCircleOutlined
            style={{
              fontSize: '16px',
            }}
          />
        ),
        color: 'red',
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
);
export default App;
`,description:"<p>Right alternate timeline.</p>"}},{demo:{id:"components-timeline-demo-label"},previewerProps:{title:"Label",filename:"components/timeline/demo/label.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
const App = () => {
  const [mode, setMode] = useState('left');
  const onChange = (e) => {
    setMode(e.target.value);
  };
  return (
    <>
      <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
  );
};
export default App;
`,description:"<p>Use <code>label</code> show time alone.</p>"}},{demo:{id:"components-timeline-demo-wireframe"},previewerProps:{debug:!0,title:"Wireframe",filename:"components/timeline/demo/wireframe.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ConfigProvider, Timeline } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      token: {
        wireframe: true,
      },
    }}
  >
    <Timeline
      items={[
        {
          children: 'Create a services site 2015-09-01',
        },
        {
          children: 'Solve initial network problems 2015-09-01',
        },
        {
          children: 'Technical testing 2015-09-01',
        },
        {
          children: 'Network problems being solved 2015-09-01',
        },
      ]}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>Wireframe.</p>"}},{demo:{id:"components-timeline-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/timeline/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.2.2","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.1","@rc-component/mutate-observer":"^1.1.0","@rc-component/tour":"~1.10.0","@rc-component/trigger":"^1.16.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.17.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.1","rc-dialog":"~9.2.0","rc-drawer":"~6.4.1","rc-dropdown":"~4.1.0","rc-field-form":"~1.38.1","rc-image":"~7.2.0","rc-input":"~1.2.1","rc-input-number":"~8.1.0","rc-mentions":"~2.8.0","rc-menu":"~9.12.0","rc-motion":"^2.9.0","rc-notification":"~5.1.1","rc-pagination":"~3.6.1","rc-picker":"~3.14.1","rc-progress":"~3.5.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.3.1","rc-segmented":"~2.2.2","rc-select":"~14.9.0","rc-slider":"~10.2.1","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.34.4","rc-tabs":"~12.12.1","rc-textarea":"~1.4.0","rc-tooltip":"~6.0.1","rc-tree":"~5.7.12","rc-tree-select":"~5.13.0","rc-upload":"~4.3.4","rc-util":"^5.37.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ConfigProvider, Timeline } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Timeline: {
          tailColor: 'red',
          tailWidth: 10,
          dotBorderWidth: 1,
          dotBg: 'green',
          itemPaddingBottom: 10,
        },
      },
    }}
  >
    <Timeline
      items={[
        {
          children: 'Create a services site 2015-09-01',
        },
        {
          children: 'Solve initial network problems 2015-09-01',
        },
        {
          children: 'Technical testing 2015-09-01',
        },
        {
          children: 'Network problems being solved 2015-09-01',
        },
      ]}
    />
  </ConfigProvider>
);
export default App;
`,description:"<p>Custom component token.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("p",{children:[n[4].value,(0,e.jsx)(t.Z,{to:"/docs/react/common-props",sourceType:"Link",children:n[5].value})]}),(0,e.jsxs)("h3",{id:"timeline",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#timeline",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Timeline"]}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[6].value}),(0,e.jsx)("th",{children:n[7].value}),(0,e.jsx)("th",{children:n[8].value}),(0,e.jsx)("th",{children:n[9].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[10].value}),(0,e.jsxs)("td",{children:[n[11].value,(0,e.jsx)("code",{children:n[12].value}),n[13].value]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[14].value}),n[15].value,(0,e.jsx)("code",{children:n[16].value}),n[17].value,(0,e.jsx)("code",{children:n[18].value})]}),(0,e.jsx)("td",{children:n[19].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[20].value}),(0,e.jsx)("td",{children:n[21].value}),(0,e.jsx)("td",{children:n[22].value}),(0,e.jsx)("td",{children:n[23].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[24].value}),(0,e.jsx)("td",{children:n[25].value}),(0,e.jsx)("td",{children:n[26].value}),(0,e.jsx)("td",{children:n[27].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[28].value}),(0,e.jsx)("td",{children:n[29].value}),(0,e.jsx)("td",{children:n[30].value}),(0,e.jsx)("td",{children:n[31].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[32].value}),(0,e.jsx)("td",{children:n[33].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)(t.Z,{to:"#Items",sourceType:"Link",children:n[34].value}),n[35].value]}),(0,e.jsx)("td",{children:n[36].value})]})]})]}),(0,e.jsxs)("h3",{id:"items",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#items",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Items"]}),(0,e.jsx)("p",{children:n[37].value}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:n[38].value}),(0,e.jsx)("th",{children:n[39].value}),(0,e.jsx)("th",{children:n[40].value}),(0,e.jsx)("th",{children:n[41].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[42].value}),(0,e.jsxs)("td",{children:[n[43].value,(0,e.jsx)(i.Z,{hsv:{h:240,s:1,v:1,a:1},hsvString:"hsv(240, 100%, 100%)",hsl:{h:240,s:1,l:.5,a:1},hslString:"hsl(240, 100%, 50%)",number:255,hex:"0000ff",hexString:"#0000ff",hex8:"0000ffff",hex8String:"#0000ffff",hexShortString:"#0000ff",rgb:{r:0,g:0,b:255,a:1},rgbString:"rgb(0, 0, 255)",percentageRgb:{r:"0%",g:"0%",b:"100%",a:1},percentageRgbString:"rgb(0%, 0%, 100%)",name:"blue",string:"blue",value:"blue",children:n[44].value}),n[45].value,(0,e.jsx)(i.Z,{hsv:{h:0,s:1,v:1,a:1},hsvString:"hsv(0, 100%, 100%)",hsl:{h:0,s:1,l:.5,a:1},hslString:"hsl(0, 100%, 50%)",number:16711680,hex:"ff0000",hexString:"#ff0000",hex8:"ff0000ff",hex8String:"#ff0000ff",hexShortString:"#ff0000",rgb:{r:255,g:0,b:0,a:1},rgbString:"rgb(255, 0, 0)",percentageRgb:{r:"100%",g:"0%",b:"0%",a:1},percentageRgbString:"rgb(100%, 0%, 0%)",name:"red",string:"red",value:"red",children:n[46].value}),n[47].value,(0,e.jsx)(i.Z,{hsv:{h:120,s:1,v:.5019607843137255,a:1},hsvString:"hsv(120, 100%, 50%)",hsl:{h:120,s:1,l:.25098039215686274,a:1},hslString:"hsl(120, 100%, 25%)",number:32768,hex:"008000",hexString:"#008000",hex8:"008000ff",hex8String:"#008000ff",hexShortString:"#008000",rgb:{r:0,g:128,b:0,a:1},rgbString:"rgb(0, 128, 0)",percentageRgb:{r:"0%",g:"50%",b:"0%",a:1},percentageRgbString:"rgb(0%, 50%, 0%)",name:"green",string:"green",value:"green",children:n[48].value}),n[49].value,(0,e.jsx)(i.Z,{hsv:{h:0,s:0,v:.5019607843137255,a:1},hsvString:"hsv(0, 0%, 50%)",hsl:{h:0,s:0,l:.5019607843137255,a:1},hslString:"hsl(0, 0%, 50%)",number:8421504,hex:"808080",hexString:"#808080",hex8:"808080ff",hex8String:"#808080ff",hexShortString:"#808080",rgb:{r:128,g:128,b:128,a:1},rgbString:"rgb(128, 128, 128)",percentageRgb:{r:"50%",g:"50%",b:"50%",a:1},percentageRgbString:"rgb(50%, 50%, 50%)",name:"gray",string:"gray",value:"gray",children:n[50].value}),n[51].value]}),(0,e.jsx)("td",{children:n[52].value}),(0,e.jsx)("td",{children:(0,e.jsx)(i.Z,{hsv:{h:240,s:1,v:1,a:1},hsvString:"hsv(240, 100%, 100%)",hsl:{h:240,s:1,l:.5,a:1},hslString:"hsl(240, 100%, 50%)",number:255,hex:"0000ff",hexString:"#0000ff",hex8:"0000ffff",hex8String:"#0000ffff",hexShortString:"#0000ff",rgb:{r:0,g:0,b:255,a:1},rgbString:"rgb(0, 0, 255)",percentageRgb:{r:"0%",g:"0%",b:"100%",a:1},percentageRgbString:"rgb(0%, 0%, 100%)",name:"blue",string:"blue",value:"blue",children:n[53].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[54].value}),(0,e.jsx)("td",{children:n[55].value}),(0,e.jsx)("td",{children:n[56].value}),(0,e.jsx)("td",{children:n[57].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[58].value}),(0,e.jsx)("td",{children:n[59].value}),(0,e.jsx)("td",{children:n[60].value}),(0,e.jsx)("td",{children:n[61].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[62].value}),(0,e.jsx)("td",{children:n[63].value}),(0,e.jsx)("td",{children:n[64].value}),(0,e.jsx)("td",{children:n[65].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:n[66].value}),(0,e.jsx)("td",{children:n[67].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:n[68].value}),n[69].value,(0,e.jsx)("code",{children:n[70].value})]}),(0,e.jsx)("td",{children:n[71].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(t.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(d.Z,{component:"Timeline"})]})})}c.default=_}}]);
