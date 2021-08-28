import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
  // ADD_TO_WISHLIST,
  // REMOVE_FROM_WISHLIST,
  // CLEAR_WISHLIST
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    // case ADD_TO_WISHLIST:
    //   return {
    //     ...state,
    //     wishlist: [...state.wishlist, action.product],
    //   };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

      case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      let stateRemoveFromCart = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: stateRemoveFromCart.length > 0,
        cart: stateRemoveFromCart,
      };

    // case REMOVE_FROM_WISHLIST:
    //   let stateRemoveFromWishlist = state.wishlist.filter((product) => {
    //     return product._id !== action._id;
    //   });

    //   return {
    //     ...state,
    //     wishlist: stateRemoveFromWishlist,
    //   };


    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    // case CLEAR_WISHLIST:
    //   return {
    //     ...state,
    //     wishlist: [],
    //   };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};




export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}


