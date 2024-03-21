import ReactDOM from 'react-dom/client';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root tag is not defined');
}

ReactDOM.createRoot(root).render();
