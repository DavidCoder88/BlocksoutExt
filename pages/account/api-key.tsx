import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

// Dynamically import the ApiKeys component with client-side rendering only
// This page allows users to manage their API keys for accessing Blockscout API
const ApiKeys = dynamic(() => import('ui/pages/ApiKeys'), { ssr: false });

// Account API key page component
// Renders the API keys management interface wrapped in the main page layout
const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/account/api-key">
      <ApiKeys/>
    </PageNextJs>
  );
};

export default Page;

// Use account authentication middleware for server-side props
export { account as getServerSideProps } from 'nextjs/getServerSideProps';
