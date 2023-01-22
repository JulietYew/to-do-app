// A simple to-do console application that adds your list of items in an array with different modifications like update,
//delete and add items to the list.
// A simple welcome message 
console.log("This is a simple to-do console application")
console.log("Welcome!") 
listOfItems = []

"use strict";
const ps = require("prompt-sync");
const prompt = ps();

// creating functions that asks the user if they would like to add, delete,edit, view, or exit the todoapp
//function add which takes a user input of what they want to add to their list of items
function add(input){
    input = prompt("What would you like to add to your list? Enter here:")
    listOfItems.push(input)
}

//function remove that prompts the user as to what they would love to delete from the list of items
function remove(del, del2){
    del = prompt("What would you like to delete? Enter here:")
    // deleting using the indexOf method
    del2 = listOfItems.indexOf(del)
    // using splice to delete only the index of the item the user indicated.
    listOfItems.splice(del2, 1)

}
// function edit that updates an item
function edit(update, update2,replace){
    update = prompt("What would you like to update? Enter here:")
    update2 = listOfItems.indexOf(update)
   
    replace = prompt("What would you like to replace the removed item with?:")
    listOfItems.splice(update2,1,replace)
}
//function exit that ends the code when initiated
function exit(){
    return; 
}

// function view that prints the individual list of items
function view(){
    for (items of listOfItems){
        console.log('----------ToDo List----------')
        console.log(items);
    }
}

// function task that askes the user what they want to do.
function task(request){
    // using a while loop for it to run until the stop keyword is initiated and the code ends.
    while (true){
    console.log("Enter add, remove, edit")
    request = prompt("What would you like to do?")

            if (request === "add"){
                add()
            }
            else if (request === 'remove'){
                remove()
            }
            else if(request === "edit"){
                edit()
            }
            else if (request === "view"){
                view()
            }
            else if (request === "stop"){
                exit()
                break;
                    
            }
    }
}
// calling the function
task()
// printing to the console the list of items in an array.
console.log(listOfItems);
