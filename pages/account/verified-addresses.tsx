import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

// Dynamically import the VerifiedAddresses component with client-side rendering only
// This page displays and manages user's verified blockchain addresses
const VerifiedAddresses = dynamic(() => import('ui/pages/VerifiedAddresses'), { ssr: false });

// Verified addresses page component
// Renders the interface for viewing and managing verified wallet addresses
const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/account/verified-addresses">
      <VerifiedAddresses/>
    </PageNextJs>
  );
};

export default Page;

// Use verified addresses specific middleware for server-side props
export { verifiedAddresses as getServerSideProps } from 'nextjs/getServerSideProps';
