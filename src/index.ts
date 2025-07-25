import { AppDataSource } from "./dbcobfig/data-source";
import server from "./server";


const initializeApp = async () =>{
await AppDataSource.initialize()
server.listen(3000, ()=>{
    console.log("Server listening in PORT 3000")
})
}

initializeApp();