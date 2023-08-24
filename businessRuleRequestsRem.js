(function executeRule(current, previous = null /*not null only when action is update*/) {
    const reModelId = current.getReModelId();
    if (current.getReModelId()) {
        const model = new SimpleRecord('sys_rmc_model');
        model.get(current.getReModelId()); // current model
        current.$$service = model.getValue('cmdb_service_id'); // pass service if field exists
    }
})(current, previous);

const current = new SimpleRecord('task');
current.get('163663310116371174');
 
if (current.sys_id) {
    const company = new SimpleRecord('org_company');
    company.get('c_website', current.c_customer_url);
    ss.eventQueue('notify.responsible', current, company.responsible.email);
}