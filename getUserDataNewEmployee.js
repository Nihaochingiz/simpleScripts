let record = new SimpleRecord('itglobal_request_sc_new_employee');
let current = record.get('168915289122632445');

let userData = current.getAttributes()
for (var key in userData) {
  alert( "\n" + key);
}