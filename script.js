function getFormvalue() {https://www.svgrepo.com/show/345221/three-dots.svg
    //Write your code here
	let fname = document.forms["form1"]["fname"].value.trim()
	let lname = document.forms["form1"]['lname'].value.trim()

	if(fname === '' || lname === ''){
		alert("Both First Name and Last Name must be filled out!")
		return false
	}

	alert(fname + " " + lname)
	return false
}
