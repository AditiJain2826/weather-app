// const weatherForm = document.querySelector('form')
// const searchTerm = document.querySelector('input')
// const msg1 = document.querySelector('#msg-1');
// const msg2 = document.querySelector('#msg-2');


// msg1.textContent = ""

// weatherForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     location = searchTerm.value
//     msg1.textContent = 'loading';
//     fetch('/weather?address=' + location).then((res) => {
//         res.json().then((data) => {
//             console.log(data);
//             msg1.textContent=data.forecast
//             msg2.textContent=data.location
//         }, (err) => {
//             msg1.textContent = err;
//         })
//     }, (error) => {
//         msg1.textContent = error;
//     })
// })
console.log("client side js loaded")

const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('#place')
const msg1 = document.querySelector('#msg-1');
const msg2 = document.querySelector('#msg-2');


msg1.textContent = ""
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let lo = searchTerm.value
    console.log(lo)
    
    msg1.textContent = 'loading...';
    fetch('/weather?address='+lo).then((res) => {
        res.json().then((data) => {
            console.log(data);
            msg1.textContent=data.forecast
            msg2.textContent=data.location
        }, (err) => {
            console.log(err)
            msg1.textContent = error;
        })
    }, (error) => {
        console.log(error)
        msg1.textContent = error;
   })
})
