// console.log('hello');
const image = document.querySelector('#dog-img');
const select = document.querySelector('.breeds')
function showDogPic() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resopnes => {
        return resopnes.json();
    })
    .then(data => {
        const breedObj= data.message;
        const breedArray = Object.keys(breedObj);
        for(let i=0;i<breedArray.length;i++) {
            const option = document.createElement('option')
            option.value = breedArray[i];
            option.innerText = breedArray[i];
            select.appendChild(option);
        }
        console.log(breedArray);
    })
 select.addEventListener('change',event => {
     console.log(event.target.value);
     fetch(`https://dog.ceo/api/breed/${event.target.value}/images`)
     .then(response => {
         return response.json();
     })
     .then(data => {
        // console.log(data.message);
        let source = data.message;
        let index = Math.floor(Math.random()*source.length);
        image.src = source[index];
     })
 });
 

}
showDogPic();