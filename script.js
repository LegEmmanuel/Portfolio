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


});
document.addEventListener('DOMContentLoaded', function() {
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
        modalContent.innerHTML = '<h2>En cliquant sur ce lien vous ete obliger de me recruter <br> Vous assumez que Barbe Blanche est plus fort que Roger <br> Et que je suis trop marrant.</p>';
  
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
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('outro.mp3');
    var image = document.createElement('img');
    image.src = 'outro.jpg';
    image.style.position = 'fixed';
    image.style.top = '0';
    image.style.left = '0';
    image.style.width = '100%';
    image.style.height = '100%';
    image.style.zIndex = '9999';
    image.style.display = 'none';
  
    function playSoundAndShowImage() {
      audio.play();
      setTimeout(function() {
        document.body.appendChild(image);
        image.style.display = 'block';
      }, 6000); 
    }
  
    var submitButton = document.querySelector('input[type="submit"]');
    submitButton.addEventListener('click', function(event) {
      event.preventDefault();
      playSoundAndShowImage();
    });
  });
  

