
document.getElementById('togglePhone').addEventListener('click', function() {
  const phoneNumber = document.getElementById('phoneNumber');
  const eyeIcon = document.getElementById('eyeIcon');
  
  if (phoneNumber.textContent === '*******') {
      phoneNumber.textContent = '+1 (555) 123-4567';
      eyeIcon.className = 'bi-eye-slash';
  } else {
      phoneNumber.textContent = '*******';
      eyeIcon.className = 'bi-eye';
  }
});
