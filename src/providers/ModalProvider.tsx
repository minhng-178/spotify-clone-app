'use client';

import AuthModal from '@/app/components/AuthModal';
import UploadModal from '@/app/components/UploadModal';
import { ProductWithPrice } from '@/types/types';
import { useEffect, useState } from 'react';

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      {/* <SubscribeModal products={products} /> */}
      <UploadModal />
    </>
  );
};

export default ModalProvider;
