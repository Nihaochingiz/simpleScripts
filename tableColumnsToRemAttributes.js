
const record = new SimpleRecord("sys_db_column");
const arrId = [];
record.addQuery('table_id', '168726229224896075')// Вставляем сюда нашу таблицу
record.addQuery('column_name', '!=', 'sys_updated_by'); // Системные поля нам не нужны
record.addQuery('column_name', '!=', 'sys_created_by');
record.addQuery('column_name', '!=', 'sys_updated_at');
record.addQuery('column_name', '!=', 'sys_created_at');
record.addQuery('column_name', '!=', 'sys_id');
record.query()
while (record.next()) {
  arrId.push(record.sys_id);
}
ss.info(arrId)

for ( let i = 0 ; i < arrId.length; i++) {
let columns = record.get( arrId[i])// Колонки
  getColumn();
function getColumn() {
    const attributes = new SimpleRecord("sys_re_attribute");
    attributes.re_container_id = '168752958821816852'// Вставляем наш контейнер
    attributes.column_type_id = columns.column_type_id.sys_id
    attributes.title = columns.title
    attributes.column_name = 'rem_' + columns.column_name
    if (attributes.column_type_id.sys_id === 8) {
    attributes.reference_id = columns.reference_id.sys_id
     }
   if (attributes.column_type_id.sys_id === 2) {
    attributes.choice_type = 2
    attributes.default_value = columns.default_value
     }
   attributes.insert();// Делаем из данной колонки атрибут
 }
}










