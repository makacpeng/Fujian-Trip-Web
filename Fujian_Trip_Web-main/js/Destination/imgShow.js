const search=()=>{
    const searchBox=document.getElementById("search-item").value
    const beauty=document.querySelectorAll(".beauty")


    for(let i=0;i < beauty.length;i++){
        let match = beauty[i].getElementsByTagName("h2")[0];

        if(match){
            let textValue=match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) >-1){
                beauty[i].style.display="";
            }else{
                beauty[i].style.display="none";
            }
        }
    }
}