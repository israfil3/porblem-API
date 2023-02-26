// const lodeData = async(displayValue) =>{
//     const url =   'https://openapi.programming-hero.com/api/phones?search=${displayValue}'
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhone(data.data);

// }

// const displayPhone = phones => {
// //    console.log(phones);
//    const cardContainer = document.getElementById('card-container');
//     phones.forEach(phone => {
//         console.log(phone);
//         const div = document.createElement('div');
//         div.classList.add('card-style');
//         div.innerHTML =`
//         <div class="card w-96 bg-base-100 shadow-xl">
//         <figure class="px-10 pt-10">
//             <img src="${phone.image
//             }" class="rounded-xl" />
//         </figure>
//         <div class="card-body items-center text-center">
//             <h2 class="card-title">${phone.phone_name
//             }</h2>
//             <p>If a dog chews shoes whose shoes does he choose?</p>
//             <div class="card-actions">
//             <button class="btn btn-primary">Buy Now</button>
//             </div>
//         </div>
//         </div>
        
        
//         `
//         cardContainer.appendChild(div);
//     })

// }

// document.getElementById('btn-search').addEventListener('click', function(){
//     const displayInput =  document.getElementById('input-search');
//     const displayValue = displayInput.value;
//     lodeData(displayValue);
//     lodeData(displayValue)
// })

//  lodeData();

const lodeData = (inputText) => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=${inputText}';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone((data.data)))
}

const displayPhone =(phones) => {
    const cardContainer = document.getElementById('card-container');
    for(phone of phones){
        console.log(phone);
        const div = document.createElement('div');
                div.classList.add('card-style');
                div.innerHTML =`
                <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="${phone.image
                    }" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">${phone.phone_name
                    }</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
                
                
                `
                cardContainer.appendChild(div);

    }
};

document.getElementById('btn-search').addEventListener('click',function(){
    const inputValue = document.getElementById('input-search');
    const inputText = inputValue.value;
    lodeData(inputText);
})

lodeData()