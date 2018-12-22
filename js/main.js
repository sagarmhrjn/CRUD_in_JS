var form = document.getElementById('addForm');
var friendList = document.getElementById('friends');
var filter = document.getElementById('filter');
// Form Submit Event
form.addEventListener('submit', addFriend);

//Delete Event
friendList.addEventListener('click', removeFriend);

//Filter Event
filter.addEventListener('keyup', filterFriends);


let editValue = "";

//Add a friend
function addFriend(e) {
    //prevent the initial behavior; normal submission of form to not happen
    e.preventDefault();

    //Get Input Value
    var newFriend = document.getElementById('friend').value;

    // Create new li element
    var li = document.createElement('li');
    //Add class to li
    li.className = 'list-group-item';

    let friendSpan = document.createElement('span')
    friendSpan.id = newFriend;
    friendSpan.innerHTML = newFriend

    // Append text to li
    li.appendChild(friendSpan);

    // Create del button element
    var deleteBtn = document.createElement('button');
    //Add Class to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));
    //Append button to li
    li.appendChild(deleteBtn);


    // Create edit button
    let editBtn = document.createElement('button');
    // Add class to edit button
    editBtn.className = "btn btn-primary mr-1 btn-sm float-right edit";
    // Add text node to button
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.onclick = () => {
        document.getElementById('editForm').style.display = 'block';
        document.getElementById('addForm').style.display = 'none';
        document.getElementById("title").innerHTML = "Edit a Friend"
        document.getElementById('editFriend').value = newFriend;
        editValue = newFriend;
    }
    li.appendChild(editBtn);

    //Append li to list
    friendList.appendChild(li);

    document.getElementById('friend').value = '';
}

const editTest = () => {
    document.getElementById('editForm').style.display = 'none';
    document.getElementById('addForm').style.display = 'block';
    document.getElementById(editValue).innerHTML = document.getElementById('editFriend').value;
    document.getElementById('editFriend').value = '';
    editValue = null;
}

//Remove a friend
function removeFriend(e) {
    console.log(e);
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            friendList.removeChild(li);
        }
    }
}

//Filter friends
function filterFriends(e) {
    //converts text to lowercase
    var text = e.target.value.toLowerCase();
    console.log(text);
    //Get list
    var friends = friendList.getElementsByTagName('li');
    //Convert to an array
    Array.from(friends).forEach(function (friend) {
        // gives list of the item name as we type in search form
        var friendName = friend.firstChild.textContent;
        // The indexOf() method returns the position of the first occurrence of a specified value in a string.
        // This method returns -1 if the value to search for never occurs
        if (friendName.toLowerCase().indexOf(text) != -1) {     // if not equal to -1 it's a match
            friend.style.display = 'block';
        } else {
            friend.style.display = 'none';
        }
    })

}
