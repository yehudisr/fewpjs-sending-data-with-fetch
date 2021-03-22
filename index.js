// Add your code here



function submitData(name, email){
    return fetch = fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
          })
    })

    .then(response => response.json())
    .then(object => {
        document.body.innerHTML = object["id"]
        debugger
    })
    .catch(function(error) {
        // alert("ERROR!")
        // console.log(error.message)
        document.body.innerHTML = error.message
      })

}