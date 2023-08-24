(function executeRule(current, previous = null /*not null only when action is update*/) {
    const attr_install_soft = current.rem_attr.getValue('install_software');
    const hasAttach = current.hasAttachment();
    
    if (attr_install_soft && !hasAttach) {
        ss.addErrorMessage('File should be attached!');
        current.setAbortAction(true);
    }
    })(current, previous);

    