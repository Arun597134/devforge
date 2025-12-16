const animated = document.querySelectorAll('.slide-left, .slide-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{ threshold:0.2 });

animated.forEach(el => observer.observe(el));
// Counter animation for goals
const counters = document.querySelectorAll('.counter');
const speed = 50;

counters.forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const inc = Math.ceil(target / speed);

    if(count < target){
      counter.innerText = count + inc;
      setTimeout(update, 40);
    } else {
      counter.innerText = target;
    }
  };

  const counterObserver = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting){
      update();
      counterObserver.disconnect();
    }
  });

  counterObserver.observe(counter);
});