export const initialState = {
  total: 0,
  products: [],
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        products: action.payload,
      };

    case "remove":
      return {
        ...state,
        products: action.payload,
      };

    case "calculateTotal":
      return {
        ...state,
        total: action.payload,
      };

    case "default": {
      alert("case not found in reducer!!!");
    }
  }
};

export default storeReducer;
