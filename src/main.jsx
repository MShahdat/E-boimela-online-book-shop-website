import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home.jsx';

import Authors from './pages/Authors.jsx';
import Genres from './pages/Genres.jsx';
import Publisher from './pages/Publishers.jsx';

import Context from './context/Context.jsx';
import BookDetails from './pages/BookDetails.jsx';
import Book from './pages/Book.jsx';
import BookPage from './component/BookPage.jsx';
import GenreBook from './component/genres/GenreBooks.jsx';
import AuthorBooks from './component/author/AuthorBooks.jsx';
import PublisherBooks from './component/publisher/PublisherBooks.jsx';
import Publish from './pages/Publish.jsx';
import Refund from './pages/Refund.jsx';
import Recharge from './pages/Recharge.jsx';
import Help from './pages/Help.jsx';
import Policy from './pages/Policy.jsx';
import TermsConditions from './pages/TermsConditions.jsx';
import Checkout from './pages/Checkout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/authors',
        element: <Authors></Authors>
      },
      {
        path: '/authors/:category',
        element: <AuthorBooks></AuthorBooks>
      },
      {
        path: "/genres",
        element: <Genres></Genres>
      },
      {
        path: '/genres/:category',
        element: <GenreBook></GenreBook>
      },
      {
        path: "/publishers",
        element: <Publisher></Publisher>
      },
      {
        path: '/publishers/:category',
        element: <PublisherBooks></PublisherBooks>
      },
      {
        path: '/books',
        element:  <Book></Book>
      },
      {
        path: '/books/details/:id',
        element: <BookDetails></BookDetails>
      },
      {
        path: '/publish',
        element: <Publish></Publish>,
      },
      {
        path: '/refund',
        element: <Refund></Refund>
      },
      {
        path: '/recharge-balance',
        element: <Recharge></Recharge>
      },
      {
        path: '/help&support',
        element: <Help></Help>
      },
      {
        path: '/policy',
        element: <Policy></Policy>
      },
      {
        path: '/terms&conditions',
        element: <TermsConditions></TermsConditions>
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </StrictMode>,
)
