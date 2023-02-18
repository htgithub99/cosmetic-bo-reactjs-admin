import { createBrowserHistory } from "history";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  unstable_HistoryRouter as HistoryRouter
} from "react-router-dom";
import RootWrapper from "wrappers/RootWrapper";

export const history = createBrowserHistory();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 24 * 3600 * 1000, // cache for 1 day
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HistoryRouter history={history as any}>
        <React.Suspense fallback={null}>
          <RootWrapper />
        </React.Suspense>
      </HistoryRouter>
    </QueryClientProvider>
  );
}

export default App;
