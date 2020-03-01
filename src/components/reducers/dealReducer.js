import Item1 from '../../images/pizza-pep.jpg'
import Item2 from '../../images/pizza_cali.jpg'
import Item3 from '../../images/pizza_supreme.jpg'

import { ADD_TO_CART} from './actions/cartActions.js'


const initState = {
    deals: [
        {id:1,title:'$10 Large 1 Topping Pizza', desc: "Curbside/ Carryout", price:10,img:Item1},
        {id:2,title:'$5 off first mobile order', desc: "Curbside/ Carryout/ In-Store", price:-5,img: Item2},
        {id:3,title:'Free Dessert with mobile order', desc: "Cinnamon Sticks",price:0,img: Item3},
    ],
    addedItems:[],
    total: 0

}
const dealReducer= (state = initState,action)=>{
    
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
export default dealReducer;