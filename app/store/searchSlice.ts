import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
    search: string;
  }

const initialState: SearchState = {
    search: ""
  }
  
  export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setSearch } = searchSlice.actions
  
  export default searchSlice.reducer