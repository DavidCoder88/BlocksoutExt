import {
  Flex,
  Link,
  Stack,
  Divider,
  useColorModeValue,
  // useDisclosure,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // Avatar,
  // IconButton,
  // Center,
} from '@chakra-ui/react';
import React from 'react';

import config from 'configs/app';
import NetworkLogo from 'ui/snippets/networkMenu/NetworkLogo';

import DeFiDropdown from './DeFiDropdown';
import Settings from './settings/Settings';
// import TopBarStats from './TopBarStats';

const feature = config.features.deFiDropdown;

const TopBar = () => {
  const bgColor = useColorModeValue('white.50', 'whiteAlpha.100');

  return (
    <Flex
      py={ 2 }
      px={{ base: 3, lg: 6 }}
      bgColor={ bgColor }
      justifyContent="space-between"
      alignItems="center"
      height="58px"
    >
      <NetworkLogo isCollapsed={ false }/>
      { /* <TopBarStats/> */ }
      <Stack direction="row" spacing={ 6 }>
        <Link
          alignSelf="center" fontSize="14px" fontWeight={ 600 } color="#000"
          textDecoration="none" _hover={{ color: '#000', textDecoration: 'none' }}
          href="/blocks">Blocks</Link>
        <Link alignSelf="center" fontSize="14px" fontWeight={ 600 } color="#000"
          textDecoration="none" _hover={{ color: '#000', textDecoration: 'none' }}
          href="/txs">Transactions</Link>
        <Link alignSelf="center" fontSize="14px" fontWeight={ 600 } color="#000"
          textDecoration="none" _hover={{ color: '#000', textDecoration: 'none' }}
          href="/token">Token</Link>
        <Menu>
          <MenuButton fontSize="14px" color="#000" background="#fff" _hover={{ background: '#fff' }} as={ Button }>APIs</MenuButton>
          <MenuList>
            <MenuItem>API 1</MenuItem>
            <MenuItem>API 2</MenuItem>
            { /* 根据需要添加更多二级菜单项 */ }
          </MenuList>
        </Menu>
      </Stack>
      <Flex alignItems="center">
        { feature.isEnabled && (
          <>
            <DeFiDropdown/>
            <Divider mr={ 3 } ml={{ base: 2, sm: 3 }} height={ 4 } orientation="vertical"/>
          </>
        ) }
        <Settings/>
      </Flex>
    </Flex>
  );
};

export default React.memo(TopBar);
