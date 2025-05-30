let newCompound = document.querySelector('#new-compound');
let addCompoundBtn = document.querySelector('#add-compound-btn');
let compoundList = document.querySelector('#compound-list');

let newPrimary = document.querySelector('#new-primary');
let addPrimaryBtn = document.querySelector('#add-primary-btn');
let primaryList = document.querySelector('#primary-list');

addCompoundBtn.addEventListener('click', function() {
    // Create a new compound item
    let li = document.createElement('li');
    li.textContent = newCompound.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function() {
        compoundList.removeChild(li);
    });
    li.appendChild(btn);
    // Append the new compound item to the list 
    compoundList.appendChild(li);
    newCompound.value = ''; // Clear the input field after adding
    newCompound.focus(); // Focus back on the input field 
});

addPrimaryBtn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.textContent = newPrimary.value;

    let btn = document.createElement('button');
    btn.textContent = '[X]';
    btn.className = 'remove-btn';
    btn.addEventListener('click', function(){
        primaryList.removeChild(li);
    });
    li.appendChild(btn);

    primaryList.appendChild(li);
    newPrimary.value = '';
    newPrimary.focus();
});