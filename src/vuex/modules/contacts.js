const contacts = {
    state: {
        data: []
    },
    getters: {
        getContacts (state) {
            return state.data
        },
        getContactsLength (_, getters) {
            return getters.getContacts()
        }
    },
    mutations: {
        addContact (state, contact) {
            state.data.push(contact)
        },
        deleteContact (state, contact) {
            state.data.forEach(element => {
              let selectedContactIndex = element.indexOf(contact)
              if (selectedContactIndex !== -1) state.data.splice(selectedContactIndex, 1)
            })
        },
        editContact (state, contact) {
            state.data.forEach(element => {
                let selectedContactIndex = element.indexOf(contact)
                if (selectedContactIndex !== -1) state.data.splice(selectedContactIndex, 1)
            })
        }
    }
}

export default contacts