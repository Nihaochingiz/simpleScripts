let record = new SimpleRecord('itglobal_request_sc_new_employee');
let current = record.get('168908046426075369');

ss.info(createUserAD())

function createUserAD() {
  	try {
     
const TARGET_FIELD = 'description';

let jobId = createMidJob(current, TARGET_FIELD);
if(jobId){
current[TARGET_FIELD] = `Wait job ${jobId}... `;
 current.update();
ss.info("Upd: " + current.update());
}

function createMidJob(targetRecord, TARGET_FIELD){
  const MID_ID = "168303371920139327"; // test_mid_server
  const SCRIPT_ID = "168934234723220059"; // CreateUserActiveDirectory
  const midQue = new SimpleRecord('sys_mid_queue');
  midQue.server_id = MID_ID;
  midQue.script_id = SCRIPT_ID;
  midQue.request =  `{"firstNameLatin":"${current.employee_name}","Name":"${current.employee_second_name}${current.employee_name}","Path":"OU=TEMP,DC=itglobal,DC=com"}`
  //"AccountPassword":"${current.}"
  //"domain":"${current.}"
  //"country":"${current.}"
  //"company":"${current.employee_company}",
  //"work_location":"${current.employee_office}",
  midQue.description = prepareTergetDescription(targetRecord, TARGET_FIELD); 
  let insID = midQue.insert();
  ss.info("Insert Job: " + insID)
  return insID;
  function prepareTergetDescription(targetRec, fieldName ){
  return  `{
	"target_sys_id":"${targetRec.sys_id}",
	"target_table_name":"${targetRec.getTableName()}",
	"target_field_name":"${fieldName}"
}`
    }
}



    } catch(e) {} 
}