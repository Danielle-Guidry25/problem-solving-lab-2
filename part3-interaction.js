function sayHello() {
    console.log("Hello, World!");
}

function showName() {
    const name = document.getElementById("nameInput").value;
    document.getElementById("output").innerText = "Hello, " + name + "!";
}