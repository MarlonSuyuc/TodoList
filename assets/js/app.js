const d = document,
  input = d.querySelector(".form input"),
  btnAdd = d.querySelector(".btn--add"),
  btnremove = d.querySelector(".btn--remove"),
  btnclearAll = d.querySelector(".btn--clearAll");

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn--add")) {
    alert("aaaaaaaaaaaaaaaaa");
  }
  if (e.target.matches(".btn--remove")) {
    alert("bbbbbbbbbbbbbbb");
  }
  if (e.target.matches(".btn--clearAll")) {
    alert("ccccccccccccccc");
  }
});
