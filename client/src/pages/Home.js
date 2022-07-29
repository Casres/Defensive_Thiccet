import React from 'react';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_ITEM);
  const items = data?.items || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
        </div>
          <div className="col-12 col-lg-3 mb-3">
          </div>

      </div>
    </main>
  );
};

export default Home;
