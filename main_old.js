import "./style.css"
import PocketBase from 'pocketbase';

import "./fetch.js"

const response = await fetch("http://127.0.0.1:8090/api/collections/appunti/records")

const data = await response.json()

console.log(data.items)

const postTest = document.getElementById("postTest")
postTest.onclick = () => {
    fetch("http://127.0.0.1:8090/api/collections/appunti/records", {
        method:"POST",
        body:JSON.stringify({
            titolo:"prova"
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })
}

// const pb = new PocketBase('http://127.0.0.1:8090');

// const records = await pb.collection('Appunti').getFullList({
// });
    
// console.log(records)