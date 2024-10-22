document.getElementById('postButton').addEventListener('click', function() {
    const postContent = document.getElementById('postContent').value;

    if (postContent) {
        const postsContainer = document.getElementById('postsContainer');

        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.textContent = postContent;

        postsContainer.prepend(postDiv);
        document.getElementById('postContent').value = ''; // Clear the textarea
    } else {
        alert('Please enter a message!');
    }
});
