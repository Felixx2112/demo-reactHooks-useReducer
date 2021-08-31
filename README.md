### useReducer

## Action

`La 1 string 'ADD_NEW_ITEM'`

## View

`Nhan len 1 BUTTON`

`dispatch('ADD_NEW_ITEM')`

## Reducer

`La 1 function :`

```bash
(state, action) => {
    switch(action){
        case 'ADD_NEW_ITEM':
        state = state + 1;

        case 'ABC':
        return

     default:
     return state
    }
}
```
