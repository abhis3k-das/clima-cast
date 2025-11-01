import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeProvider';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from './components/Layout.component';
import City from './pages/City';
import WeatherDashboard from './pages/WeatherDashboard';
import { Toaster } from 'sonner';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime : 5 * 60 * 1000,
      gcTime:10 * 60 * 1000,
      retry : false,
      refetchOnWindowFocus:false,
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      
      <BrowserRouter>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
              <Route path='/' element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<City />} />
            </Routes>
          </Layout>
          <Toaster richColors/>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}


export default App
