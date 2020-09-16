function getHelp(help) {
    document.getElementById('help').innerText = help;
}

function setupHelp() {
    let help = [
        { id:"name", help:"Please don't include numeric characters."},
        { id:"email", help:"Please give your official Email address."},
        { id:"number", help:"Enter yout 10 digit number."}
    ]
    /*
    for(let i=0; i<help.length; i++) {
        let item = help[i];
        document.getElementById(item.id).onfocus = function() {
            getHelp(item.help);
        }
    }
    */
    help.forEach( text => {
        document.getElementById(text.id).onfocus = () => {
            getHelp(text.help);
        };
    });
}

setupHelp();

