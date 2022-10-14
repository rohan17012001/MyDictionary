const res=document.getElementById("result");
const sound=document.getElementById("sound");
const btn=document.getElementById("searchbtn");
btn.addEventListener("click", ()=>{
    let ip=document.getElementById("searchit").value;
    let url="https://api.dictionaryapi.dev/api/v2/entries/en_US/${ip}";
    console.log(ip);
    fetch(url)
        .then((res) => res.json())
        .then((result) => console.log(result));
});