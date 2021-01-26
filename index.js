$(document).ready(function () {
    $('#datepicker').datepicker({
        "setDate": new Date(),
        // "autoclose": true
    });

    // Concent field message
    $('#concent').change(() => {
        if ($('#concent').is(':checked')) {
            $('.warning').remove();
            $('#concent').parent().remove('<div class="text-danger warning">This is a required field.</div>');
        } else {
            $('#concent').parent().append('<div class="text-danger warning">This is a required field.</div>');
        }
    });

    // Required field message
    $('input[type="text"], textarea, select').filter('[required]').focusout((e) => {
        if (!e.target.value || e.target.value === 'Select from options') {
            $('.warning').remove();
            $(e.target).css("border-color", "red");
            $(e.target).parent().append('<div class="text-danger warning">This is a required field.</div>');
            return;
        }

        // $(e.target).css("border-color", "green");
        // $('.warning').remove();
    });

    $('input[type="text"], textarea, select').filter('[required]').change((e) => {
        if (e.target.value || e.target.value !== 'Select from options') {
            $('.warning').remove();
            $(e.target).css("border", "2px solid #0ab318");
            $(e.target).parent().remove('<div class="text-danger warning">This is a required field.</div>');
            return;
        }

        // $(e.target).css("border-color", "green");
        // $('.warning').remove();
    });

    // Show / Hide elements
    // YOUR MEMBERSHIP
    $('#renewal-applicant').click(() => $('#hidden-membership-form').slideDown('slow'));
    $('#first-time-applicant').click(() => $('#hidden-membership-form').slideUp('slow'));

    $('#name-change-yes').click(() => $('#hidden-namechange-form').slideDown('slow'));
    $('#name-change-no').click(() => $('#hidden-namechange-form').slideUp('slow'));

    $('#other-names-yes').click(() => $('#hidden-secondname-form').slideDown('slow'));
    $('#other-names-no').click(() => $('#hidden-secondname-form').slideUp('slow'));

    // PERSONAL DETAILS
    $('#feets-inches').click(() => {
        $('#hidden-height-feets-form').slideDown('slow');
        $('#hidden-height-meters-form').slideUp('slow');
    });

    $('#meters-centimeters').click(() => {
        $('#hidden-height-feets-form').slideUp('slow');
        $('#hidden-height-meters-form').slideDown('slow');
    });

    // CITIZENSHIP
    $('#us-citizen-yes').click(() => $('#hidden-us-citizenship-form').slideUp('slow'));
    $('#us-citizen-no').click(() => $('#hidden-us-citizenship-form').slideDown('slow'));

    $('#us-permanent-citizen-yes').click(() => $('#hidden-canada-citizenship-form').slideUp('slow'));
    $('#us-permanent-citizen-no').click(() => $('#hidden-canada-citizenship-form').slideDown('slow'));

    $('#canadian-citizen-yes').click(() => $('#hidden-canada-resident-form').slideUp('slow'));
    $('#canadian-citizen-no').click(() => $('#hidden-canada-resident-form').slideDown('slow'));

    $('#dual-citizenship-no').click(() => $('#hidden-dual-citizenship-form').slideUp('slow'));
    $('#dual-citizenship-yes').click(() => $('#hidden-dual-citizenship-form').slideDown('slow'));

    $('#valid-pasport').click(() => $('#hidden-eligibility-form').slideDown('slow'));
    $('#citizenship-certificate').click(() => $('#hidden-eligibility-form').slideUp('slow'));
    $('#naturalization-certificate').click(() => $('#hidden-eligibility-form').slideUp('slow'));
    $('#indian-status').click(() => $('#hidden-eligibility-form').slideUp('slow'));
    $('#birth-certificate').click(() => $('#hidden-eligibility-form').slideUp('slow'));
    $('#canadian-citizen').click(() => $('#hidden-eligibility-form').slideUp('slow'));

    $('#five-years').click(() => $('#hidden-live-hystory').slideUp('slow'));
    $('#under-five-years').click(() => $('#hidden-live-hystory').slideDown('slow'));

    $('#pr-card-yes').click(() => $('#hidden-pr-card-warning').slideUp('slow'));
    $('#pr-card-no').click(() => $('#hidden-pr-card-warning').slideDown('slow'));


    // DRIVER DETAILS
    $('#commercial-dl-yes').click(() => $('#hidden-comercial-dr-license-warning').slideUp('slow'));
    $('#commercial-dl-no').click(() => $('#hidden-comercial-dr-license-warning').slideDown('slow'));

    // CURRENT ADDRESS
    $('#mailing-address-yes').click(() => $('#hidden-mailing-address-form').slideUp('slow'));
    $('#not-mailing-address').click(() => $('#hidden-mailing-address-form').slideDown('slow'));

    // ADDRESS HYSTORY
    $('#five-year-address-hystory').click(() => $('#hidden-third-address-form').slideUp('slow'));
    $('#five-year-address-hystory-no').click(() => $('#hidden-third-address-form').slideDown('slow'));

    $('#five-year-address-hystory-2').click(() => $('#hidden-fourth-address-form').slideUp('slow'));
    $('#five-year-address-hystory-2-no').click(() => $('#hidden-fourth-address-form').slideDown('slow'));

    // CURRENT EMPLOYMENT
    $('#five-year-work-status-no').click(() => {
        $('#five-year-missing-works-status').addClass('hidden').slideUp('slow');
        $('#hidden-warning-work-status').slideDown('slow');
        $('#hidden-warning-missing-work-status').slideUp('slow');
    });

    $('#five-year-work-status').click(() => {
        $('#five-year-missing-works-status').removeClass('hidden').slideDown('slow');
        $('#hidden-warning-work-status').slideUp('slow');
    });

    $('#employee-status').click((e) => {
        if (e.target.value === 'currrently-employed-including-part-time-work' ||
            e.target.value === 'currrently-self-employed') {
            $('#hidden-employment-form').slideDown('slow');
        } else {
            $('#hidden-employment-form').slideUp('slow');

        }
    });

    $('#five-year-missing-work').click(() => $('#hidden-warning-missing-work-status').slideUp('slow'));
    $('#five-year-missing-work-no').click(() => $('#hidden-warning-missing-work-status').slideDown('slow'));

    // TRAVEL HISTORY
    $('#travel-abroad').click(() => $('#hidden-travel-abroad-form').slideDown('slow'));
    $('#travel-abroad-no').click(() => $('#hidden-travel-abroad-form').slideUp('slow'));

    $('#caribbean-visit').click(() => $('#hidden-carribean-form').slideDown('slow'));
    $('#caribbean-visit-no').click(() => $('#hidden-carribean-form').slideUp('slow'));

    $('#eu-visit').click(() => $('#hidden-eu-form').slideDown('slow'));
    $('#eu-visit-no').click(() => $('#hidden-eu-form').slideUp('slow'));

    $('#middle-east-visit').click(() => $('#hidden-middle-east-form').slideDown('slow'));
    $('#middle-east-visit-no').click(() => $('#hidden-middle-east-form').slideUp('slow'));

    $('#south-america-visit').click(() => $('#hidden-south-america-form').slideDown('slow'));
    $('#south-america-visit-no').click(() => $('#hidden-south-america-form').slideUp('slow'));

    $('#australia-visit').click(() => $('#hidden-australia-form').slideDown('slow'));
    $('#australia-visit-no').click(() => $('#hidden-australia-form').slideUp('slow'));

    $('#asia-visit').click(() => $('#hidden-asia-form').slideDown('slow'));
    $('#asia-visit-no').click(() => $('#hidden-asia-form').slideUp('slow'));

    $('#africa-visit').click(() => $('#hidden-africa-form').slideDown('slow'));
    $('#africa-visit-no').click(() => $('#hidden-africa-form').slideUp('slow'));

    $('#other-visit').click(() => $('#hidden-other-form').slideDown('slow'));
    $('#other-visit-no').click(() => $('#hidden-other-form').slideUp('slow'));

    // SECURITY QUESTION
    $('#offense-in-any-country').click(() => $('#hidden-offense-textarea').slideDown('slow'));
    $('#offense-in-any-country-no').click(() => $('#hidden-offense-textarea').slideUp('slow'));

    $('#waiver-of-inadmissibility').click(() => $('#hidden-waiver-textarea').slideDown('slow'));
    $('#waiver-of-inadmissibility-no').click(() => $('#hidden-waiver-textarea').slideUp('slow'));

    $('#violation-of-customs-laws').click(() => $('#hidden-violation-of-customs-laws-textarea').slideDown('slow'));
    $('#violation-of-customs-laws-no').click(() => $('#hidden-violation-of-customs-laws-textarea').slideUp('slow'));

    $('#violation-of-immigration-laws').click(() => $('#hidden-violation-of-immigration-laws-textarea').slideDown('slow'));
    $('#violation-of-immigration-laws-no').click(() => $('#hidden-violation-of-immigration-laws-textarea').slideUp('slow'));
});
