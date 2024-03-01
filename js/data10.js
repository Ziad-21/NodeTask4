const fs =require('fs');


const add = function(id,Fname,Lname,age,city){
    let data = loadData();
    const duplicated = data.filter(obj=>{
        return obj.id===id;
    })
    if(duplicated.length!=0){
        console.log('ERROR duplicated data ');
        return;
    }else{
        data.push({
            id: id,
            Fname:Fname,
            Lname:Lname,
            age:age,
           city:city,

        })
        savedata(data);
    }
    
}

let deleteddata=function(id){
    let data = loadData();
    let keepit  = data.filter(obj=>{
        return obj.id!==id;
    })
    savedata(keepit);


}

//////////////////////////////
let readdata =   function(id){

let data = loadData();
let ItemtoRead = data.find(obj=>{
return obj.id === id;
})
// console.log(ItemtoRead);
if(ItemtoRead!=null){
    console.log(ItemtoRead);
    
}else{
    console.log('not found');
}


}

//////////////////////////////
let listit= function(){
let data = loadData();
data.forEach(element => {
    console.log(element.Fname ,element.Lname, element.age);
});


}














let loadData = function(){
    try{
    let data =    fs.readFileSync('data.json').toString();
      return  JSON.parse(data);
    }catch{
        return [];
    }
}

function savedata(data){

   data =JSON.stringify(data);

    fs.writeFileSync('data.json',data);
}

module.exports = {
add,
deleteddata,
readdata,
 listit,
   


}