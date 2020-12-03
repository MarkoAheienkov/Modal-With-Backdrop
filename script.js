const modalContentTemplate = `
    <h2 class="modal-title">Modal Title</h2>
    <p class="modal-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
      Ipsa consequatur placeat illum ullam 
      voluptatum magni quasi quas 
      ipsum maxime perferendis?
    </p>
    <div class="modal-controls">
      <button data-action="CANCEL" class="modal-control danger">Cancel</button>
      <button data-action="CONFIRM" class="modal-control success">Confirm</button>
    </div>
`;

const modalActions = {
  CANCEL: 'CANCEL',
  CONFIRM: 'CONFIRM'
};

const modalContent = document.createElement('div');
modalContent.innerHTML = modalContentTemplate;
modalContent.classList.add('modal-container');

const modal = new Modal(modalContent, document.body);

const openModal = document.querySelector('#openModal');

openModal.addEventListener('click', (event) => {
  modal.open();
});

modalContent.addEventListener('click', (event) => {
  const data = event.target.dataset;
  switch(data.action) {
    case(modalActions.CANCEL):
      modal.close();
      break;
    case(modalActions.CONFIRM):
      modal.close();
      break;
  }
});
