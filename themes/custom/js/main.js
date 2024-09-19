jQuery(document).ready(function($) {
    // Get the dropdown and form elements
    var $dropdown = $('#edit-field-conference-category-target-id');
    var $form = $dropdown.closest('form');
    
    // Create a container for the tabs
    var $tabsContainer = $('<div class="tabs-wrapper"></div>');
    
    // Loop through the options in the dropdown and create a tab for each option
    $dropdown.find('option').each(function() {
        var $option = $(this);
        var $tab = $('<a href="#" class="filter-tab" data-value="' + $option.val() + '">' + $option.text() + '</a>');
        
        // Add the tab to the container
        $tabsContainer.append($tab);
    });

    // Insert the tabs before the dropdown
    $dropdown.before($tabsContainer);
    
    // Hide the original dropdown
    $dropdown.hide();

    // Handle click events on the tabs
    $('.filter-tab').on('click', function(e) {
        e.preventDefault();

        // Remove 'active' class from all tabs
        $('.filter-tab').removeClass('active');

        // Add 'active' class to the clicked tab
        $(this).addClass('active');

        // Set the value of the hidden dropdown to match the clicked tab
        var selectedValue = $(this).data('value');
        $dropdown.val(selectedValue);

        // Submit the form 
        $form.submit();
    });

    var selectedValue = $dropdown.val();
    $('.filter-tab[data-value="' + selectedValue + '"]').addClass('active');
});
