document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
  
        contents.forEach(content => content.classList.remove('active'));
        const target = tab.getAttribute('data-tab');
        document.getElementById(target).classList.add('active');
  
    addFriendButton.addEventListener('click', () => {
        addFriendButton.textContent = "Request Sent";
        addFriendButton.disabled = true; 
      });
      
    });
});
});
  