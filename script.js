//your JS code here. If required.
window.onload = function() {
    // Find the element with the ID 'level'
    var element = document.getElementById('level');
    
    // Initialize level count
    var level = 0;
    
    // Traverse up the DOM tree
    while (element) {
        level++;  // Increment level count for each parent
        element = element.parentElement;  // Move to the parent element
    }
    
    // Display the result
    alert("The level of the element is: " + level);
};