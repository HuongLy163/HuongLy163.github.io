// DOM Manipulation (chọn phần tử cha (ul với id 'sports'))
const sportsList = document.getElementById("sports");

// tạo 1 phần tử <li> mới và thêm nó vào danh sách
const newSport = document.createElement("li");
newSport.id = "cricket";
newSport.textContent = "Cricket";
sportsList.appendChild(newSport);  // thêm phần tử li vào cuối danh sách ul

// Event Delegation 

// Thêm một sự kiện click vào phần tử cha (sportsList)
sportsList.addEventListener("click", (event) => {
    // Kiểm tra nếu phần tử được click là <li>
    if (event.target.tagName === "LI") {
        // Làm nổi bật phần tử được click
        alert(`You clicked on ${event.target.textContent}`);
        event.target.style.color = "blue";
    }
});





















































// GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName()
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// getElementsByTagName()
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// querySelector()
// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container);
