let record = new SimpleRecord('itglobal_request_sc_new_employee');
let current = record.get('168863221627281452');//168864610024974240
let employee_office = current.getDisplayValue('employee_office');
    if (employee_office === 'Remote working') {
   ss.info(
      `Удаленно с ${current.start_work_date}
на работу вышел новый сотрудник:`)
      
    } else {
    ss.info(
`В г. ${employee_office} с ${current.start_work_date}
на работу вышел новый сотрудник:`)
  }