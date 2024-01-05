import { GridItem, chakra, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import type { GasPriceInfo } from 'types/api/stats';

import { asymp, space } from 'lib/html-entities';

interface Props {
  name: string;
  info: GasPriceInfo | null;
}

const GasInfoRow = ({ name, info }: Props) => {
  const labelColor = useColorModeValue('blue.100', 'blue.600');

  const content = (() => {
    if (!info || info.price === null) {
      return 'N/A';
    }

    return (
      <>
        <span>{ info.price } Gwei</span>
        { info.time && (
          <chakra.span color="text_secondary">
            { space }per tx { asymp } { (info.time / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 }) }s
          </chakra.span>
        ) }
      </>
    );
  })();

  return (
    <>
      <GridItem color={ labelColor }>{ name }</GridItem>
      <GridItem textAlign="right">{ content }</GridItem>
    </>
  );
};

export default React.memo(GasInfoRow);
