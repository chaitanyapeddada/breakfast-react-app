const menuItems = {
  breakfast: [
      { 
    id: 1,
    name: 'Idli',
    price: '₹30',
    description: 'Soft and fluffy steamed rice cakes served with coconut chutney and sambar. A healthy South Indian breakfast staple.',
    image: '/images/idly.jpg'
  },
  { 
    id: 2,
    name: 'Dosa',
    price: '₹160',
    description: 'Thin, crispy fermented rice and lentil crepe served with coconut chutney and sambar. A classic South Indian favorite.',
    image: '/images/dosa.jpg'
  },
  { 
    id: 3,
    name: 'Masala Dosa',
    price: '₹150',
    description: 'Crispy dosa stuffed with spiced potato masala, served with coconut chutney, sambar and special red chutney.',
    image: '/images/masalaDosa.jpg'
  },
  { 
    id: 4,
    name: 'Poori',
    price: '₹50',
    description: 'Deep-fried whole wheat bread that puffs up into a golden brown sphere, served with potato curry and chickpea curry.',
    image: '/images/poori.jpg'
  },
  { 
    id: 5,
    name: 'Vada',
    price: '₹50',
    description: 'Crispy, savory donut-shaped fritters made from seasoned lentil batter, served with coconut chutney and sambar.',
    image: '/images/vada.jpg'
  }
  ],
  lunch: [
    {
      id: 101,
      name: 'Veg Biryani',
      price: '₹180',
      description: 'Fragrant basmati rice cooked with mixed vegetables, aromatic spices, and herbs. Served with raita and salan.',
      image: '/images/vegBiryani.jpg',
      category: 'veg'
    },
    {
      id: 102,
      name: 'Chicken Biryani',
      price: '₹220',
      description: 'Tender chicken pieces cooked with aromatic basmati rice, special spices, and garnished with fried onions. Served with raita.',
      image: '/images/chickenBiryani.jpg',
      category: 'non-veg'
    },
    {
      id: 103,
      name: 'South Indian Meals',
      price: '₹150',
      description: 'Traditional thali with rice, sambar, rasam, 3 varieties of vegetables, curd, and papad. Served on banana leaf.',
      image: '/images/meals.jpg',
      category: 'veg'
    },
    {
      id: 104,
      name: 'Veg Fried Rice',
      price: '₹160',
      description: 'Wok-tossed rice with mixed vegetables, soy sauce, and Indo-Chinese spices. Served with manchurian sauce.',
      image: '/images/vegFriedRice.jpg',
      category: 'veg'
    },
    {
      id: 105,
      name: 'Chicken Fried Rice',
      price: '₹190',
      description: 'Wok-fried rice with chicken pieces, vegetables, and Chinese seasonings. Served with chili sauce.',
      image: '/images/chickenFriedRice.jpg',
      category: 'non-veg'
    },
    {
      id: 106,
      name: 'Veg Noodles',
      price: '₹150',
      description: 'Stir-fried noodles with crunchy vegetables and Indo-Chinese sauces. Garnished with spring onions.',
      image: '/images/vegNoodles.jpg',
      category: 'veg'
    },
    {
      id: 107,
      name: 'Chicken Noodles',
      price: '₹180',
      description: 'Hakka noodles tossed with chicken strips, vegetables, and oriental seasonings.',
      image: '/images/chickenNoodles.jpg',
      category: 'non-veg'
    },
    {
      id: 108,
      name: 'Special Non-Veg Thali',
      price: '₹250',
      description: 'Complete meal with chicken curry, fish fry, egg masala, rice, rotis, dal, and accompaniments.',
      image: '/images/nonVegThali.jpg',
      category: 'non-veg'
    },
     {
      id: 109,
      name: 'Chciken pakodi',
      price: '₹250',
      description: 'Roasted chicken',
      image: '/images/chickenpakodi.jpg',
      category: 'non-veg'
    }
  ]
};

export default menuItems;