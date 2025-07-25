import { AppDataSource } from "./dbcobfig/data-source";
import { preloadData } from "./seed/preload.data";
import server from "./server";


const initializeApp = async () =>{
await AppDataSource.initialize()
await preloadData()
server.listen(3000, ()=>{
    console.log("Server listening in PORT 3000")
})
}

initializeApp();