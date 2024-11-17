const Counter = document.querySelectorAll('.counter span');
const Counter_Container = document.querySelector('.counter');

let Counter_Activated = false;

window.addEventListener('scroll', () => {
    const containerTop = Counter_Container.offsetTop;
    const containerBottom = containerTop + Counter_Container.offsetHeight;
    const isInView = pageYOffset > containerTop - window.innerHeight && pageYOffset < containerBottom;

    if (isInView && !Counter_Activated) {

        Counter.forEach(c => {
            c.innerText = 0; 
            let count = 0;

            function UpdateCount() {
                const Target = parseInt(c.dataset.count, 10);

                if (Target < 50) {
                    if (count < Target) {
                        count++;
                        c.innerText = count;
                        setTimeout(UpdateCount, 40);
                    } else {
                        c.innerText = Target;
                    }
                } else {
                    if (count < Target) {
                        count += 10;
                        c.innerText = count;
                        setTimeout(UpdateCount, 20);
                    } else {
                        c.innerText = Target;
                    }
                }
            }

            UpdateCount();
        });


        Counter_Activated = true;
    } else if (!isInView && Counter_Activated) {
        Counter_Activated = false;
    }
});



let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  
  slides.forEach(slide => slide.style.display = 'none');

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';

  setTimeout(showSlides, 5000);
}

function moveSlide(n) {
  slideIndex += n;
  let slides = document.querySelectorAll('.slide');
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  

  slides.forEach(slide => slide.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block';
}

showSlides();

