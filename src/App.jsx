import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import DashBoard from './pages/DashBoard.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import Users from './pages/Users.jsx';
import AppLayout from './ui/AppLayout.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // React query will always fetch data from the server
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path={'dashboard'} element={<DashBoard />} />
            <Route path={'users'} element={<Users />} />
          </Route>

          <Route path={'*'} element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position={'top-center'}
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
