'use client';

import React from 'react';
import { Drawer, DrawerContent } from '@heroui/react';

import AppMenuComponent from './AppMenuComponent';

import { menuInfo } from '@/data/MenuCard';
import { useScreenSize } from '@/helpers/useScreensize';

interface AppMenuDrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppMenuDrawerComponent = ({
  isOpen,
  onClose,
}: AppMenuDrawerComponentProps) => {
  const screenSizeDetector = useScreenSize();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement={
          screenSizeDetector === 'tablet'
            ? 'top'
            : screenSizeDetector === 'desktop'
              ? 'right'
              : 'top'
        }
        size={
          screenSizeDetector === 'tablet'
            ? 'md'
            : screenSizeDetector === 'desktop'
              ? 'full'
              : 'xl'
        }
        onClose={onClose}
      >
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
