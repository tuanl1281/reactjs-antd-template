import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'app/components/core/App';

import 'antd/dist/antd.less';
import 'index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);