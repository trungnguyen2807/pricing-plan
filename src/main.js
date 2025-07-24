// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')
document.addEventListener('DOMContentLoaded', () => {
  console.log("JS đã chạy!");
});
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.selectable-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
    //chinh ve default
      cards.forEach(c => {
        c.classList.remove('text-white', 'bg-[#111826]');
        c.classList.add('text-black', 'bg-white');

        c.querySelectorAll('.list')?.forEach(li => {
            li.classList.add('border-b','border-gray-300');
        });
        
        c.querySelector('.description')?.classList.remove('text-white');
        c.querySelector('.description')?.classList.add('text-gray-600');

        c.querySelector('.button')?.classList.remove('text-white', 'bg-[#7D4F1E]');
        c.querySelector('.button')?.classList.add('text-black', 'bg-white');

        c.querySelector('.title')?.classList.remove('text-white', 'bg-[#273FA9]');
        c.querySelector('.title')?.classList.add('text-blue-800', 'bg-white');
      });
      //apply click styles
        card.classList.remove('text-black', 'bg-white');
        card.classList.add('text-white', 'bg-[#111826]');

        card.querySelectorAll('.list')?.forEach(li => {
            li.classList.remove('border-b', 'border-gray-300'); 
        });

        card.querySelector('.description')?.classList.remove('text-gray-600');
        card.querySelector('.description')?.classList.add('text-white');

        card.querySelector('.button')?.classList.remove('text-black', 'bg-white');
        card.querySelector('.button')?.classList.add('text-white', 'bg-[#7D4F1E]');

        card.querySelector('.title')?.classList.remove('text-blue-800', 'bg-white');
        card.querySelector('.title')?.classList.add('text-white', 'bg-[#273FA9]');
    });
  });
});