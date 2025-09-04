// Dynamic deployment date
const now = new Date();
const day = now.getDate();
const month = now.toLocaleDateString('en-US', { month: 'short' });
const year = now.getFullYear();
const suffix = day === 1 || day === 21 || day === 31 ? 'st' : day === 2 || day === 22 ? 'nd' : day === 3 || day === 23 ? 'rd' : 'th';
document.getElementById('deploymentDate').textContent = `${day}${suffix} ${month}, ${year}`;

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
