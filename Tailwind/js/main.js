// Theme Toggler JS 
let toggler = document.getElementById('toggler');
toggler.addEventListener('click',toggleTheme)
function toggleTheme(e){
if(e.target.checked){
document.querySelector('html').classList.add('dark');
}else{
document.querySelector('html').classList.remove('dark');
}
}
