function pilih()
{	
	var typerumah=document.getElementById("isiform").kategori.value;
	if (typerumah=="almanda")
	{
		document.getElementById("namarumah").innerHTML="ALMANDA";
		document.getElementById("hargarumah").innerHTML=120000000;
	} 
	else if (typerumah=="mawar")
	{
		document.getElementById("namarumah").innerHTML="MAWAR";
		document.getElementById("hargarumah").innerHTML=130000000;
	}

}
function proses()
{
	var x;
	x = document.getElementById("lamakreditinput").value;
	document.getElementById("lamakreditoutput").value=x;
}		