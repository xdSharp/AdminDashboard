import { Switch } from 'react-router-dom';
import './App.css';
import { MainBlock } from './components/MainBlock/MainBlock';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { POSTS_URL } from './utils/constants';
import { useFetchPosts } from './utils/hooks';

function App() {
  const postsData = useFetchPosts(POSTS_URL);

  const blogPostRoutes = postsData.blogPosts.map((post) => {
    return `/blog/${post.id}`;
  });

  return (
    <div className='App'>
      <Switch>
        <PublicRoute exact path='/login' blogPostRoutes={blogPostRoutes}>
          <LoginPage />
        </PublicRoute>

        <PrivateRoute path='/' blogPostRoutes={blogPostRoutes}>
          <MainBlock postsData={postsData} />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
