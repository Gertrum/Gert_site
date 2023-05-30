const img = document.createElement('img');

window.addEventListener('load', function() {
  var modal = document.createElement('div');
  modal.className = 'modal';

  var modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  modalContent.innerHTML = '<p>Хочешь увидеть, что в темноте?</p><button id="jumpButton">заглянуть во тьму</button>';
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  var jumpButton = document.getElementById('jumpButton');
  jumpButton.addEventListener('click', function() {
    modal.style.display = 'none';
    alert('https://vk.com/gertrum_ph');
  });
  modal.style.display = 'block';
});
