let record = new SimpleRecord('c_absences');
let current = record.get('168959910120777289');

//ss.info(current.type)
function setService(type) {
let service;
type = current.type
 switch (current.type) {
      case 5: //  business trip : accounting
      service = "168442862727520768";
          break;
      case 1: //  absence : accounting
      service = "168442856021829950";
          break;
      case 6: // vacation at own expence : accounting
      service = "168442856021829950";
          break;
      case 2: // vacation : Vacations Accounting 
      service = "168442861325849203";
          break;
      case 3: // Fictitious vacation : Vacations Accounting 
      service = "168442861325849203";
          break;
        case 4: // Work in holiday : Work in holiday Accounting
      service = "168442864325086820";
          break;
          default:
          return " "
    }
  return service
}
ss.info(setService(current.type))
