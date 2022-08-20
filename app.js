document.getElementById('path').addEventListener('click', function(){
    const path = document.getElementById('path');
    path.classList.toggle('active');
    const field = document.getElementById('field');
    field.classList.toggle('active');
});