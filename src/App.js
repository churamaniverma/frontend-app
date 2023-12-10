import './App.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Example from './Example';

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
     <h1>hello</h1>
     <Example></Example>
    </QueryClientProvider>
  )
}

export default App;
