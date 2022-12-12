// action types
const STATUS = 'status';
const LOAD_CATEGORIES = 'load-categories';
const ADD_CATEGORY = 'add-category';
const REMOVE_CATEGORY = 'remove-category';

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
