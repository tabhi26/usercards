import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : [],
  pageData: [],
  team : {
    department: [],
    members: []
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
        state.data = action.payload;
    },
    getData: (state, action) => {
        const page = action.payload || 1;
        const limit = 20;
        state.pageData = state.data.slice((((page-1)*limit)),(page*limit));
    },
    setPageData: (state, action) => {
        const searchName = action.payload;
        state.pageData = state.data.filter((user)=> {
            return user.first_name.toLowerCase().startsWith(searchName.toLowerCase());
          }).slice(0,20);
    },
    domainFilter: (state, action) => {
      const domain = action.payload;
      state.pageData = state.data.filter((user)=> {
        return user.domain === domain;
      })
    },
    genderFilter: (state, action) => {
      const gender = action.payload;
      state.pageData = state.data.filter((user)=> {
        return user.gender === gender;
      })
    },
    availableFilter: (state, action) => {
      console.log(action.payload);
      state.pageData = state.data.filter((user) => {
        return user.available === action.payload;
      })
    },
    addToTeam :(state, action) => {
      const user = action.payload;
      state.team.members.push(user);
      state.team.department.push(user.domain);
    }
  },
})

// Action creators are generated for each case reducer function
export const { setData, getData, setPageData, domainFilter, genderFilter, availableFilter, addToTeam } = userSlice.actions

export default userSlice.reducer