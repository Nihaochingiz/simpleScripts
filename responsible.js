const partner = s_form.getValue('partner');
const partnerContact = s_form.getValue('partner_contact');
if (s_form.getValue('crm_smpl_crm_deal')){
  if (partner == 'partner'){
 s_form.setVisible(partnerContact, true);
}
else {
 s_form.setMandatory('responsible_otvetstvennij', true)
}
}