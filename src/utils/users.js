const users = []

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()
    
    // Validate the data
    if(!username || !room){
        return {
            errorr: 'Username and room are required'
        }
    }

    // Validate username
    if (username === 'admin') {
        return {
            error: 'admin  is reserved keyword, please choose another username!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return (user.room === room) && (user.username === username)
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in user!'
        }
    }

    // Store user
    const user = { id, username, room }
    users.push(user)
    return {user}

}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
 
    //remove first matched user:- this is better than filter since it stops once the match is found, where filter runs for whole list
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser, 
    getUsersInRoom
}