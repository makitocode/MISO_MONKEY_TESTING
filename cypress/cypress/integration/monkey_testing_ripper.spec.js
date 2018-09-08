describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(500);
        //randomClick(10);
        var eventnumber = getRandomInt(1, 5)
        randomEvent(eventnumber, 5)
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
            cy.wait(1000);
            randomClick(monkeysLeft);
            //setTimeout(randomClick, 1000, monkeysLeft);
        });
    }   
}
//Random text
function randomSetTextInput(monkeysLeft){
    //let monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('input[type="text"]').then($inputs => {
            console.log(`Number of inputs: ${$inputs.length}`)
            let randomInputText = $inputs.get(getRandomInt(0, $inputs.length));
            cy.wrap(randomInputText).type("-ABC123DEF456", { force: true });
            monkeysLeft = monkeysLeft - 1;
            setTimeout(randomSetTextInput, 1000, monkeysLeft);
        });
    }
}
//randomComboSelect
function randomComboSelect(monkeysLeft){
    //let monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0){
        cy.get('select').then($selects => {
            var randomInput = $selects.get(getRandomInt(0, $selects.length));
            var option = randomInput.options[getRandomInt(0, randomInput.options.length)];
            cy.wrap(randomInput).select(option.value, { force: true });
            monkeysLeft = monkeysLeft - 1;
            setTimeout(randomComboSelect, 1000, monkeysLeft);
        });
    }
}
//Random ClickButton
function randomClickButton(monkeysLeft){
    //let monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0){
        cy.get('button').then($inputs => {
            var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
            if (!Cypress.dom.isHidden(randomInput)) {
                cy.wrap(randomInput).click({ force: true });
                monkeysLeft = monkeysLeft - 1;
            }
            setTimeout(randomClickButton, 1000, monkeysLeft);
        });
    }
}
//Random events
function randomEvent(eventNum, monkeysLeft){
    var monkeysLeft = monkeysLeft;
    switch (eventNum) {
        case 1://click on link
            if(monkeysLeft > 0) {
                cy.get('a').then($links => {
                    var randomLink = $links.get(getRandomInt(0, $links.length));
                    if(!Cypress.dom.isHidden(randomLink)) {
                        cy.wrap(randomLink).click({force: true});
                        monkeysLeft = monkeysLeft - 1;
                    }
                    setTimeout(randomEvent(eventNum, monkeysLeft), 1000);
                });
            }
            break;
        case 2://Text field
            if(monkeysLeft > 0) {
                cy.get('input[type="text"]').then($inputs => {
                    console.log(`Number of inputs: ${$inputs.length}`)
                    let randomInputText = $inputs.get(getRandomInt(0, $inputs.length));
                    cy.wrap(randomInputText).type("-ABC123DEF456", { force: true });
                    monkeysLeft = monkeysLeft - 1;
                    setTimeout(randomEvent(eventNum, monkeysLeft), 1000);
                });
            }
            break;
        case 3://combo select
            if(monkeysLeft > 0){
                cy.get('select').then($selects => {
                    var randomInput = $selects.get(getRandomInt(0, $selects.length));
                    var option = randomInput.options[getRandomInt(0, randomInput.options.length)];
                    cy.wrap(randomInput).select(option.value, { force: true });
                    monkeysLeft = monkeysLeft - 1;
                    setTimeout(randomEvent(eventNum, monkeysLeft), 1000);
                });
            }
            break;
        case 4://click on button
            if(monkeysLeft > 0){
                cy.get('button').then($inputs => {
                    var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                    if (!Cypress.dom.isHidden(randomInput)) {
                        cy.wrap(randomInput).click({ force: true });
                        monkeysLeft = monkeysLeft - 1;
                    }
                    setTimeout(randomEvent(eventNum, monkeysLeft), 1000);
                });
            }
            break;
        default:
        console.log(`Option not available`);
            break;
    }
}