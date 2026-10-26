const containsOnlyDigits = (str) => {
    return /^\d+$/.test(str);
};

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

const printEverySecond = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000);
};

printEverySecond();

const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        if (i === 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
};

count();

const box = document.getElementById("box");

box.addEventListener("click", () => {
    box.classList.toggle("active");
});

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload = () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();