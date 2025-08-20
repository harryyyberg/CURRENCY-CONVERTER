const baseurl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown");

for(let select of dropdowns){
    for(let currcode in countryList){
        let newoption = document.createElement("option");
        newoption.value = currcode;
        newoption.innerText = currcode;
        if(select.name === "from" && currcode === "USD"){
            newoption.selected = true;
        } else if(select.name === "to" && currcode === "INR"){
            newoption.selected = true;
        }
        select.append(newoption);
    }

    select.addEventListener("change",(evt)=>{
        updateflag(evt.target)
    });
}