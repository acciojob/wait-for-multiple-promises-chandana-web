//your JS code here. If required.
const table1= document.querySelector(".table table-striped table-hover table-bordered");
const tbody=document.getElementById("output");

const sTime= Date.now();

const promise1= new Promise((resolve)=>{
const row1=tbody.insertRow();
const cell1= row1.insertCell(0);
const cell2= row1.insertCell(1);
cell1.innerHTML= "Loading..."
cell2.innerHTML= "Loading..."

setTimeout(()=>{
  cell1.innerHTML= "Promise 1"
cell2.innerHTML= "2"
resolve("Promise 1 completed");
},2000);

});

const promise2= new Promise((resolve)=>{


setTimeout(()=>{
  const row2=tbody.insertRow();
  const cell21= row2.insertCell(0);
  const cell22= row2.insertCell(1);
  
  cell21.innerHTML= "Promise 2"
cell22.innerHTML= "1"
resolve("Promise 1 completed");
},1000);

});

const promise3= new Promise((resolve)=>{


  setTimeout(()=>{
    const row3=tbody.insertRow();
    const cell31= row3.insertCell(0);
    const cell32= row3.insertCell(1);
    
    cell31.innerHTML= "Promise 3"
  cell32.innerHTML= "3"
  resolve("Promise 1 completed");
  },3000);
  
  });

  

async function updateAll(){
  try{
    const results= await Promise.all([promise1, promise2, promise3]);
    const totalTime=(Date.now()-sTime)/1000;

    const row4=tbody.insertRow();
    const cell41= row4.insertCell(0);
    const cell42= row4.insertCell(1);

    cell41.innerHTML= "Total";
    cell42.innerHTML= totalTime;
    }catch(error){
      console.error("An error:", error);
    };
    

}

updateAll();