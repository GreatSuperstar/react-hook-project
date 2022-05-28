import React from 'react';
import styles from './index.module.scss';
import { useCheckout } from '../mock-backend';
import Card from './components/Card';

const Index = () => {
  const { items, buy } = useCheckout();
console.log(items);
  return (
    <main className={styles.main}>
      <Card />
      {
        items.map((item) =><Card name={item.name} price={item.price} inventory={item.inventory} key={item.id}/>)
      }
    </main>
  );
};

export default Index;
