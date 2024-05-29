const profilePhoto = "https://fastly.picsum.photos/id/199/200/200.jpg?hmac=99686XFipBqxseUxgj_9rxuAbGbc-q9nlzukFHVQyIU"

function changeProfilePictures() {
    const elements = document.querySelectorAll('img.EntityPhoto-circle-3, img.EntityPhoto-square-1');
    elements.forEach((e) => {
        e.src = profilePhoto;
    });
}

// Run once on page load
changeProfilePictures();

// Set up a MutationObserver to run again whenever new nodes are added to the body
const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });