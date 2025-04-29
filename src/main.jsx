import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PostHogProvider } from 'posthog-js/react';
import './index.css';
import App from './App.jsx';

const apiKey = "phc_MYyQVyOSm4DrfFzKjXBTw04izMFFujeLW9v6H1Sb5mF";
const apiHost = `https://us.i.posthog.com`;
;


console.log('PostHog KEY:', apiKey);
console.log('PostHog HOST:', apiHost);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider
      apiKey={apiKey}
      options={{ api_host: apiHost }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </StrictMode>
);
