(function executeRule(current, previous = null /*not null only when action is update*/) {
const reModelId = current.getReModelId();

    if (reModelId) {
        const model = new SimpleRecord('sys_rmc_model');
        model.get(current.getReModelId()); // current model
     // ss.info("reModelId: "+ reModelId);
        current.service = model.getValue('cmdb_service_id'); // pass service if field exists
      current.c_request_model = reModelId;
    }

})(current, previous);