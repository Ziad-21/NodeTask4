const data = require('./data10');
const yargs = require('yargs');
yargs.command({
    command: "add",
    describe: "to add an item",
    builder: {
        fname: {
            describe: "this is the first name description in add command",
            demandOption: true,
            type: "string"
        },
        lname: {
            describe: "this is the last name description in add command",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.add(x.id, x.fname, x.lname, x.age,x.city)
    }
})



yargs.command({
    command: "delete",
    describe: "to delete an item",
    handler: (x) => {
        data.deleteddata(x.id)
    }

})

//////////////
yargs.command({


    command: "read",
    describe: "to read an item",
    builder: {
        id: {
            describe: "the id of the item to read",
            type: "number",
            demandOption: true,

        },
    },
    handler: (x) => {
        data.readdata(x.id);
    }
})

yargs.command({
    command: "list",
    describe: "to list items",
        handler:()=> {
            data.listit();
    }



})

yargs.parse()




