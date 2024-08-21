
function click_button(){
    let a=document.getElementById("to_do").value;
    let c=document.getElementById("tasks_container")
    let value1=document.createElement ("input");
    value1.value=a
    value1.id="input_value"
    let z=document.getElementById("to_do").value=""
    let click=document.createElement("button")
    click.textContent="Done"
    c.appendChild(value1);
    c.appendChild(click);
    click.id="me"
    click.onclick = (() => {
            let completed_tasks=document.getElementById("tasks_completed")
            let paragraph=document.createElement("li")
            let x=document.getElementById("input_value")
            let get_value=document.getElementById("x")
            paragraph.textContent=value1.value
            paragraph.style="color:black"
            x.remove()
            click.remove()
            completed_tasks.appendChild(paragraph)
    });
}
// function click(){
// document.getElementById("me").onclick= function click(){
//     let completed_tasks=document.getElementById("tasks_completed")
//     let paragraph=document.createElement("p")
//     let x=document.getElementById("input_value")
//     let get_value=document.getElementById("x")
//     paragraph.textContent=get_value
//     completed_tasks.appendChild(paragraph)

// }
// }




// function click_button(){
//     let a=document.getElementById("to_do").value;
//     let c=document.getElementById("tasks_container")
//     let value1=document.createElement ("input");
//     value1.value=a
//     let z=document.getElementById("to_do").value=""
//     let clickbutton=document.createElement("button")
//     clickbutton.textContent="Done"
//     c.appendChild(value1);
//     c.appendChild(clickbutton);
//         if (value1.value!==""){
//             let completed_tasks=document.getElementById("tasks_completed")
//             let paragraph=document.createElement("p")
//             paragraph.textContent=a
//             completed_tasks.appendChild(paragraph)
//         }
// }