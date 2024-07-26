//determino gli elementi 
let initialCounter = 0;
const counter = document.querySelector("#counter-display");
const counterStyle = counter.classList;
const btns = document.querySelectorAll("button");


btns.forEach((button) => {
    button.addEventListener("click", (e) => {
        //determino lo stile del bottone
        const styles = e.currentTarget.classList;
        //se clicco su add aumenta il counter
        if (styles.contains("add")) {
            initialCounter++;
            // clicco su reduce diminuisce il counter
        } else if (styles.contains("reduce")) {
            initialCounter--;
            // se clicco su reset il counter ritorna a 0 
        } else {
            initialCounter = 0;
            //console.log(initialCounter);
        }
        //rendo dinamico il counter-display
        counter.textContent = initialCounter;

        //determino i colori
        if (initialCounter > 0) {
              //se è maggiore di 0, sfondo verde e testo bianco (aggiungi classe Bootstrap)
            counterStyle.add('bg-success', 'text-light');
        } else if (initialCounter < 0) {
            //se è minore di 0, sfondo rosso e testo bianco (aggiungi classe Bootstrap)
            counterStyle.add('bg-danger', 'text-light');
        } else {
            // a 0 rimuovi tutte le classi
            counterStyle.remove('bg-danger', 'bg-dark', 'text-light', 'bg-success');
        }
    })
})
//



