import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

// Dynamically import the PrivateTags component with client-side rendering only
// This page allows users to create and manage private address tags
const PrivateTags = dynamic(() => import('ui/pages/PrivateTags'), { ssr: false });

// Private address tags page component
// Renders the interface for managing user's private address labels and tags
const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/account/tag-address">
      <PrivateTags/>
    </PageNextJs>
  );
};

export default Page;

// Use account authentication middleware for server-side props
export { account as getServerSideProps } from 'nextjs/getServerSideProps';
