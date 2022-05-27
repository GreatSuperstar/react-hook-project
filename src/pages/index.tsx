import React from 'react';
import styles from './index.module.scss';
import { useCheckout } from '../mock-backend';

const Index = () => {
  const { items, buy } = useCheckout();

  return (
    <main className={styles.main}>
      <h1>Create, Inc. Store</h1>
      {/** @TODO: Not implemented */}
    </main>
  );
};

export default Index;
