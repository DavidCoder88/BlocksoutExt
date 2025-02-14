import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

// Dynamically import the WatchList component with client-side rendering only
// This page allows users to manage their watched addresses and transactions
const WatchList = dynamic(() => import('ui/pages/Watchlist'), { ssr: false });

// Watchlist page component
// Renders the interface for managing user's watched blockchain addresses and transactions
const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/account/watchlist">
      <WatchList/>
    </PageNextJs>
  );
};

export default Page;

// Use account authentication middleware for server-side props
export { account as getServerSideProps } from 'nextjs/getServerSideProps';
