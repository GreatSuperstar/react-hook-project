import React from 'react';
import styles from '../index.module.scss';
import { useCheckout } from '../../mock-backend';
import Card from '../components/Card';
import Router from 'next/router';

const Index = () => {
  const { items, buy } = useCheckout();
  const handleClick = ()=>{
    Router.push("/"); // This is action to call page like (link path="/" ) in react-next.
  }
  return (
    <main className={styles.main}>
        <div className="btn" onClick={handleClick} style={{cursor:'pointer', marginBottom: '20px', background: 'green', width:'50px'}}>Go To Home</div>
      {
        items.map((item) =><Card name={item.name} price={item.price} inventory='' url={item.url} key={item.id} type={0}/>)
      }
    </main>
  );
};

export default Index;