//reducer active book
//Every reducer can receive two parameters, 
//state: the portion of the app state the user is responsible for
//action: the action that occurs. Reducers are called only when an action occurs 
//if state is undefined, e.g, when the app is first loaded and no book is selected
//then set the state to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  //For any other action returns the state. It means the reducer is not responible to handle the action
  return state;
}