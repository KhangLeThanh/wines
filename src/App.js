import React, { useState } from 'react';
import WinesAPI from './services/api';
import HomePage from './components/HomePage';

const DEFAULT_LIMIT = 5;

export default function App() {
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const { wines, loading, error } = WinesAPI(limit);

  return (
    <div className='application_container'>
      {
        error ?
          <h1>An error occured...</h1> :
          <HomePage
            data={wines}
            loadMore={() => setLimit(limit + DEFAULT_LIMIT)}
            isLoading={loading}
          />
      }
    </div>
  );
}