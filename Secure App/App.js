const userMessages = [];

const userMessageForm = document.querySelector('form');
const userMessagesList = document.querySelector('ul');


function renderMessages() {
  let messageItems = '';
 
  for (const message of userMessages) {
    
    messageItems = `
      ${messageItems}
      <li class="message-item">
        <div>
          <div class="message-image">
            <img src="${message.image}" alt="${message.text}">
          </div>
          </div>
        <p>${message.text}</p>
      </li>
    `;
  } 
  userMessagesList.innerText = messageItems;
}

function formSubmitHandler(event) {
  event.preventDefault();
  const userMessageInput = event.target.querySelector('textarea');
  const messageImageInput = event.target.querySelector('input');
  const useritem = userMessageInput.value;
  const imageUrl = messageImageInput.value;

  if (
    !useritem ||
    !imageUrl ||
    useritem.trim().length === 0 ||
    imageUrl.trim().length === 0
  ) {
    alert('Please insert a valid message and image.');
    return;
  }

  userMessages.push({
    text: useritem,
    image: imageUrl,
  });
  

  userMessageInput.value = '';
  messageImageInput.value = '';
  
  renderMessages();
}
userMessageForm.addEventListener('submit', formSubmitHandler);

