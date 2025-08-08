import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '@/features/dashboard'
import { LandingPage as LP } from '@/features/landing-page';
import { LandingPage } from '@/features/landing-page-v2';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} index />
          <Route element={<LP />} path='v2' />
          <Route element={<Dashboard />} path='/dashboard' />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
