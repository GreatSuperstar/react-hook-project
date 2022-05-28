export type Item = {
  /**
   * The db id of the item.
   */
  id: number;

  /**
   * In USD
   */
  price: number;

  /**
   * Display to the user
   */
  name: string;

  /**
   * amount remaining in inventory
   */
  inventory: number;

  url: string;
};

export const initialBalance = 20;

export const initialItems: Item[] = [
  {
    id: 0,
    name: 'Hair Shampoo',
    price: 5.17,
    inventory: 5,
    url: "https://miro.medium.com/fit/c/176/176/1*niOyJeU0lkyt6gt18Niifw.jpeg",
  },
  {
    id: 1,
    name: 'Conditioner',
    price: 5.85,
    inventory: 5,
    url: "https://miro.medium.com/fit/c/176/176/1*niOyJeU0lkyt6gt18Niifw.jpeg",
  },
  {
    id: 2,
    name: 'Laptop',
    price: 517,
    inventory: 2,
    url: "https://miro.medium.com/fit/c/176/176/1*niOyJeU0lkyt6gt18Niifw.jpeg",
  },
  {
    id: 3,
    name: 'Cereal',
    price: 1.14,
    inventory: 1,
    url: "https://miro.medium.com/fit/c/176/176/1*niOyJeU0lkyt6gt18Niifw.jpeg",
  },
  {
    id: 4,
    name: 'Milk',
    price: 1.0,
    inventory: 25,
    url: "https://miro.medium.com/fit/c/176/176/1*niOyJeU0lkyt6gt18Niifw.jpeg",
  },
];
