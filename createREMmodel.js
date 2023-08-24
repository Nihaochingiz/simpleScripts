const record = new SimpleRecord("itsm_request_template");
let request_template = record.get("168733510322708878")
ss.info(request_template.service_catalog_id.name)

function createRemModel() {
    ss.info(request_template.service_catalog_id.sys_id)
    const rem_model = new SimpleRecord("sys_rmc_model");
    rem_model.title = request_template.name
    rem_model.description = request_template.description
    rem_model.table_id = "156950616617772294"//Requests
    rem_model.cmdb_service_id = request_template.service_catalog_id.sys_id
    rem_model.category_id = request_template.sc_category.sys_id
    rem_model.order = request_template.order
    rem_model.active = 1
    rem_model.insert();// Создаем REM model
}
  
createRemModel()