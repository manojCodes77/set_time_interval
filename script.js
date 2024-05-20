let start = document.querySelector("#start");
let end = document.querySelector("#end");
let para = document.querySelector("#para");
let time;

start.addEventListener("click", function() {
    time = setInterval(function() {
        console.log("Hello");
        para.innerHTML += "<p style='color : beige ;font-size: 14px;'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates dignissimos, in culpa porro aspernatur voluptatem, ullam a eum minima similique illo, quia maiores voluptatibus dicta et. Fugit architecto, voluptate atque placeat quo quis dolor reiciendis in impedit vel laborum labore voluptates inventore ipsum obcaecati nobis quaerat? Assumenda harum dolores saepe dicta, facilis praesentium eveniet, natus iste voluptatum cumque repellat consectetur minima nemo eligendi adipisci, earum necessitatibus. Vitae velit distinctio quibusdam.</p>";
    }, 1000);
});

end.addEventListener("click", function() {
    clearInterval(time);
    console.log("Time Cleared");
});