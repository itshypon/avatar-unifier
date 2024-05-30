const profilePhoto = "https://fastly.picsum.photos/id/199/200/200.jpg?hmac=99686XFipBqxseUxgj_9rxuAbGbc-q9nlzukFHVQyIU"
const mainImage = document.querySelector("img.global-nav__me-photo");
mainImage.src = profilePhoto;

function changeProfilePictures() {
    const images = document.getElementsByTagName('img');
    for(let img of images) {
        if(Array.from(img.classList).some(cls => cls.startsWith('EntityPhoto'))) {
            img.src = profilePhoto;
        }
    }
}


changeProfilePictures();

// Set up a MutationObserver to run again whenever new nodes are added to the body
const observer = new MutationObserver(changeProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });