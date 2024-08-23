import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App.tsx';
import './index.css';
import './stylesheet.css';
import { SECOND } from './constants/time.ts';

// react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20 * SECOND,
      retry: false,
      onError: () => {
        alert('<div>error !</div> as toast...');
      },
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />

      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>,
);
