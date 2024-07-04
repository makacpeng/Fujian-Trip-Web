const search=()=>{
    const searchBox=document.getElementById("search-item").value;
    const storeItems=document.getElementById("beauty-list")
    const product=document.querySelectorAll(".beauty")
    const pName=storeItems.getElementsByTagName("h2")

    for(let i=0;i < pName.length;i++){
        let match = product[i].getElementsByTagName("h2")[0];

        if(match){
            let textValue=match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) >-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }
}