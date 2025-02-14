import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

// Dynamically import the CustomAbi component with client-side rendering only
// This page allows users to add and manage custom ABI definitions for smart contracts
const CustomAbi = dynamic(() => import('ui/pages/CustomAbi'), { ssr: false });

// Custom ABI management page component
// Renders the interface for adding and managing custom contract ABIs
const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/account/custom-abi">
      <CustomAbi/>
    </PageNextJs>
  );
};

export default Page;

// Use account authentication middleware for server-side props
export { account as getServerSideProps } from 'nextjs/getServerSideProps';
