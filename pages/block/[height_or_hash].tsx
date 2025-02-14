import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import type { Props } from 'nextjs/getServerSideProps';
import PageNextJs from 'nextjs/PageNextJs';

// Dynamically import the Block component with client-side rendering only
// This component displays detailed information about a specific block
const Block = dynamic(() => import('ui/pages/Block'), { ssr: false });

// Block details page component
// Renders information about a specific block identified by its height or hash
// Props include query parameters passed from getServerSideProps
const Page: NextPage<Props> = (props: Props) => {
  return (
    <PageNextJs pathname="/block/[height_or_hash]" query={ props.query }>
      <Block/>
    </PageNextJs>
  );
};

export default Page;

// Use base middleware for server-side props
// This handles the block height or hash parameter validation and data fetching
export { base as getServerSideProps } from 'nextjs/getServerSideProps';
