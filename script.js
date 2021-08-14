let users = [
    {name:"name1",surname:"surname1",age:"1"},
    {name:"name2",surname:"surname2",age:"2"},
    {name:"name3",surname:"surname3",age:"3"},
    {name:"name4",surname:"surname4",age:"4"},
    {name:"name5",surname:"surname5",age:"5"},
    {name:"name6",surname:"surname6",age:"6"},
    {name:"name7",surname:"surname7",age:"7"},
    {name:"name8",surname:"surname8",age:"8"},
    {name:"name9",surname:"surname9",age:"9"},
    {name:"name10",surname:"surname10",age:"10"},
    {name:"name11",surname:"surname11",age:"11"},
    {name:"name12",surname:"surname12",age:"12"},
    {name:"name13",surname:"surname13",age:"13"},
    {name:"name14",surname:"surname14",age:"14"},
    {name:"name15",surname:"surname15",age:"15"},
    {name:"name16",surname:"surname16",age:"16"},
    {name:"name17",surname:"surname17",age:"17"},
    {name:"name18",surname:"surname18",age:"18"},
    {name:"name19",surname:"surname19",age:"19"},
    {name:"name20",surname:"surname20",age:"20"},
    {name:"name21",surname:"surname21",age:"21"},
    {name:"name22",surname:"surname22",age:"22"},
    {name:"name23",surname:"surname23",age:"23"},
    {name:"name24",surname:"surname24",age:"24"},
    {name:"name25",surname:"surname25",age:"25"},
    {name:"name26",surname:"surname26",age:"26"},
    {name:"name27",surname:"surname27",age:"27"},
    {name:"name28",surname:"surname28",age:"28"},
    {name:"name29",surname:"surname29",age:"29"},
    {name:"name30",surname:"surname30",age:"30"},
    {name:"name31",surname:"surname31",age:"31"},
    {name:"name32",surname:"surname32",age:"32"},
    {name:"name33",surname:"surname33",age:"33"},
    {name:"name34",surname:"surname34",age:"34"},
    {name:"name35",surname:"surname35",age:"35"},
    {name:"name36",surname:"surname36",age:"36"},
    {name:"name37",surname:"surname37",age:"37"},
    {name:"name38",surname:"surname38",age:"38"},
    {name:"name39",surname:"surname39",age:"39"},
    {name:"name40",surname:"surname40",age:"40"},
    {name:"name41",surname:"surname41",age:"41"},
    {name:"name42",surname:"surname42",age:"42"},
    {name:"name43",surname:"surname43",age:"43"},
    {name:"name44",surname:"surname44",age:"44"},
    {name:"name45",surname:"surname45",age:"45"},
    {name:"name46",surname:"surname46",age:"46"},
    {name:"name47",surname:"surname47",age:"47"},
    {name:"name48",surname:"surname48",age:"48"},
    {name:"name49",surname:"surnam49",age:"49"},
    {name:"name50",surname:"surname50",age:"50"},
    {name:"name51",surname:"surname51",age:"51"},
    {name:"name52",surname:"surname52",age:"52"},
    {name:"name53",surname:"surname53",age:"53"},
    {name:"name54",surname:"surname54",age:"54"},
    {name:"name55",surname:"surname55",age:"55"},
    {name:"name56",surname:"surname56",age:"56"},
    {name:"name57",surname:"surname57",age:"57"},
]
window.onload=()=>{
    let table = document.querySelector("#mytable");
    let pagination = document.querySelector("#pagination");
    let notesOnPage =50;
    let namefilter = false;
    let snamefilter = false;
    let agefilter = false;


    let countOfItems= Math.ceil(users.length / notesOnPage);
    for(let i=1; i<=countOfItems;i++){
        let li = document.createElement("li");
        li.innerHTML=i;
        pagination.appendChild(li);
    }

    let thead = document.createElement("thead");

    table.appendChild(thead); 
    let tr = document.createElement("tr");
    tr.setAttribute("id","headers")
    thead.appendChild(tr)
    createCell("Name",tr);
    createCell("Surname",tr);
    createCell("Age",tr);

    

    let tbody =  document.createElement("tbody");
    table.appendChild(tbody); 
    
    let items = document.querySelectorAll("#pagination li");

    for(let item of items){
        item.addEventListener("click", function(){
            
            let active = document.querySelector("#pagination li.active");
            if (active){
                active.classList.remove("active");
            }
            this.classList.add("active");

            let pageNum = +this.innerHTML;
            let start = (pageNum-1)* notesOnPage;
            let end = start + notesOnPage;
            let notes = users.slice(start,end);
            
            tbody.innerHTML="";

            let elements = document.querySelectorAll("#headers td")
            for(let element of elements){
                element.addEventListener("click", function(){
                    switch (this.innerHTML) {
                        case "Name":
                            namefilter = !namefilter;
                            notes.sort(function(a,b){
                                if(namefilter){
                                    if(a.name > b.name){
                                        return 1;
                                    }else return -1;
                                }else{
                                    if(a.name < b.name){
                                        return 1;
                                    }else return -1;
                                }
                            })
                            tbody.innerHTML="";
                            for (let note of notes){
                                let tr = document.createElement("tr");
                                tbody.appendChild(tr)
                                createCell(note.name,tr);
                                createCell(note.surname,tr);
                                createCell(note.age,tr);
                            }
                            break;
                        case "Surname":
                            snamefilter = !snamefilter;
                            notes.sort(function(a,b){
                                if(snamefilter){
                                    if(a.surname > b.surname){
                                        return 1;
                                    }else return -1;
                                }else{
                                    if(a.surname < b.surname){
                                        return 1;
                                    }else return -1;
                                }
                            })
                            tbody.innerHTML="";
                            for (let note of notes){
                                let tr = document.createElement("tr");
                                tbody.appendChild(tr)
                                createCell(note.name,tr);
                                createCell(note.surname,tr);
                                createCell(note.age,tr);
                            }
                            break;
                        case "Age":
                            agefilter = !agefilter;
                            notes.sort(function(a,b){
                                if(agefilter){
                                    if(a.age > b.age){
                                        return 1;
                                    }else return -1;
                                }else{
                                    if(a.age < b.age){
                                        return 1;
                                    }else return -1;
                                }
                            })
                            tbody.innerHTML="";
                            for (let note of notes){
                                let tr = document.createElement("tr");
                                tbody.appendChild(tr)
                                createCell(note.name,tr);
                                createCell(note.surname,tr);
                                createCell(note.age,tr);
                            }
                            break;

                        default:
                            break;
                    }
                })
            }

            for (let note of notes){
                let tr = document.createElement("tr");
                tbody.appendChild(tr)

                createCell(note.name,tr);
                createCell(note.surname,tr);
                createCell(note.age,tr);
            }


            let filter = document.querySelector("#filter");
            filter.addEventListener("input", function(e){
                const value = e.target.value;
                let cash = notes.filter((note)=>{
                    if (note.name.includes(value) || note.surname.includes(value) || note.age.includes(value)){
                        return true;
                    }else return false;
                });
                tbody.innerHTML="";
                for (let note of cash){
                let tr = document.createElement("tr");
                tbody.appendChild(tr)
                createCell(note.name,tr);
                createCell(note.surname,tr);
                createCell(note.age,tr);
                }
            })
        });
    }

    items[0].click();
}

function createCell(text, tr){
    let td = document.createElement("td");
    td.innerHTML= text;
    tr.appendChild(td);
}

