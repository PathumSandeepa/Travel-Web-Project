const member1 = document.getElementById('member1');
const member2 = document.getElementById('member2');
const member3 = document.getElementById('member3');
const member4 = document.getElementById('member4');
const name = document.getElementById('name');
const role = document.getElementById('role');

member1.addEventListener('mouseover', () => {
  name.textContent = 'Member 1';
  role.textContent = 'Student 1';
});

member2.addEventListener('mouseover', () => {
  name.textContent = 'Member 2';
  role.textContent = 'Student 2';
});

member3.addEventListener('mouseover', () => {
  name.textContent = 'Member 3';
  role.textContent = 'Student 3';
});

member4.addEventListener('mouseover', () => {
    name.textContent = 'Member 4';
    role.textContent = 'Student 4';
  });
