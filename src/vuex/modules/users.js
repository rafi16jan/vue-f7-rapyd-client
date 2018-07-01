const users = {
    state: {
        data: []
    },
    mutations: {
        addUser(state, user) {
            state.data.push(user)
        },
        deleteUser(state, user) {
            state.data.forEach(element => {
                let selectedUserIndex = element.indexOf(user)
                if (selectedUserIndex !== -1) state.data.splice(selectedUserIndex, 1)
            })
        },
        editUser(state, user) {
            state.data.forEach(element => {
                let selectedUserIndex = element.indexOf(user)
                if (selectedUserIndex !== -1) state.data.splice(selectedUserIndex, 1)
            })
        }
    }
}

export default users