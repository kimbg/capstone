type gender = "M" | "W"

interface user {
    name : string,
    age  : number,
    gender : "M" | "W",    
}

let makeUserFnc = (name : string, age : number, gender : gender) : user => {
    let data : user = {
        name : name,
        age : age,
        gender : gender
    }
   return data;
}


let user1:user = makeUserFnc("bk",20,"M");

console.log(user1);
console.log(typeof user1);

let dbSelectFunction = (queryString : string) : Object => {
    if(queryString === "select * from user")
    {
        return {
            name : 1,
            name2 : 2,
            name3 : 3
        }
    }
    return {
        name : 4,
        name2 : 5,
        name3 : 6
    }
}

console.log(dbSelectFunction('select * from user'));

