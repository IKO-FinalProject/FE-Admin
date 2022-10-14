import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Router from './Router'
import Loading from './component/ui/Loading'

function App() {
  function queryErrorHandler(error: unknown): void {
    throw new Error('ERROR!')
  }
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        onError: queryErrorHandler
      },
      mutations: {
        onError: queryErrorHandler
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Loading />
      <Router />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
