let friends = ["alice", "Bob", "Charlie"];

function greetFriendAtIndex(array, index){
    try{
        let friend = array[index];
        console.log(`Hi ${friend}!`);
    }catch(error){
        console.log("An error occured: ", error.message);
    }finally{
        console.log("End of greeting");
    }

}

greetFriendAtIndex(friends,3);
