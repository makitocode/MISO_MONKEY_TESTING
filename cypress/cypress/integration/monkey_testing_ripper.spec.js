describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(500);
        randomClick(10);
    })
})
//Random function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
//Random clic
function randomClick(monkeysLeft) {
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}

//Random text
function randomTextField(monkeysLeft){
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('input[type="text"]').then($inputs => {
            console.log(`Number of inputs: ${$inputs.length}`)
            var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
            cy.wrap(randomInput).type("-ABC123DEF456", { force: true });
            monkeysLeft = monkeysLeft - 1;
            setTimeout(randomTextField, 1000, monkeysLeft);
        });
    }
}

//Random events
function randomEvent(eventNum, monkeysLeft){
    switch (eventNum) {
        case 1://click on link
            randomClick(monkeysLeft);
            break;
        case 2://Text field
            randomTextField(monkeysLeft)
            break;
        case 3://combo select
            randomComboSelect(monkeysLeft)
            break;
        case 4://click on button
            randomClickButton(monkeysLeft)
            break;
        default:
        console.log(`Option not available`);
            break;
    }
}