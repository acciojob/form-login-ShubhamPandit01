function getFormvalue(event)
    //Write your code here
	event.preventDefault();
	var fname = document.forms["form1"]["fname"].value.trim()
	var lname = document.forms["form1"]['lname'].value.trim()

	if(fname === '' || lname === ''){
		alert("Both First Name and Last Name must be filled out!")
		return false
	}

	alert(fname + " " + lname)
	return false
}
