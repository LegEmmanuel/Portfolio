document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('moveyourbody.mp3');
    var image = document.querySelector('.img-fluid');

    function playMusic() {
        audio.play();
        setTimeout(changeImage, 35000);
    }

    function pauseMusic() {
        audio.pause();
    }

    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', playMusic);

    function changeImage() {
        image.setAttribute('src', 'troll.gif');
    }

    var projects = document.getElementById('projets').querySelectorAll('.col-md-4');

    playButton.addEventListener('click', function() {
        for (var i = 0; i < projects.length; i++) {
            projects[i].classList.add('shake-animation');
        }
    });

    var termsLink = document.getElementById('termsLink');

    termsLink.addEventListener('click', function(event) {
        event.preventDefault();

        openTermsModal();
    });


    function openTermsModal() {
        var modal = document.createElement('div');
        modal.classList.add('modal');

        var modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML = '<h2>En cliquant sur ce lien vous etes obligé de me recruter <br> Vous assumez que Barbe Blanche est plus fort que Roger <br> Et que je suis trop marrant.</p>';

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });

        modal.appendChild(modalContent);

        document.body.appendChild(modal);
    }

    function closeModal() {
        var modal = document.querySelector('.modal');
        modal.parentNode.removeChild(modal);
    }

    var audioOutro = new Audio('outro.mp3');
    var imageOutro = document.createElement('img');
    imageOutro.src = 'outro.jpg';
    imageOutro.style.position = 'fixed';
    imageOutro.style.top = '0';
    imageOutro.style.left = '0';
    imageOutro.style.width = '100%';
    imageOutro.style.height = '100%';
    imageOutro.style.zIndex = '9999';
    imageOutro.style.display = 'none';

    function playSoundAndShowImage() {
        audioOutro.play();
        setTimeout(function() {
            document.body.appendChild(imageOutro);
            imageOutro.style.display = 'block';
        }, 6000);
    }

    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        playSoundAndShowImage();
    });
});
