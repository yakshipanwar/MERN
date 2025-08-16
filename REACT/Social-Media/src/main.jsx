import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './routes/App.jsx';
import "bootstrap/dist/css/bootstrap.min.css"
import Createpost, { createPostAction } from './components/Createpost.jsx';
import PostList , {postLoader} from './components/PostList.jsx';

const router = createBrowserRouter([{
  path: '/', element: <App/>, children:[
    {path: '/', element: <PostList/>, loader: postLoader},
    {path:'/create-post', element: <Createpost/>, action: createPostAction},
  ], 
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
