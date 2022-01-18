async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-content"]').value;


    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}


document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

// function displayDiv(event) {
//     event.preventDefault();
//     const createPost = document.getElementById('create-post')

//     if (createPost.style.display === 'none') {
//         createPost.style.display = 'block';
//     } else {
//         createPost.style.display = 'none'
//     }
//     console.log('button is click')
// }
// document.getElementById('div').addEventListener('onClick', displayDiv);
