var addCount = 1;

function addMore(){
    console.log("2");
    var para=document.createElement("select");
    para.innerHTML = `
    <option value="text">Text</option>
    <option value="radio">Radio</option>
    <option value="checkbox">Checkbox</option>
    <option value="textarea">Text Area</option>
    <option value="button">Button</option>
    <option value="email">Email</option>
    <option value="password">Password</option>
        
    `;
    para.name = 'type' + addCount;
    addCount += 1;
    document.querySelector("#counter").value = addCount;
    document.querySelector('#forms').appendChild(para);
    document.querySelector('#forms').appendChild(document.createElement('br'));
}

document.getElementById('addmore').onclick = e => {
    e.preventDefault();
    console.log("1");
    addMore();
};