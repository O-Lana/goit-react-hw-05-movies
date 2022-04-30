import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const createChunk = componentName => {
  return lazy(() => 
    import(`../src/views/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomeView = createChunk('HomeView');
const MoviesSearchView = createChunk('MoviesSearchView');
const MovieDetailsView = createChunk('MovieDetailsView');
const CastView = createChunk('CastView');
const ReviewsView = createChunk('ReviewsView');



export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesSearchView />} />
          <Route path="movies/:moviesId" element={<MovieDetailsView />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<ReviewsView />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
