$(document).ready(() => {
    const id = '#multi-step-form';
    const dataIdentifier = `${location.href}multi-step-form`;
    const parsedData = JSON.parse(localStorage.getItem(dataIdentifier));
    let data = {};

    // Get Data
    function getFormData(inputs) {
        $(inputs).each((i, input) => {
            if ($(input).attr('type') === 'radio') {
                if ($(input).is(':checked')) {
                    data[$(input).attr('id')] = 'checked';
                    return;
                }
            } else if ($(input).attr('type') === 'text') {
                if ($(input).attr('id') === 'cc-number' || $(input).attr('id') === 'cvv-code') {
                    return;
                }
        
                data[$(input).attr('id')] = $(input).val();
            } else if ($(input).val() !== 'Select from options' && $(input).val()) {
                data[$(input).attr('id')] = $(input).val();
                return;
            } else if ($(input).attr('type') === 'checkbox') {
                data[$(input).attr('id')] = 'checked';
                return;
            }
        });

        return data;
    }

    // Save Data
    function saveDataToStorage(data) {
        localStorage.setItem(dataIdentifier, JSON.stringify(data));
    }

    // Set data from localeStorage to form
    function setFormData() {
        if (!parsedData) {
            return;
        }

        const parsedDataInputsNames = Object.keys(parsedData);
        const formInputs = $(id).find('input, select');

        $(parsedDataInputsNames).each((i, parsedDataInputName) => {
            $(formInputs).each((j, currentInput) => {
                if ($(currentInput).attr('type') === 'radio') {
                    if ($(currentInput).attr('id') === parsedDataInputName) {
                        $(currentInput).prop('checked', true);
                    }
                } else if ($(currentInput).attr('type') === 'checkbox') {
                    if ($(currentInput).attr('id') === parsedDataInputName) {
                        $(currentInput).prop('checked', true);
                    }
                } else if ($(currentInput).val() === 'Select from options') {
                    if ($(currentInput).attr('id') === parsedDataInputName) {
                        $(currentInput).val(parsedData[parsedDataInputName]);
                    }
                } else if ($(currentInput).attr('type') === 'text' || $(currentInput).attr('type') === 'email') {
                    if ($(currentInput).attr('id') === parsedDataInputName) {
                        $(currentInput).val(parsedData[parsedDataInputName]);
                    }
                }
            });
        });
    }

    // Validate data
    function validateDisclaimerForm(inputs) {
        for (let i = 0; i < inputs.length; i++) {
            currentInput = $(inputs).get(i);
            if ($(currentInput).attr('id') === 'concent' &&
                !$(currentInput).is(':checked')) {
                Swal.fire('You need to check the concent box to continue!');
                return;
            }

            if ($(currentInput).attr('id') === 'datepicker' && !$(currentInput).val()) {
                Swal.fire("Fill Today's Date fields!");
                return;
            }
        }

        return true;
    }

    function validateCommonForms(inputs, formId) {
        let checked = 0;
        let notChecked = 0;

        for (let i = 0; i < inputs.length; i++) {
            currentInput = $(inputs).get(i);

            if ($(currentInput).attr('type') === 'radio') {
                if ($(currentInput).is(':checked')) {
                    checked++;
                } else if (!$(currentInput).is(':checked')) {
                    notChecked++;
                }
            } else if ($(currentInput).val() === 'Select from options' ||
                !$(currentInput).val()) {
                return;
            }
        }

        if (formId == 'citizenship') {
            if (checked + 4 !== notChecked) {
                return;
            }
        } else {
            if (checked !== notChecked) {
                return;
            }
        }

        return true;
    }

    function validateCheckboxes() {
        const parent = $('.checkbox:visible');

        let checked = 0;
        for (let i = 0; i < parent.length; i++) {
            const currentParent = $(parent).get(i);
            const currentParentId = $(currentParent).attr('id');
            const currentCheckboxes = $("#" + currentParentId + " input");

            for (let j = 0; j < currentCheckboxes.length; j++) {
                const currentCheckbox = $(currentCheckboxes).get(j);
                if ($(currentCheckbox).is(':checked')) {
                    checked++;
                    break;
                }
            }

            if (checked == 0) {
                return false;
            }

        }

        if (checked !== parent.length) {
            return false;
        }

        return true;
    }

    function validateTravelHystoryForm(inputs) {
        let checked = 0;
        let notChecked = 0;

        for (let i = 0; i < inputs.length; i++) {
            const currentInput = $(inputs).get(i);

            if ($(currentInput).attr('type') === 'radio') {
                if ($(currentInput).is(':checked')) {
                    checked++;
                } else if (!$(currentInput).is(':checked')) {
                    notChecked++;
                }
            } else if ($(currentInput).attr('type') === 'checkbox') {
                if ($(currentInput).is(':checked')) {
                    checked++;
                } else if (!$(currentInput).is(':checked')) {
                    notChecked++;
                }
            }

            if (!$(currentInput).val()) {
                return;
            }
        }

        if (checked !== notChecked) {
            return;
        }

        return true;
    }

    function validateSecurityForm(inputs) {
        let checked = 0;
        let notChecked = 0;

        for (let i = 0; i < inputs.length; i++) {
            currentInput = $(inputs).get(i);

            if ($(currentInput).attr('type') === 'radio') {
                if ($(currentInput).is(':checked')) {
                    checked++;
                } else if (!$(currentInput).is(':checked')) {
                    notChecked++;
                }
            }

            if (!$(currentInput).val()) {
                return;
            }
        }

        if (checked !== notChecked) {
            return;
        }

        return true;
    }

    function validateGovtFeeForm(inputs) {
        let checked = 0;
        let notChecked = 0;

        for (let i = 0; i < inputs.length; i++) {
            const currentInput = $(inputs).get(i);

            if ($(currentInput).attr('id') === 'agreement' &&
                !$(currentInput).is(':checked')) {
                return;
            } else if ($(currentInput).attr('type') === 'radio') {
                if ($(currentInput).is(':checked')) {
                    checked++;
                } else if (!$(currentInput).is(':checked')) {
                    notChecked++;
                }
            } else if ($(currentInput).val() === 'Select from options' ||
                !$(currentInput).val()) {
                return;
            }
        }

        if (checked !== notChecked) {
            return;
        }

        return true;
    }

    function validateTextInputs(inputs) {
        for (let i = 0; i < inputs.length; i++) {
            const currentInput = $(inputs).get(i);
            if (!$(currentInput).val()) {
                return;
            }
        }

        return true;
    }

    // Next Button
    $('.next').click((e) => {
        e.preventDefault();

        const currentForm = $('form.current-form');
        const currentFormId = $(currentForm).attr('id');
        const currentFormInputs = $('form.current-form :input[required]:visible');

        if (e.target.id === 'submit') {
            if (!validateGovtFeeForm(currentFormInputs)) {
                Swal.fire('Fill the required fields!');
                // return;
            }

            const data = getFormData(currentFormInputs);
            saveDataToStorage(data);    

            Swal.fire('Good Job!');
            return;
        }

        const nextForm = $(currentForm).next().get(0);

        if (currentFormId === 'membership' ||
            currentFormId === 'personal-details' ||
            currentFormId === 'citizenship' ||
            currentFormId === 'driver-details' ||
            currentFormId === 'current-address' ||
            currentFormId === 'current-employment') {
            if (!validateCommonForms(currentFormInputs, currentFormId)) {
                Swal.fire('Fill the required fields!');
                return;
            }
        } else if (currentFormId === 'disclaimer') {
            if (!validateDisclaimerForm(currentFormInputs)) {
                return;
            }
        } else if (currentFormId === 'travel-hystory') {
            if (!validateTravelHystoryForm(currentFormInputs)) {
                Swal.fire('Fill the required fields!');
                return;
            }

            if (!validateCheckboxes()) {
                Swal.fire('You have to choose at least one checkbox!');
                return;
            }
        } else if (currentFormId === 'security') {
            if (!validateSecurityForm(currentFormInputs)) {
                Swal.fire('Fill the required fields!');
                return;
            }
        } else {
            if (!validateTextInputs(currentFormInputs)) {
                Swal.fire('Fill the required fields!');
                return;
            }
        }

        const data = getFormData(currentFormInputs);
        saveDataToStorage(data);

        $(currentForm).removeClass('current-form');
        $(currentForm).addClass('hidden');
        $(nextForm).addClass('current-form');
        $(nextForm).removeClass('hidden');
    });

    // Previous Button
    $('.previous').click((e) => {
        e.preventDefault();
        const currentForm = $(e.target).closest('form').get(0);
        const previousForm = $(currentForm).prev().get(0);

        $(currentForm).addClass('hidden');
        $(currentForm).removeClass('current-form');
        $(previousForm).removeClass('hidden');
        $(previousForm).addClass('current-form');
    });

    document.onload = setFormData();
});