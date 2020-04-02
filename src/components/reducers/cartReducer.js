<<<<<<< HEAD
import largePep from '../../images/lrg-pep.jpg'
import indPep from '../../images/indv-pep.jpg'
import larMedSupreme from '../../images/pizza_supreme.jpg'
import larMedCali from '../../images/pizza_cali.jpg'
import largeVeg from '../../images/veg.png'
import largeBBQ from '../../images/pizza-bbq.jpg'
import largeMeat from '../../images/meat.png'

import sampler from '../../images/app_sampler.jpg'
import cheesyBread from '../../images/cheesy_bread.jpg'
import fries from '../../images/fries.jpg'
import unicorn from '../../images/unicorn-churros.jpg'
import cookie from '../../images/cookie.jpg'
import cinnamon from '../../images/iced_cinnamon_sticks.jpg'

import salad from '../../images/salad.jpg'

import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,SET_LOCATION,CART_VISIBLE } from './actions/cartActions.js'
import { CHECKOUT } from './actions/checkout.js'
;

const initState = {
    items: [
        
            {id:101,title:'Individual Cheese Pizza', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:102,title:'Individual Pepperoni Pizza', desc:'', price:8.49, img: indPep, type: 'Pizza'},
            {id:103,title:'Individual Sausage Pizza', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:104,title:'Individual Beef Pizza', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:105,title:'Individual Canadian Bacon and Pineapple', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:106,title:'Individual Pepperoni and Jalapeno', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:107,title:'Individual Cauliflower Crust Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},


            {id:111,title:'Medium Cheese Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:112,title:'Medium Pepperoni Pizza', desc:'', price:12,img: largePep, type: 'Pizza'},
            {id:113,title:'Medium Sausage Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:114,title:'Medium Beef Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:115,title:'Medium Canadian Bacon and Pineapple Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:116,title:'Medium Pepperoni and Jalepeno Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},

            {id:121,title:'Large Cheese Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:122,title:'Large Pepperoni Pizza', desc:'', price:12,img: largePep, type: 'Pizza'},
            {id:123,title:'Large Sausage Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:124,title:'Large Beef Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:125,title:'Large Canadian Bacon and Pineapple Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:126,title:'Large Pepperoni and Jalepeno Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},

            {id:201,title:'Family Fun Deal', desc: "Bring home the FUN with our Family Fun Deal that includes 2 Large, 1-Topping Pizzas*, 1 Goody Bag with games and toys and 800 Tickets to use on your next visit!", price:20, style: 'no-image', type: 'pack'},
            {id:202,title:'Small Party Pack', desc: "The Small Party Pack has everything you need to deliver a party right to your door: *2 Large 1-Topping Pizzas*, Round Cake with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 6 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.",price:17, style: 'no-image', type: 'pack'},
            {id:203,title:'Large Party Pack', desc: "The Large Party Pack has everything you need to deliver a party right to your door: *3 Large 1-Topping Pizzas*, ¼ Sheet Cake** with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 12 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.", price:120, style: 'no-image', type: 'pack'},

            {id:401,title:'Cheesy Bread', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). 680 Cal.", price:4.99,img: cheesyBread, type: 'app'},
            {id:402,title:'Parmesan Breadsticks', desc: "Traditional Cheese Pizza", price:12, style: 'no-image', type: 'app'},
            {id:403,title:'French Fries', desc: "Traditional Cheese Pizza", price:12,img: fries, type: 'app'},
            {id:404,title:'Wings', desc: "Three Cheese Blend Pizza", price:12, style: 'no-image', type: 'app'},
            {id:405,title:'Sampler Platter', desc: "Pepperoni, Sausage, Mushroom, Green Peppers",price:17,img: sampler, type: 'app'},
            {id:406,title:'Mozzarella Sticks', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:17, style: 'no-image', type: 'app'},
            {id:407,title:'Rock and Pizza Roll', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). Calories: 680", price:4.99, style: 'no-image', type: 'app'},
            {id:408,title:'Skee-Ball Pepperoni Bites', desc: "Give it a roll! Start your meal with fresh cheese and pepperoni rolls – QTY 8. Served with Marinara sauce.",price:6.99, style: 'no-image', type: 'app'},
           
            {id:501,title:'Cali Alredo Pizza (Individual)', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:8.49, style: 'no-image', type: 'specialty'},
            {id:502,title:'Supreme Pizza (Individual', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)",price:8.49, style: 'no-image', type: 'specialty'},
            {id:503,title:'Veggie Pizza (Individual)', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:8.49, style: 'no-image', type:'specialty'},
            {id:504,title:'Five Meat Pizza (Individual)', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:8.49, style: 'no-image', type: 'specialty'},
            {id:505,title:'BBQ Chicken Pizza (Individual)', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)",price:8.49, style: 'no-image', type: 'specialty'},
            
            {id:511,title:'Cali Alredo Pizza (Medium)', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:12.99, img: larMedCali, type: 'specialty'},
            {id:512,title:'Supreme Pizza (Medium)', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)", price:15.99, img: larMedSupreme, type: 'specialty'},
            {id:513,title:'Veggie Pizza (Medium)', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:12.99, style: 'no-image', type:'specialty'},
            {id:514,title:'Five Meat Pizza (Medium)', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:12.99, style: 'no-image', type: 'specialty'},
            {id:515,title:'BBQ Chicken Pizza (Medium)', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)", price:12.99, style: 'no-image', type: 'specialty'},

            {id:521,title:'Cali Alredo Pizza (Large)', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:15.99, img: larMedSupreme, type: 'specialty'},
            {id:522,title:'Supreme Pizza (Large)', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)", price:15.99, img: larMedCali, type: 'specialty'},
            {id:523,title:'Veggie Pizza (Large)', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:15.99, img: largeVeg, type:'specialty'},
            {id:524,title:'Five Meat Pizza (Large)', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:15.99, img: largeMeat, type: 'specialty'},
            {id:525,title:'BBQ Chicken Pizza (Large)', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)", price:15.99, img: largeBBQ, type: 'specialty'},
           
            {id:601,title:'Unicorm Churros', desc: "Traditional Pepperoni Pizza", price:14,img: unicorn, type: 'dessert'},
            {id:602,title:'Iced Cinnamon Sticks', desc: "Traditional Cheese Pizza", price:12,img: cinnamon, type: 'dessert'},
            {id:603,title:'Giant Warm Cookie', desc: "Traditional Cheese Pizza", price:12,img: cookie, type: 'dessert'},
           
            {id:701,title:'House Salad', desc: "Traditional Pepperoni Pizza", price:4.99, img: salad, type: 'salad'},
           
            {id:801,title:'Pepsi', desc: '', price:1.5, style: 'no-image', type: 'beverage'},
          
            {id:901,title:'$4.99 Large Cheese', desc: "Carryout Deal", price:4.99, style: 'no-image', type: 'deal', savings:8.99},
            {id:902,title:'$6.99 Large Pepperoni', desc: "Carryout Deal", price:6.99, img: largePep, type:'deal', savings:8.99},
            {id:903,title:'$5 Small Wings', desc: "Carryout Deal",price:5, style: 'no-image', type: 'deal', savings:3.99},

        ],
        individualPizzas: [ 
           
            {id:101,title:'Individual Cheese Pizza', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:102,title:'Individual Pepperoni Pizza', desc:'', price:8.49, img: indPep, type: 'Pizza'},
            {id:103,title:'Individual Sausage Pizza', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:104,title:'Individual Beef Pizza', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:105,title:'Individual Canadian Bacon and Pineapple', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:106,title:'Individual Pepperoni and Jalapeno', desc:'', price:8.49, style: 'no-image', type: 'Pizza'},
            {id:107,title:'Individual Cauliflower Crust Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
           
        ],

        mediumPizzas: [ 
           
            {id:111,title:'Medium Cheese Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:112,title:'Medium Pepperoni Pizza', desc:'', price:12,img: largePep, type: 'Pizza'},
            {id:113,title:'Medium Sausage Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:114,title:'Medium Beef Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:115,title:'Medium Canadian Bacon and Pineapple Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
            {id:116,title:'Medium Pepperoni and Jalepeno Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
       
    ],
       largePizzas: [ 
           

        {id:121,title:'Large Cheese Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
        {id:122,title:'Large Pepperoni Pizza', desc:'', price:12,img: largePep, type: 'Pizza'},
        {id:123,title:'Large Sausage Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
        {id:124,title:'Large Beef Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
        {id:125,title:'Large Canadian Bacon and Pineapple Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
        {id:126,title:'Large Pepperoni and Jalepeno Pizza', desc:'', price:12, style: 'no-image', type: 'Pizza'},
           
        ],
        indSpecialty: [
            {id:501,title:'Cali Alredo Pizza (Individual)', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:8.49, style: 'no-image', type: 'specialty'},
            {id:502,title:'Supreme Pizza (Individual', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)",price:8.49, style: 'no-image', type: 'specialty'},
            {id:503,title:'Veggie Pizza (Individual)', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:8.49, style: 'no-image', type:'specialty'},
            {id:504,title:'Five Meat Pizza (Individual)', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:8.49, style: 'no-image', type: 'specialty'},
            {id:505,title:'BBQ Chicken Pizza (Individual)', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)",price:8.49, style: 'no-image', type: 'specialty'},

        ],
        medSpecialty: [
            {id:511,title:'Cali Alredo Pizza (Medium)', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:12.99, img: larMedCali, type: 'specialty'},
            {id:512,title:'Supreme Pizza (Medium)', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)", price:15.99, img: larMedSupreme, type: 'specialty'},
            {id:513,title:'Veggie Pizza (Medium)', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:12.99, style: 'no-image', type:'specialty'},
            {id:514,title:'Five Meat Pizza (Medium)', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:12.99, style: 'no-image', type: 'specialty'},
            {id:515,title:'BBQ Chicken Pizza (Medium)', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)", price:12.99, style: 'no-image', type: 'specialty'},

        ],
        larSpecialty: [
            {id:521,title:'Cali Alredo Pizza (Large)', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:15.99, img: larMedSupreme, type: 'specialty'},
            {id:522,title:'Supreme Pizza (Large)', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)", price:15.99, img: larMedCali, type: 'specialty'},
            {id:523,title:'Veggie Pizza (Large)', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:15.99, img: largeVeg, type:'specialty'},
            {id:524,title:'Five Meat Pizza (Large)', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:15.99, img: largeMeat, type: 'specialty'},
            {id:525,title:'BBQ Chicken Pizza (Large)', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)", price:15.99, img: largeBBQ, type: 'specialty'},

        ],
        apps: [
            {id:401,title:'Cheesy Bread', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). 680 Cal.", price:4.99,img: cheesyBread, type: 'app'},
            {id:402,title:'Parmesan Breadsticks', desc: "Traditional Cheese Pizza", price:12, style: 'no-image', type: 'app'},
            {id:403,title:'French Fries', desc: "Traditional Cheese Pizza", price:12,img: fries, type: 'app'},
            {id:404,title:'Wings', desc: "Three Cheese Blend Pizza", price:12, style: 'no-image', type: 'app'},
            {id:405,title:'Sampler Platter', desc: "Pepperoni, Sausage, Mushroom, Green Peppers",price:17,img: sampler, type: 'app'},
            {id:406,title:'Mozzarella Sticks', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:17, style: 'no-image', type: 'app'},
            {id:407,title:'Rock and Pizza Roll', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). Calories: 680", price:4.99, style: 'no-image', type: 'app'},
            {id:408,title:'Skee-Ball Pepperoni Bites', desc: "Give it a roll! Start your meal with fresh cheese and pepperoni rolls – QTY 8. Served with Marinara sauce.",price:6.99, style: 'no-image', type: 'app'},
        ],
        packs: [
            {id:201,title:'Family Fun Deal', desc: "Bring home the FUN with our Family Fun Deal that includes 2 Large, 1-Topping Pizzas*, 1 Goody Bag with games and toys and 800 Tickets to use on your next visit!", price:20, style: 'no-image', type: 'pack'},
            {id:202,title:'Small Party Pack', desc: "The Small Party Pack has everything you need to deliver a party right to your door: *2 Large 1-Topping Pizzas*, Round Cake with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 6 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.",price:17, style: 'no-image', type: 'pack'},
            {id:203,title:'Large Party Pack', desc: "The Large Party Pack has everything you need to deliver a party right to your door: *3 Large 1-Topping Pizzas*, ¼ Sheet Cake** with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 12 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.", price:120, style: 'no-image', type: 'pack'},
        ],
        salads: [
            {id:701,title:'House Salad', desc: "Traditional Pepperoni Pizza", price:4.99, img: salad, type: 'salad'},
  
        ],
        deals: [
            {id:901,title:'$4.99 Large Cheese', desc: "Carryout Deal", price:4.99, style: 'no-image', type: 'deal', savings:8.99},
            {id:902,title:'$6.99 Large Pepperoni', desc: "Carryout Deal", price:6.99, img: largePep, type:'deal', savings:8.99},
            {id:903,title:'$5 Small Wings', desc: "Carryout Deal",price:5, style: 'no-image', type: 'deal', savings:3.99},
        ],
        desserts: [
            {id:601,title:'Unicorm Churros', desc: "Traditional Pepperoni Pizza", price:14,img: unicorn, type: 'dessert'},
            {id:602,title:'Iced Cinnamon Sticks', desc: "Traditional Cheese Pizza", price:12,img: cinnamon, type: 'dessert'},
            {id:603,title:'Giant Warm Cookie', desc: "Traditional Cheese Pizza", price:12,img: cookie, type: 'dessert'},
        ],
        beverages: [
            {id:801,title:'Pepsi', desc: '', price:1.5, style: 'no-image', type: 'beverage'},

        ],

    orderNumber: (Math.round(Math.random() * 10000) + 10000 ),
    addedItems:[],
    total: 0,
    selectedLocation: "Select Location",
    totalUnits: 0,
    isCartVisible: true,
=======
import Item1 from '../../images/pizza-pep.jpg'
import Item2 from '../../images/pizza_cali.jpg'
import Item3 from '../../images/pizza_supreme.jpg'
import Item4 from '../../images/pizza-veg.png'
import Item5 from '../../images/meat.png'
import Item6 from '../../images/pizza-bbq.jpg'
import { ADD_TO_CART} from './actions/cartActions.js'
import { CHECKOUT } from './actions/checkout.js'


const initState = {
    items: [
        {id:1,title:'Pepperoni Pizza', desc: "Traditional Pepperoni Pizza", price:14,img:Item1, category: 'Pizza'},
        {id:2,title:'Cali Alredo Pizza', desc: "Three Cheese Blend Pizza", price:12,img: Item2, deal: false},
        {id:3,title:'Super Combo Pizza', desc: "Pepperoni, Sausage, Mushroom, Green Peppers",price:17,img: Item3, deal: false},
        {id:4,title:'Veggie Combo Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:17,img:Item4, deal: false},
        {id:5,title:'Meat Combo Pizza', desc: "Favorite Meats", price:17,img: Item5, deal: false},
        {id:6,title:'BBQ Chicken Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:17,img: Item6, deal: false},

    ],
    categories: [
        {id:20,title:'Pizza', img:Item1, 
        items: [
            {id:1,title:'Pepperoni Pizza', desc: "Traditional Pepperoni Pizza", price:14,img:Item1, category: 'Pizza'},
            {id:2,title:'Cali Alredo Pizza', desc: "Three Cheese Blend Pizza", price:12,img: Item2, deal: false},
            {id:3,title:'Super Combo Pizza', desc: "Pepperoni, Sausage, Mushroom, Green Peppers",price:17,img: Item3, deal: false},
            {id:4,title:'Veggie Combo Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:17,img:Item4, deal: false},
            {id:5,title:'Meat Combo Pizza', desc: "Favorite Meats", price:17,img: Item5, deal: false},
            {id:6,title:'BBQ Chicken Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:17,img: Item6, deal: false},
    
        ], },
        {id:21,title:'Wings', img:Item1 },
        {id:22,title:'Salad', img:Item1 },
        {id:23,title:'Sides', img:Item1 },
        {id:24,title:'Desserts', img:Item1 },
        {id:25,title:'Drinks', img:Item1 }     

    ],
    dealUsed: false,

    deals: [
        {id:10,title:'$10 Large 1 Topping Pizza', desc: "Curbside/ Carryout", price:10,img:Item1},
        {id:11,title:'$5 off first mobile order', desc: "Curbside/ Carryout/ In-Store", price:-5,img: Item2},
        {id:12,title:'Free Dessert with mobile order', desc: "Cinnamon Sticks",price:0,img: Item3},
    ],

    previous: [],

    addedItems:[],
    total: 0
>>>>>>> r1remote/master

}
const cartReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
<<<<<<< HEAD
       let existed_item= state.addedItems.find(item=> action.id === item.id)
   
       if(existed_item)
       {
          addedItem.quantity += 1 
          state.totalUnits += 1
=======
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        let dealItem= state.deals.find(item=> action.id === item.id)
        let dealUsed= state.dealUsed
       if(existed_item)
       {
          addedItem.quantity += 1 
>>>>>>> r1remote/master
           return{
              ...state,
               total: state.total + addedItem.price 
                }
<<<<<<< HEAD
      }
       else{
          addedItem.quantity = 1;
          state.totalUnits += 1
=======
      } if(dealItem & state.dealUsed === true) {
          return{
              


          }
      }
      if(dealItem & state.dealUsed === false) {
        dealItem.quantity = 1;
        let newTotal = state.total + dealItem.price 
        return{
            ...state,
            addedItems: [...state.addedItems, dealItem],
            total: newTotal,
            dealUsed: true,

        }
    }
       else{
          addedItem.quantity = 1;
>>>>>>> r1remote/master
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
<<<<<<< HEAD
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      state.totalUnits -= 1
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)

      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
     state.totalUnits += 1
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
       state.totalUnits -= 1
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }
  if(action.type=== SET_LOCATION){
    
     
       let newLocation = action.location
       return{
           ...state,
           selectedLocation: newLocation
       }
 }
 if(action.type=== CART_VISIBLE){
    
     
    let isVisible = action.visible
    return{
        ...state,
        isCartVisible: isVisible
    }
}

 


  return state
=======
  if(action.type === CHECKOUT) {
    let previousItems = state.addedItems
    let previousTotal = state.total
       return {
           ...state,
           previous: [previousItems, previousTotal],
       }
     
  }
  else{
      return state
  }
>>>>>>> r1remote/master
}
export default cartReducer;