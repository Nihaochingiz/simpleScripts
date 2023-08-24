const stateModel = {
    "confirmed": [
        "won",
        "lost"
    ],
    "new": [
        "rejected"
    ]
};
const states = stateModel[String(s_form.getValue('state'))];
if(states){
    s_form.clearOptions('state');
    for(let state of states){
        await s_form.addOption('state', state);
    }
 }