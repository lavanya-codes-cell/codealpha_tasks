function valid()
{
	//name
	a=document.getElementById("name")
	e1=document.getElementById("exp1")
	ex1=/^[A-Za-z]{3,20}$/
if(a.value=="")
{
	alert("Name is Required");
	a.focus()
	a.style.outlineColor="red"
	a.style.border="none"
	return false;
}
else if(ex1.test(a.value)==false)
{
	e1.innerText="invalid name";
	return false;
}
else{
	e1.innerText="";
}

//e-mail
b=document.getElementById("e-mail")
if(b.value=="")
{
	alert("E-mail is Required");
	b.focus()
	b.style.outlineColor="red"
	b.style.border="none"
	return false;
}
else{
	b.innerText="";
}

//mobile no
c=document.getElementById("number")
e3=document.getElementById("exp3")
ex3=/^[6-9]{1}[0-9]{9}$/
if(c.value=="")
{
	alert("Mobile Number is Required");
	c.focus()
	c.style.outlineColor="red"
	c.style.border="none"
	return false;
}
else if(ex3.test(c.value)==false)
{
	e3.innerText="Invalid Mobile Number";
	return false;
}
else{
	e3.innerText="";
}

//email-sub
d=document.getElementById("e-sub")
if(d.value=="")
	{
	alert("Email-Subject is Required");
	d.focus()
	d.style.outlineColor="red"
	d.style.border="none"
	return false;
}
else{
	d.innerText="";
}

//Submit
{
	alert("Your form has been Submitted")
}
}
