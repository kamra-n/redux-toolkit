import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    filterUsers: []
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, actions) => {
            state.users.push(actions.payload)
        },

        filterUser: (state, actions) => {
            state.filterUsers = state.users.filter((data) => {
                if (data?.toLowerCase()?.includes(actions.payload)) {
                    return data?.toLowerCase()?.includes(actions.payload)
                }

                else {
                    return console.log('not found')
                }
            })

        },

    }
})


export const { addUser, filterUser } = userSlice.actions
export default userSlice.reducer