//https://support.itglobal.com/list/sys_choice?condition=(table_id%3D159800343328035252%5Elanguage%3Dru)
let record = new SimpleRecord('sys_choice');
record.addQuery('table_id', '159800343328035252');
record.addQuery('language', 'ru');
record.query()
while (record.next()) {
  ss.info(record.title);
}