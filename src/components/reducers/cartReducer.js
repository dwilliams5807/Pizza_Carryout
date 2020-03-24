import Item1 from '../../images/pizza-pep.jpg'
import Item2 from '../../images/pizza_cali.jpg'
import Item3 from '../../images/pizza_supreme.jpg'
import Item4 from '../../images/pizza-veg.png'
import Item5 from '../../images/meat.png'
import Item6 from '../../images/pizza-bbq.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,SET_LOCATION } from './actions/cartActions.js'
import { CHECKOUT } from './actions/checkout.js'
;

const initState = {
    items: [
        
            {id:101,title:'Individual Pizza', price:8.49,img:Item1, type: 'Pizza', quantity:0},
            {id:102,title:'Medium Pizza', price:12,img:Item1, type: 'Pizza', quantity:0},
            {id:103,title:'Large Pizza', price:12,img:Item1, type: 'Pizza'},
            {id:104,title:'Cauliflower Crust Pizza', price:12,img: Item2, type: 'Pizza'},
            {id:201,title:'Family Fun Deal', desc: "Bring home the FUN with our Family Fun Deal that includes 2 Large, 1-Topping Pizzas*, 1 Goody Bag with games and toys and 800 Tickets to use on your next visit!", price:20,img: Item2, type: 'pack'},
            {id:202,title:'Small Party Pack', desc: "The Small Party Pack has everything you need to deliver a party right to your door: *2 Large 1-Topping Pizzas*, Round Cake with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 6 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.",price:17,img: Item3, type: 'pack'},
            {id:203,title:'Large Party Pack', desc: "The Large Party Pack has everything you need to deliver a party right to your door: *3 Large 1-Topping Pizzas*, ¼ Sheet Cake** with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 12 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.", price:120,img:Item4, type: 'pack'},
            {id:401,title:'Cheesy Bread', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). 680 Cal.", price:4.99,img:Item1, type: 'app'},
            {id:402,title:'Parmesan Breadsticks', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'app'},
            {id:403,title:'French Fries', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'app'},
            {id:404,title: 'Wings', desc: "Three Cheese Blend Pizza", price:12,img: Item2, type: 'app'},
            {id:405,title:'Sampler Platter', desc: "Pepperoni, Sausage, Mushroom, Green Peppers",price:17,img: Item3, type: 'app'},
            {id:406,title:'Mozzarella Sticks', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:17,img:Item4, type: 'app'},
            {id:407,title:'Rock and Pizza Roll', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). Calories: 680", price:4.99,img: Item5, type: 'app'},
            {id:408,title:'Skee-Ball Pepperoni Bites', desc: "Give it a roll! Start your meal with fresh cheese and pepperoni rolls – QTY 8. Served with Marinara sauce.",price:6.99,img: Item6, type: 'app'},
            {id:501,title:'Cali Alredo Pizza', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:15.99,img: Item2, type: 'specialty'},
            {id:502,title:'Supreme Pizza', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)",price:15.99,img: Item3, type: 'specialty'},
            {id:503,title:'Veggie Pizza', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:15.99,img:Item4, deal: false},
            {id:504,title:'Five Meat Pizza', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:15.99,img: Item5, type: 'specialty'},
            {id:505,title:'BBQ Chicken Pizza', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)",price:15.99,img: Item6, type: 'specialty'},
            {id:601,title:'Unicorm Churros', desc: "Traditional Pepperoni Pizza", price:14,img:Item1, type: 'dessert'},
            {id:602,title:'Iced Cinnamon Sticks', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'dessert'},
            {id:603,title:'Giant Warm Cookie', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'dessert'},
            {id:701,title:'House Salad', desc: "Traditional Pepperoni Pizza", price:4.99,img:Item1, type: 'salad'},
            {id:801,title:'Can of Soda', price:1.5, type: 'beverage'},
            {id:901,title:'$10 Large 1 Topping Pizza', desc: "Curbside/ Carryout", price:10,img:Item1, type: 'deal'},
            {id:902,title:'$5 off first mobile order', desc: "Curbside/ Carryout/ In-Store", price:-5,img: Item2, type:'deal'},
            {id:903,title:'Free Dessert with mobile order', desc: "Cinnamon Sticks",price:0,img: Item3, type: 'deal'},

        ],
        pizzas: [
            {id:101,title:'Individual Pizza', price:8.49,img:Item1, type: 'Pizza'},
            {id:102,title:'Medium Pizza', price:12,img:Item1, type: 'Pizza'},
            {id:103,title:'Large Pizza', price:12,img:Item1, type: 'Pizza'},
            {id:104,title:'Cauliflower Crust Pizza', price:12,img: Item2, type: 'Pizza'},
           
        ],
        specialty: [
            {id:501,title:'Cali Alredo Pizza', desc: "Spinach, Alfredo sauce, sausage, mushrooms and chicken. (200-310 cal/slice)", price:15.99,img: Item2, type: 'specialty'},
            {id:502,title:'Supreme Pizza', desc: "Pepperoni, sausage, beef, black olives, mushrooms, red onions and green peppers. (180-280 cal/slice)",price:15.99,img: Item3, type: 'specialty'},
            {id:503,title:'Veggie Pizza', desc: "Black olives, mushrooms, red onions, green peppers and tomatoes. (140-220 cal/slice)", price:15.99,img:Item4, deal: false},
            {id:504,title:'Five Meat Pizza', desc: "Pepperoni, sausage, ham, beef and bacon. (210-310 cal/slice)", price:15.99,img: Item5, type: 'specialty'},
            {id:505,title:'BBQ Chicken Pizza', desc: "BBQ sauce, chicken, red onions and green peppers. (190-290 cal/slice)",price:15.99,img: Item6, type: 'specialty'},

        ],
        apps: [
            {id:401,title:'Cheesy Bread', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). 680 Cal.", price:4.99,img:Item1, type: 'app'},
            {id:402,title:'Parmesan Breadsticks', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'app'},
            {id:403,title:'French Fries', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'app'},
            {id:404,title:'Wings', desc: "Three Cheese Blend Pizza", price:12,img: Item2, type: 'app'},
            {id:405,title:'Sampler Platter', desc: "Pepperoni, Sausage, Mushroom, Green Peppers",price:17,img: Item3, type: 'app'},
            {id:406,title:'Mozzarella Sticks', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:17,img:Item4, type: 'app'},
            {id:407,title:'Rock and Pizza Roll', desc: "The Rock & Pizza Roll is guaranteed to rock your taste buds. This new pizza roll is oversized (at 15 inches long!), which makes it the perfect appetizer or snack for anyone in your family. Our fresh-made dough is stuffed with cheese and pepperoni, baked fresh and served with the sauce of your choice (marinara or ranch). Calories: 680", price:4.99,img: Item5, type: 'app'},
            {id:408,title:'Skee-Ball Pepperoni Bites', desc: "Give it a roll! Start your meal with fresh cheese and pepperoni rolls – QTY 8. Served with Marinara sauce.",price:6.99,img: Item6, type: 'app'},
        ],
        packs: [
            {id:201,title:'Family Fun Deal', desc: "Bring home the FUN with our Family Fun Deal that includes 2 Large, 1-Topping Pizzas*, 1 Goody Bag with games and toys and 800 Tickets to use on your next visit!", price:20,img: Item2, type: 'pack'},
            {id:202,title:'Small Party Pack', desc: "The Small Party Pack has everything you need to deliver a party right to your door: *2 Large 1-Topping Pizzas*, Round Cake with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 6 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.",price:17,img: Item3, type: 'pack'},
            {id:203,title:'Large Party Pack', desc: "The Large Party Pack has everything you need to deliver a party right to your door: *3 Large 1-Topping Pizzas*, ¼ Sheet Cake** with Chuck E. Cheese topper, Birthday Child Gifts: 250 Tickets and Chuck E. plush toy, and 12 Goody Bag/Favors for Guests. Each order also includes Chuck E. Tablecloth, plates, napkins, plastic forks and cake cutter.", price:120,img:Item4, type: 'pack'},
        ],
        salads: [
            {id:701,title:'House Salad', desc: "Traditional Pepperoni Pizza", price:4.99,img:Item1, type: 'salad'},
        ],
        deals: [
            {id:901,title:'$4.99 Large Cheese Pizza', desc: "Carryout Deal", price:4.99,img:Item1, type: 'deal'},
            {id:902,title:'$6.99 Large Pepperoni Pizza', desc: "Carryout Deal", price:-5,img: Item2, type:'deal'},
            {id:903,title:'Unicorn Churros', desc: "Cinnamon Sticks",price:3.99,img: Item3, type: 'deal'},
        ],
        desserts: [
            {id:601,title:'Unicorm Churros', desc: "Traditional Pepperoni Pizza", price:14,img:Item1, type: 'dessert'},
            {id:602,title:'Iced Cinnamon Sticks', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'dessert'},
            {id:603,title:'Giant Warm Cookie', desc: "Traditional Cheese Pizza", price:12,img:Item1, type: 'dessert'},
        ],
        beverages: [
            {id:801,title:'Can of Soda', price:1.5, type: 'beverage'},
        ],


    addedItems:[],
    total: 0,
    selectedLocation: "Select Location",
    totalUnits: 0

}
const cartReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
   
       if(existed_item)
       {
          addedItem.quantity += 1 
          state.totalUnits += 1
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          state.totalUnits += 1
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
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


  return state
}
export default cartReducer;