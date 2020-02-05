import Item1 from '../../images/pizza-pep.jpg'
import Item2 from '../../images/pizza_cali.jpg'
import Item3 from '../../images/pizza_supreme.jpg'
import Item4 from '../../images/pizza-veg.png'
import Item5 from '../../images/meat.png'
import Item6 from '../../images/pizza-bbq.jpg'
import { ADD_TO_CART} from '../actions/cartActions.js'


const initState = {
    items: [
        {id:1,title:'Pepperoni Pizza', desc: "Traditional Pepperoni Pizza", price:14,img:Item1},
        {id:2,title:'Cali Alredo Pizza', desc: "Three Cheese Blend Pizza", price:12,img: Item2},
        {id:3,title:'Super Combo Pizza', desc: "Pepperoni, Sausage, Mushroom, Green Peppers",price:17,img: Item3},
        {id:4,title:'Veggie Combo Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:17,img:Item4},
        {id:5,title:'Meat Combo Pizza', desc: "Favorite Meats", price:17,img: Item5},
        {id:6,title:'BBQ Chicken Pizza', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:17,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
    
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  else{
      return state
  }
}
export default cartReducer;