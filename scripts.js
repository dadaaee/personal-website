document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText) {
        addComment(commentText);
        commentInput.value = '';
    }
});

function addComment(text) {
    const commentList = document.getElementById('commentList');
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.textContent = text;
    commentList.appendChild(commentElement);
}
