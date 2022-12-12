// action types
const STATUS = 'bookstore/categories/STATUS';
const LOAD_CATEGORIES = 'bookstore/categories/LOAD_CATEGORIES';
const ADD_CATEGORY = 'bookstore/categories/ADD_CATEGORY';
const REMOVE_CATEGORY = 'bookstore/categories/REMOVE_CATEGORY';

// actions
export const loadCategories = () => ({ type: LOAD_CATEGORIES });
export const checkStatus = () => ({ type: STATUS });
export const addCategory = (category) => ({ type: ADD_CATEGORY, category });
export const removeCategory = (category) => ({ type: REMOVE_CATEGORY, category });

// reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return {
        load: true,
        categories: [],
      };
    case STATUS:
      return 'Under construction';
    case ADD_CATEGORY:
      return {
        load: false,
        categories: [...state.categories, action.category],
      };
    case REMOVE_CATEGORY:
      return {
        load: false,
        categories: state.categories.filter((category) => category !== action.category),
      };
    default:
      return state;
  }
}
