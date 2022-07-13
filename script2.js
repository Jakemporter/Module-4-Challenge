rootEl = $("#root");
console.log(localStorage.getItem("Score"));
console.log(rootEl);
//rootEl.children("header").children("ol").children("li").text(localStorage.getItem("Score"));
var list = rootEl.children("header").children("ol");
list.append("<li>" + localStorage.getItem("Score") + "</li>");
