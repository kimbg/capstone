// let exports = module.exports = {};

exports.selectFnc1 = (string) => {
    if (string === "select * from user") {
        return {
            name: 1,
            name2: 2,
            name3: 3
        };
    }
    return {
        name: 4,
        name2: 5,
        name3: 6
    };

}

exports.sayHelloFnc = (string) => {
    return `hello ${string}`;
}


