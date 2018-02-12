//ActionCreator selectBook. It needs to return an action,
//an object with a type property and optionally the payload which is the 
//part of the state data to be returned
export function selectBook(book) {

    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
    
}