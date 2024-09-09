$(document).ready(function() {
   
    var url = 'https://restcountries.com/v3.1/all';
  
    $.ajax({
        url: url,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            var $dropdown = $('#countryDropdown');
            $dropdown.empty();
            $dropdown.append('<option value="">Select a country</option>');

            $.each(data, function(index, country) {
                var countryName = country.name.common;
                var countryCode = country.cca2; 
                $dropdown.append('<option value="' + countryCode + '">' + countryName + '</option>');
            });
        },
        error: function() {
            console.error('Failed to fetch country data.');
        }
    });
});
