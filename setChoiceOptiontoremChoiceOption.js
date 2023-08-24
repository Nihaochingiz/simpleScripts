onst choice = new SimpleRecord("sys_choice");
const choiceOfTable = [];
choice.addQuery('column_id', '167353003926256766')// Вставляем сюда колонку с типом choice
choice.query()
while (choice.next()) {
  choiceOfTable.push(choice.sys_id);
}
ss.info(choiceOfTable.value)

for ( let i = 0 ; i < choiceOfTable.length; i++) {
let columns = choice.get(choiceOfTable[i])// Колонки
ss.info(columns.sys_id)
setRemChoiceOption();


function setRemChoiceOption() {
  const rem_choice = new SimpleRecord("sys_re_choice");
    rem_choice.column_id = '168813559627659550'// Вставляем наш атрибут choice
    rem_choice.title = columns.title
    rem_choice.language = columns.language
    rem_choice.value = columns.value
    rem_choice.order = columns.order
    rem_choice.insert();// Делаем из choice -> REM choice

 }
}

