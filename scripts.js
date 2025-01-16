document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const addFriendButton = document.querySelector('.add-friend');
  

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });
  
    addFriendButton.addEventListener('click', () => {
        addFriendButton.textContent = "Request Sent";
        addFriendButton.disabled = true; 
      });
      
  });
  