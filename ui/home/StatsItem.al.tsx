import type { SystemStyleObject } from '@chakra-ui/react';
import { Skeleton, Flex, useColorModeValue, chakra } from '@chakra-ui/react';
import React from 'react';

import breakpoints from 'theme/foundations/breakpoints';
import type { IconName } from 'ui/shared/IconSvg';
import IconSvg from 'ui/shared/IconSvg';

type Props = {
  icon: IconName;
  title: string;
  value: string | React.ReactNode;
  className?: string;
  tooltip?: React.ReactNode;
  url?: string;
  isLoading?: boolean;
}

const LARGEST_BREAKPOINT = '1240px';

const StatsItem = ({ icon, title, value, className, tooltip, url, isLoading }: Props) => {
  const sxContainer: SystemStyleObject = {
    [`@media screen and (min-width: ${ breakpoints.lg }) and (max-width: ${ LARGEST_BREAKPOINT })`]: { flexDirection: 'column' },
  };

  const sxText: SystemStyleObject = {
    [`@media screen and (min-width: ${ breakpoints.lg }) and (max-width: ${ LARGEST_BREAKPOINT })`]: { alignItems: 'center' },
  };

  const bgColor = useColorModeValue('#fdf5ed', 'whiteAlpha.10');
  const loadingBgColor = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');
  // const textColor = useColorModeValue('black', 'white')

  return (
    <Flex
      backgroundColor={ isLoading ? loadingBgColor : bgColor }
      padding={ 3 }
      borderRadius="md"
      flexDirection="row"
      sx={ sxContainer }
      alignItems="center"
      columnGap={ 3 }
      rowGap={ 2 }
      textAlign="center"
      className={ className }
      color="#F39B4B"
      position="relative"
      { ...(url && !isLoading ? {
        as: 'a',
        href: url,
      } : {}) }
      justifyContent="center"
    >
      { false && <IconSvg name={ icon } boxSize={ 7 } isLoading={ isLoading } borderRadius="base"/> }
      <Flex
        flexDirection="column"
        alignItems="start"
        sx={ sxText }
      >
        <Skeleton isLoaded={ !isLoading } fontWeight={ 600 } fontSize="29px" width="100%"
          color={ useColorModeValue('#F39B4B', 'white') } borderRadius="base">
          { typeof value === 'string' ? <span>{ value }</span> : value }
        </Skeleton>
        <Skeleton isLoaded={ !isLoading } color="#F39B4B" fontSize="14px" width="100%"
          lineHeight="16px" borderRadius="base">
          <span>{ title }</span>
        </Skeleton>
      </Flex>
      { tooltip }
    </Flex>
  );
};

export default chakra(StatsItem);
