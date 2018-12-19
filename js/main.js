var form = document.getElementById('addForm');
var friendList = document.getElementById('friends');
var filter = document.getElementById('filter');
// Form Submit Event
form.addEventListener('submit', addFriend);

//Delete Event
friendList.addEventListener('click', removeFriend);

//Filter Event
filter.addEventListener('keyup', filterFriends);

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

    //Add text node with input value
    li.appendChild(document.createTextNode(newFriend));

    // Create del button element
    var deleteBtn = document.createElement('button');

    //Add Class to del button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";

    //Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    friendList.appendChild(li);


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
        var friendName = friend.firstChild.textContent;
        if (friendName.toLowerCase().indexOf(text) != -1) {     //if not equal to -1 it's a match
            friend.style.display = 'block';
        } else {
            friend.style.display = 'none';
        }
    })

}
