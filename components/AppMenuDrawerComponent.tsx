'use client';

import React from 'react';
import { Drawer, DrawerContent } from '@heroui/react';

import AppMenuComponent from './AppMenuComponent';

import { menuInfo } from '@/data/MenuCard';

interface AppMenuDrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppMenuDrawerComponent = ({
  isOpen,
  onClose,
}: AppMenuDrawerComponentProps) => {
  return (
    <>
      <Drawer isOpen={isOpen} size="lg" onClose={onClose}>
        <DrawerContent>
          {(onCloseDrawer) => (
            <div className=" mt-5 mb-10">
              <AppMenuComponent menuCard={menuInfo} onClose={onCloseDrawer} />
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppMenuDrawerComponent;
