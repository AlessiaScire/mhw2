const blocks= document.querySelectorAll('.choice-grid div');
for (const block of blocks){
    block.addEventListener('click',handle);
}
let clickboxes = {
    'one':'',
    'two':'',
    'three':''
}
function controllo() {
    for(const k in clickboxes){
        if(clickboxes[k]===''){
            return false;
        }
    }
    return true;
}
function handle(event){
    const selR=event.currentTarget;

    if(!controllo()){
        clickboxes[selR.dataset.questionId]=selR.dataset.choiceId; //metto il valore definito
        let selezionaSi;
        let selezionaNo=[];
        for(const block of blocks){
            if(block.dataset.choiceId === selR.dataset.choiceId && block.dataset.questionId ===  selR.dataset.questionId){
                selezionaSi=block;
            }else if(block.dataset.questionId === selR.dataset.questionId){
                selezionaNo.push(block);
            }

            }
            console.log(selezionaSi)
            console.log(selezionaNo)

            for (const element of selezionaNo){
                let imageChild = element.querySelector('.checkbox');
                imageChild.src = 'images/unchecked.png'
                element.style.backgroundColor="#f4f4f4"
                element.classList.remove('selected');
                element.classList.add('not-selected');
                
            }
            let imageChild = selezionaSi.querySelector('.checkbox');
            selezionaSi.classList.add('selected');
            selezionaSi.classList.remove('not-selected');
            imageChild.src = 'images/checked.png'
            selR.style.backgroundColor = "#cfe3ff"
            if(controllo()){
                mostraRis();
            }
        }
            
        }

        function mostraRis(){
            const res= document.querySelector('#pulsante')
            res.addEventListener('click',ricominciaQuiz)
            let max;
            if(clickboxes['one'] === clickboxes['two'] || clickboxes['one'] === clickboxes['two']){
                max = clickboxes['one']
            }
            if(clickboxes['two'] === clickboxes['three']){
                max = clickboxes['two']
            }
           
           if(max === undefined){
                max = clickboxes['one']
            }
            const risultato = document.querySelector('#results')
            const titolo =risultato.querySelector('#titolo')
            const testo = risultato.querySelector('#testo')
            titolo.innerHTML = RESULTS_MAP[max].title
            testo.innerHTML = RESULTS_MAP[max].contents
            risultato.classList.remove('hidden')
        }
        
   


        function ricominciaQuiz() {
            clickboxes = {
                'one':'',
                'two':'',
                'three':''
            }
            for (const block of blocks){
                block.classList.remove('not-selected');
                block.classList.remove('selected');
                let imageChild = block.querySelector('.checkbox');
                imageChild.src = 'images/unchecked.png'
                block.style.backgroundColor = "#f4f4f4"
                const results = document.querySelector('#results')
                results.classList.add('hidden')
            }
        }     


    
       
    
    



























