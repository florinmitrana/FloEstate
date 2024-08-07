import {Server} from "socket.io";

const io = new Server({
    cors:{
        origin:"http://localhost:5173"
    },
});

let onlineUser = []

const addUser = (userId,socketId) =>{
    const userExits = onlineUser.find(user => user.userId === userId);
    if(!userExits){
        onlineUser.push({userId,socketId});
    }
};

const getUser = (userId) =>{
    return onlineUser.find(user => user.userId === userId);
}
const removeUser = (socketId)=>{
    onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
}

io.on("connection",(socket)=>{
    
    socket.on("newUser",(userId)=>{
        addUser(userId, socket.id)
    });

    socket.on("sendMessage", ({ receiverId,data })=> {
        console.log(receiverId);
    });

    socket.on("disconnect", ()=>{
        removeUser(socket.id);

    })
    
})

io.listen("4000")