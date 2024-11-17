const Counter = document.querySelectorAll('.counter span');
const Counter_Container = document.querySelector('.counter');

let Counter_Activated = false



window.addEventListener('scroll',() => {
    
    
    if(pageYOffset > Counter_Container.offsetTop - Counter_Container.offsetHeight - 500 && Counter_Activated === false){
        console.log("hi");
        
        Counter.forEach(c =>{
            c.innerText = 0;
            let count = 0

            function UpdateCount(){
                const Target = parseInt(c.dataset.count);

                if(Target < 50){
                    if(count < Target){
                        count = count + 1;
                        c.innerText = count;
                        setTimeout(UpdateCount,40);
                    }
                    else{
                        c.innerText = Target;
                    }
                }
                else{
                    if(count < Target){
                        count = count = count + 10;
                        c.innerText = count;
                        setTimeout(UpdateCount,20);
                    }
                    else{
                        c.innerText = Target;
                    }
                }
            }

            UpdateCount()
            Counter_Activated = true
        })
    }

    else if(
        pageYOffset < Counter_Container.offsetTop - Counter_Container.offsetHeight - 500
        || pageYOffset === 0
        && Counter_Activated === true ){
            
            Counter.forEach(c =>{
                c.innerText = 0;
            })
            Counter_Activated = false
        }
})
