import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { PageLayout } from './components/layouts/PageLayout';
import { HOME } from './constants/routes';
import HomePage from './pages/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={HOME} element={<HomePage />} />
    </>,
  ),
);

function App() {
  return (
    <PageLayout>
      <RouterProvider router={router} />
    </PageLayout>
  );
}

export default App;
