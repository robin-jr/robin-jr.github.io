function addRow(event) {
	event.preventDefault();

	var name = document.getElementById("name");
	var roll = document.getElementById("rollno");
	var mail_id = document.getElementById("mail-id");

	var table = document.getElementById("students");
	var row = table.insertRow(1);
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	var cell4 = row.insertCell(4);
	cell0.innerHTML = "<td></td>";
	cell1.innerHTML = name.value;
	cell2.innerHTML = roll.value;
	cell3.innerHTML = mail_id.value;
	cell4.innerHTML = "<a onclick=delRow(this)>&#128465;</a>";

	name.value = roll.value = mail_id.value = null;
}
function delRow(x) {
	r = x.parentNode.parentNode.rowIndex;
	document.getElementById("students").deleteRow(r);
}
