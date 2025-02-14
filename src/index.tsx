import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.body);
root.render(
    <Provider {...stores}>
        <App errorStore={stores.errorStore}></App>
    </Provider>
);