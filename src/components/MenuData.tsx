import { MenuImages } from '../components/MenuImages';
export const menuItems = {
    soup: [
      { name: 'Chicken Corn Soup', desc: 'Chicken, sweet corn, smooth broth', price: '$5.99 / $7.99', image: MenuImages.Chicken_Corn_Soup },
      { name: 'Hot & Sour Soup', desc: 'Spicy and tangy soup with chicken', price: '$5.99 / $7.99', image: MenuImages.Hot_Sour_Soup },
      { name: 'Egg Drop Soup', desc: 'Silky broth with egg ribbons', price: '$5.99 / $7.99', image: MenuImages.Egg_Drop_Soup },
      { name: 'Wonton Soup', desc: 'Chicken wontons in clear broth', price: '$5.99 / $7.99', image: MenuImages.Wonton_Soup },
      { name: 'Tom Yum Soup', desc: 'Spicy Thai-style soup with herbs', price: '$5.99 / $7.99', image: MenuImages.Tom_Yum_Soup },
    ],
    chicken: [
      { name: 'Chicken Broccoli', desc: 'Tender chicken tossed with fresh broccoli in savory sauce', price: '$13.99', image: MenuImages.Chicken_Broccoli },
      { name: 'Sesame Chicken', desc: 'Crispy chicken glazed in sweet sesame sauce', price: '$13.99', image: MenuImages.Sesame_Chicken },
      { name: 'Chicken Manchurian', desc: 'Juicy chicken in spicy Manchurian gravy', price: '$13.99', image: MenuImages.Chicken_Manchurian },
      { name: 'Chicken w/ Garlic Sauce', desc: 'Stir-fried chicken in bold garlic sauce', price: '$13.99', image: MenuImages.Chicken_W_Garlic },
      { name: 'Hakka Chicken', desc: 'Spicy Hakka-style chicken with peppers', price: '$13.99', image: MenuImages.Hakka_Chicken },
      { name: 'Chicken Bamboo Shoot', desc: 'Chicken sautéed with bamboo shoots', price: '$13.99', image: MenuImages.Chicken_Bamboo_Shoot },
      { name: 'Chicken Chilli', desc: 'Fiery chicken with chilies and onions', price: '$13.99', image: MenuImages.Chicken_Chilli },
      { name: 'Chicken w/ Mushrooms', desc: 'Chicken cooked with mushrooms in brown sauce', price: '$13.99', image: MenuImages.Chicken_w_Mushrooms },
      { name: 'Black Pepper Chicken', desc: 'Chicken stir-fried in black pepper sauce', price: '$13.99', image: MenuImages.Black_Pepper_Chicken },
      { name: 'Hunan Chicken', desc: 'Spicy Hunan-style chicken with vegetables', price: '$13.99', image: MenuImages.Hunan_Chicken },
    ],
    beef: [
      { name: 'Beef Broccoli', desc: 'Tender beef with broccoli', price: '$14.99', image: MenuImages.Beef_Broccoli },
      { name: 'Sesame Beef', desc: 'Crispy beef in sweet sesame glaze', price: '$14.99', image: MenuImages.Sesame_Beef },
      { name: 'Hakka Beef', desc: 'Spicy Hakka-style beef', price: '$14.99', image: MenuImages.Hakka_Beef },
      { name: 'Beef w/ Garlic Sauce', desc: 'Beef tossed in bold garlic sauce', price: '$14.99', image: MenuImages.Beef_w_Garlic_Sauce },
      { name: 'Beef w/ Mushrooms', desc: 'Beef cooked with mushrooms', price: '$14.99', image: MenuImages.Beef_w_Mushrooms },
      { name: 'Beef w/ Scallion', desc: 'Savory beef with fresh scallions', price: '$14.99', image: MenuImages.Beef_w_Scallion },
      { name: 'Beef Bamboo Shoot', desc: 'Beef with bamboo shoots', price: '$14.99', image: MenuImages.Beef_Bamboo_Shoot },
      { name: 'Crispy Beef Chilli', desc: 'Crispy beef tossed in chilli sauce', price: '$14.99', image: MenuImages.Crispy_Beef_Chilli },
      { name: 'Hunan Beef', desc: 'Spicy Hunan-style beef', price: '$14.99', image: MenuImages.Hunan_Beef },
      { name: 'Black Pepper Beef', desc: 'Peppery black pepper beef', price: '$14.99', image: MenuImages.Black_Pepper_Beef },
    ],

    seafood: [
      { name: 'Shrimp Broccoli', desc: 'Shrimp sautéed with broccoli', price: '$14.99', image: MenuImages.Shrimp_Broccoli },
      { name: 'Sesame Shrimp', desc: 'Crispy shrimp in sesame glaze', price: '$14.99', image: MenuImages.Sesame_Shrimp },
      { name: 'Shrimp w/ Garlic Sauce', desc: 'Shrimp tossed in garlic sauce', price: '$14.99', image: MenuImages.Shrimp_w_Garlic_Sauce },
      { name: 'Hakka Shrimp', desc: 'Spicy Hakka-style shrimp', price: '$14.99', image: MenuImages.Hakka_Shrimp },
      { name: 'Shrimp Bamboo Shoot', desc: 'Shrimp with bamboo shoots', price: '$14.99', image: MenuImages.Shrimp_Bamboo_Shoot },
      { name: 'Shrimp Chilli', desc: 'Spicy shrimp with chilies', price: '$14.99', image: MenuImages.Shrimp_Chilli },
      { name: 'Shrimp w/ Mushrooms', desc: 'Shrimp cooked with mushrooms', price: '$14.99', image: MenuImages.Shrimp_w_Mushrooms },
      { name: 'Shrimp Manchurian', desc: 'Crispy shrimp in Manchurian sauce', price: '$14.99', image: MenuImages.Shrimp_Manchurian },
      { name: 'Fish Chilli', desc: 'Spicy fish with chilies and onions', price: '$14.99', image: MenuImages.Fish_Chilli },
      { name: 'Fish Fry (Whole)', desc: 'Whole fish fried crispy', price: '$14.99', image: MenuImages.Fish_Fry_Whole },
    ],

    noodles: [
      { name: 'Chicken Lo Mein', desc: 'Lo mein noodles with chicken', price: '$10.99 / $13.99', image: MenuImages.Chicken_Lo_Mein },
      { name: 'Beef Lo Mein', desc: 'Lo mein noodles with beef', price: '$10.99 / $13.99', image: MenuImages.Beef_Lo_Mein },
      { name: 'Shrimp Lo Mein', desc: 'Lo mein noodles with shrimp', price: '$11.99 / $14.99', image: MenuImages.Shrimp_Lo_Mein },
      { name: 'Vegetable Lo Mein', desc: 'Classic veggie lo mein', price: '$9.99 / $11.99', image: MenuImages.Vegetable_Lo_Mein },
      { name: 'Singapore Noodles', desc: 'Spicy curry-flavored noodles', price: '$11.99 / $14.99', image: MenuImages.Singapore_Noodles },
    ],

    vegetable: [
      { name: 'Broccoli w/ Garlic Sauce', desc: 'Broccoli cooked in garlic sauce', price: '$10.99', image: MenuImages.Broccoli_w_Garlic_Sauce },
      { name: 'Sesame Tofu', desc: 'Crispy tofu in sesame glaze', price: '$13.99', image: MenuImages.Sesame_Tofu },
      { name: 'Vegetable Tofu', desc: 'Tofu with mixed vegetables', price: '$13.99', image: MenuImages.Vegetable_Tofu },
      { name: 'Hakka Vegetable', desc: 'Spicy Hakka-style vegetables', price: '$10.99', image: MenuImages.Hakka_Vegetable },
      { name: 'Paneer Chilli', desc: 'Paneer tossed in chilli sauce', price: '$10.99', image: MenuImages.Paneer_Chilli },
      { name: 'Tofu Chilli', desc: 'Crispy tofu in chilli sauce', price: '$10.99', image: MenuImages.Tofu_Chilli },
    ],

    rice: [
      { name: 'Chicken Fried Rice', desc: 'Fried rice with chicken', price: '$9.99 / $10.99', image: MenuImages.Chicken_Fried_Rice },
      { name: 'Beef Fried Rice', desc: 'Savory beef fried rice', price: '$10.99 / $11.99', image: MenuImages.Beef_Fried_Rice },
      { name: 'Shrimp Fried Rice', desc: 'Shrimp fried rice', price: '$11.99 / $12.99', image: MenuImages.Shrimp_Fried_Rice },
      { name: 'Veg Fried Rice', desc: 'Vegetable fried rice', price: '$8.99 / $9.99', image: MenuImages.Veg_Fried_Rice },
      { name: 'Mixed Special Fried Rice', desc: 'Chicken, beef & shrimp rice', price: '$12.99 / $13.99', image: MenuImages.Mixed_Special_Fried_Rice },
      { name: 'White Rice (Pint)', desc: 'Steamed white rice', price: '$1.00', image: MenuImages.White_Rice_pint },
    ],

    appetizers: [
      { name: 'Egg Roll', desc: 'Crispy vegetable egg roll', price: '$1.50', image: MenuImages.Egg_Roll },
      { name: 'Chicken Roll', desc: 'Crispy chicken roll', price: '$2.49', image: MenuImages.Chicken_Roll },
      { name: 'Chicken Wonton (5 pcs)', desc: 'Crispy chicken wontons', price: '$6.99', image: MenuImages.Chicken_Wonton },
      { name: 'Chicken Wings (6 pcs)', desc: 'Choice of sauces available', price: '$9.99', image: MenuImages.Chicken_Wings },
      { name: 'Masala Fries', desc: 'Crispy fries with masala seasoning', price: '$4.99 / $6.99', image: MenuImages.Masala_Fries },
    ],

    drinks: [
      { name: 'Lassi', desc: 'Refreshing yogurt drink', price: '$4.49', image: MenuImages.Lassi },
      { name: 'Chai Tea', desc: 'Warm spiced tea', price: '$2.99', image: MenuImages.Chai_Tea },
      { name: 'Green Tea', desc: 'Light and soothing tea', price: '$2.99', image: MenuImages.Green_Tea },
      { name: 'Can Soda', desc: 'Assorted soft drinks', price: '$1.99', image: MenuImages.Can_Soda },
      { name: 'Fruit Smoothie', desc: 'Fresh fruit smoothie', price: '$6.99', image: MenuImages.Fruit_Smoothie },
    ],
  };

export const categories = [
      { id: 'soup', name: 'Soup' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'beef', name: 'Beef' },
    { id: 'seafood', name: 'Seafood' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'vegetable', name: 'Vegetable' },
    { id: 'rice', name: 'Rice' },
    { id: 'drinks', name: 'Drinks' },
  ];