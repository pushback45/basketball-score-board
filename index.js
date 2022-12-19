let countEl = document.getElementById('count-el');
let count = 0;

let countEl1 = document.getElementById('count-el-1');
let count1 = 0;

function addone() {
	count += 1;
	countEl.innerText = count;
}
function plusone() {
	count1 += 1;
	countEl1.innerText = count1;
}
function addtwo() {
	count += 2;
	countEl.innerText = count;
}
function plustwo() {
	count1 += 2;
	countEl1.innerText = count1;
}
function addthree() {
	count += 3;
	countEl.innerText = count;
}
function plusthree() {
	count1 += 3;
	countEl1.innerText = count1;
}
