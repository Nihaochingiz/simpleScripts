main();

function bodyMain(){

  var config = {
    table_names: // Mandatory, Default: []
      [
        "itglobal_expand_resources",
        "itglobal_delete_test_vstack",
        "itglobal_issue_of_prod_vstack",
        "itglobal_switch_test_to_prod_vstack",
        "itglobal_test_provision_vstack",
        "itglobal_change_the_terms_of_an_employment_contract",
        "itglobal_request_sc_activation_service_managed_it",
        "itglobal_request_sc_test_to_prod_switch",
        "itglobal_request_sc_issue_of_prod",
        "itglobal_request_sc_test_provision",
        "itglobal_request_sc_test_delete",
        "itglobal_request_sc_replacement_of_pass",  
        "itglobal_request_sc_ustanovka_obnovlenie_po",
        "itglobal_request_sc_vidacha_zamena_oborudovaniya",
        "itglobal_request_sc_registration_of_sold_equipment",
        "itglobal_request_sc_switch_test_to_prod",
        "itglobal_request_sc_delete_test",
        "itglobal_request_sc_predostavlenie_testa",
        "itglobal_request_sc_2_ndfl_spravka",
        "itglobal_request_sc_poluchit_kopiyu_trudovoj_knizhki",
        "itglobal_request_sc_dismissal_of_an_employee",
        "itglobal_request_sc_perevod_sotrudnika",
      ],
    operation_acronym: 'CRUD', // Mandatory, Default: R
    role_names:
          [

          ],
    acl_attributes: // Необязательные дополнительные атрибуты
    {
      admin_overrides: false,
      //condition: "(sys_idISNOTEMPTY)"
      script: "false"
    } 
  };
  generatorACL(config);

  
}

function generatorACL(config) {
  let table_ids  = getTableIdsByNames(config.table_names);  //print_r(table_ids);
  let operations = getOperationsArrayByAcromym(config.operation_acronym);// print_r(operations);
  let role_ids   = getRoleIdsByName(config.role_names);//print_r(role_ids);
   
  table_ids.forEach(tableId => {
    operations.forEach(operation => {
      ss.info({tableId, operation, role_ids});  ss.info(config.acl_attributes);
      let aclId = createACL(tableId, operation, role_ids, config.acl_attributes);
      if(aclId){ ss.info("Created ACL id: " + aclId)}
      });
  });
}

function createACL(tableId, operation, role_ids, addAttributes) {

  const acl = new SimpleRecord('sys_security_acl');
  acl.table_id = tableId;
  acl.operation = operation;
  acl.role_ids = role_ids.join(',');
  for (let fieldName in addAttributes) {
    acl[fieldName] = addAttributes[fieldName];
  }
  return acl.insert();
    
}

function getTableIdsByNames(tableNames = []) {
  var ids = [];
  const rec = new SimpleRecord('sys_db_table');
        rec.addQuery('name', 'IN', tableNames);
        rec.query();
        while (rec.next()) {
          ids.push(rec.sys_id);
        }
    
  return ids;
}

function getOperationsArrayByAcromym(acronym = "R") {
  operations = [];
  acronym = acronym.toUpperCase();
  if(acronym.includes('C')){ operations.push('create');}
  if(acronym.includes('R')){ operations.push('read');}
  if(acronym.includes('U')){ operations.push('write');}
  if(acronym.includes('D')){ operations.push('delete');}
  return operations;
}

function getRoleIdsByName(roleNames = []) {
  
  var ids = [];
  const rec = new SimpleRecord('sys_role');
        rec.addQuery('name', 'IN', roleNames);
        rec.query();
        while (rec.next()) {
          ids.push(rec.sys_id);
        }
    
  return ids;
}


function main(){
ss.info("Start Main: " + new Date().toLocaleString('ru', { timeZone: 'Europe/Moscow', timeZoneName: 'short' }) ); //'en-US'
  try{
      isSecurityAdmin();
      bodyMain();
      ss.info("Generate ACL Complete!!!");
  }catch(e){
      ss.info("\n\nException: " + e + "\n\n");
      ss.info("ExceptionStack: " + e.stack +"\n");
  }
ss.info("End Main: " + new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow', timeZoneName: 'long' }) ); //'en-US'
}

function isSecurityAdmin()
{
      if(ss.hasRole('security_admin') == false){
          throw new SyntaxError("Требуется наличие возвышение роли security_admin");
      }
}





// 22 надо
let arr = [
  "itglobal_expand_resources",
  "itglobal_delete_test_vstack",
  "itglobal_issue_of_prod_vstack",
  "itglobal_switch_test_to_prod_vstack",
  "itglobal_test_provision_vstack",
  "itglobal_change_the_terms_of_an_employment_contract",
  "itglobal_request_sc_activation_service_managed_it",
  "itglobal_request_sc_test_to_prod_switch",
  "itglobal_request_sc_issue_of_prod",
  "itglobal_request_sc_test_provision",
  "itglobal_request_sc_test_delete",
  "itglobal_request_sc_replacement_of_pass",  
  "itglobal_request_sc_ustanovka_obnovlenie_po",
  "itglobal_request_sc_vidacha_zamena_oborudovaniya",
  "itglobal_request_sc_registration_of_sold_equipment",
  "itglobal_request_sc_switch_test_to_prod",
  "itglobal_request_sc_delete_test",
  "itglobal_request_sc_predostavlenie_testa",
  "itglobal_request_sc_2_ndfl_spravka",
  "itglobal_request_sc_poluchit_kopiyu_trudovoj_knizhki",
  "itglobal_request_sc_dismissal_of_an_employee",
  "itglobal_request_sc_perevod_sotrudnika",
]