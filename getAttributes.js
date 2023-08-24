let record = new SimpleRecord('itsm_request');
let current = record.get('168931963026872650');
//ss.info(current.type)
ss.info(JSON.stringify(current.getAttributes(), false, 4))