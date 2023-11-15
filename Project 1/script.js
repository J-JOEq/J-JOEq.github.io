
var pname;
var pprice;
const form = document.getElementById("form")
const header = document.getElementById("pTitle");
const body = document.getElementById("desc");
const price = document.getElementById("price");
const Morei9 = document.getElementById("i9");
const Morei7 = document.getElementById("i7");
const Morei5 = document.getElementById("i5");
const Close = document.getElementById("X")
const overlay = document.getElementById("overlay")
const home = document.getElementsByClassName("homebutton")
const cart = document.getElementsByClassName("cartbutton")
const addCart = document.getElementById("addCart")
const input = document.getElementById("input")





if(Morei9) {
Morei9.addEventListener("click", () => {
  header.innerHTML = "Intel Core i9-13900KF";
  body.innerHTML = "Stream, create, and compete at the highest levels with industry leading features and the latest hybrid architecture / 24 cores (8 P-cores + 16 E-cores) and 32 threads / Up to 5.8 GHz unlocked. 36M Cache / Discrete graphics required /Compatible with Intel 600 series (might need BIOS update) and 700 series chipset-based motherboards / Performance hybrid architecture integrates two core microarchitectures, prioritizing and distributing workloads to optimize performance / Turbo Boost Max Technology 3.0, and PCIe 5.0 & 4.0 support. Intel Optane Memory support. No thermal solution included";
  price.innerHTML = "$516.36";
  form.style.display = "flex";
  overlay.style.display = "block";
  pname = "Intel Core i9-13900KF";
  pprice = 516.36;
});
}
if(Morei7){
Morei7.addEventListener("click", ()=> {
    header.innerHTML = "Intel Core i7-13700K";
    body.innerHTML = "13th Gen Intel Core processors offer revolutionary design for beyond real-world performance. From extreme multitasking, immersive streaming, and faster creating, do what you do / 16 cores (8 P-cores + 8 E-cores) and 24 threads / Up to 5.4 GHz unlocked. 30M Cache / Integrated Intel UHD Graphics 770 included / Compatible with Intel 600 series (might need BIOS update) and 700 series chipset-based motherboards / Performance hybrid architecture integrates two core microarchitectures, prioritizing and distributing workloads to optimize performance / Turbo Boost Max Technology 3.0, and PCIe 5.0 & 4.0 support. Intel Optane Memory support. No thermal solution included";
    price.innerHTML = "$364.99";
    form.style.display = "flex";
    overlay.style.display = "block";
    pname = "Intel Core i7-13700K";
    pprice = 364.99;
});
}
if(Morei5){
Morei5.addEventListener("click", ()=> {
    header.innerHTML = "Intel Core i5-13600K";
    body.innerHTML = "13th Gen Intel Core processors offer revolutionary design for beyond real-world performance. From extreme multitasking, immersive streaming, and faster creating, do what you do / 14 cores (6 P-cores + 8 E-cores) and 20 threads / Up to 5.1 GHz unlocked. 24M Cache / Integrated Intel UHD Graphics 770 included / Compatible with Intel 600 series (might need BIOS update) and 700 series chipset-based motherboards / Performance hybrid architecture integrates two core microarchitectures, prioritizing and distributing workloads to optimize performance / Turbo Boost Max Technology 3.0, and PCIe 5.0 & 4.0 support. Intel Optane Memory support. No thermal solution included";
    price.innerHTML = "$307.99";
    form.style.display = "flex";
    overlay.style.display = "block";
    pname = "Intel Core i5-13700K";
    pprice = 307.99;
});
}
if(Close){
Close.addEventListener("click", () =>{
    form.style.display = "none";
    overlay.style.display = "none";

});
}
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        window.location.href = "cart.html";
    });
  }

for (let i = 0; i < home.length; i++) {
    home[i].addEventListener('click', () => {
        window.location.href = "index.html";
    });
  }

var grid1 = document.getElementById('grid');
var griditem;

if (addCart){
    addCart.addEventListener("click", () =>{
        var Quantity = parseInt(input.value);
        griditem = document.createElement("div");
        griditem.textContent = pname;
        grid1.appendChild(griditem);
        griditem = document.createElement("div");
        griditem.textContent = Quantity;
        grid1.appendChild(griditem);
        pprice *= Quantity;
        griditem = document.createElement("div");
        griditem.textContent = pprice;
        grid1.appendChild(griditem);
        form.style.display = "none";
        overlay.style.display = "none";
    })
}

