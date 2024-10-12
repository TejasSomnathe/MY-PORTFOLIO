
        document.getElementById('openFileButton').addEventListener('click', function() {
            // Path to the file relative to your site
            const filePath = 'Tejas somnathe.docx'; // Update with your file path
            window.open(filePath, '_blank'); // Opens the file in a new tab
        });

        document.getElementById('contactButton').addEventListener('click', function() {
            // Replace '1234567890' with your actual phone number
            const phoneNumber = '9673360709'; 
            window.location.href = `tel:${phoneNumber}`;
        });
  