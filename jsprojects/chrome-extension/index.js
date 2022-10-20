let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const UlEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.querySelector("#save-tab-btn");

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = ""
    for(let i = 0; i<leads.length; i++){
        // listItems += '<li><a target="_blank" href="https://' + myLeads[i] + '">'+myLeads[i]+'</a></li>';
        listItems += `
                    <li>
                        <a target="_blank" href="https://${leads[i]}">
                            ${leads[i]}
                        </a>
                    </li>`
    }
    UlEl.innerHTML = listItems;
};

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
        });
});



inputBtn.addEventListener("click", function(){
    if (inputEl.value != ""){
        myLeads.push(inputEl.value);
    }
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    //console.log(localStorage["myLeads"]);
    
});

deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

