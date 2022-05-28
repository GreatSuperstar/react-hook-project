import React from 'react';
import styles from './index.module.scss';
import { useCheckout } from '../mock-backend';
import Card from './components/Card';
import Router from 'next/router';

const Index = () => {
  const { items, buy } = useCheckout();
  const handleClick = ()=>{
    Router.push("/cart");
  }
  return (
    <main className={styles.main}>
      <div onClick={handleClick} style={{cursor:'pointer', marginBottom: '20px', background: 'green', width:'50px'}}>Go To Cart</div>
      {
        items.map((item) =><Card name={item.name} price={item.price} inventory={item.inventory} url={item.url} key={item.id} type={1}/>)
      }
    </main>
  );
};

export default Index;
