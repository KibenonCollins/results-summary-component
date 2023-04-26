let averageScore = document.querySelector(".average");
let summationTotal =  document.querySelector(".summation")

fetch("..data.json")
    .then((response)=>response.json())
    .then((data)=> {
        let averageArr =[];
        data.map((score)=> {
        averageScore.innerHTML +=  ` 
        <div class = "score"> 
        <img src = ${score.icon} alt="" />

        <p class = "score_cat" > ${score.category}</p>
        <p class = "score_got" > ${score.score} <span> /100</> </p>
        </div>


        `;
    })}