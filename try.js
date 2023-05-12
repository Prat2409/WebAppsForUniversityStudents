document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var id = document.getElementById('id').value;
    var classCode = document.getElementById('classCode').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // Perform necessary actions with the captured data, such as storing in the database
    
    // Reset the form
    document.getElementById('attendanceForm').reset();
  });
  