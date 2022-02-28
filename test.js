
async function Test() {
var request ='http://localhost:4444/api-json';
const strSpec = await fetch(request,{
  method: "GET",
  mode: 'no-cors',
  headers:{
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    "Accept-Encoding" : "gzip"
}}).then(response => response)
    .then(data => {
      // Do something with your data
      console.log(data);
    });
}
Test();