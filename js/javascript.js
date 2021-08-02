function pilih()
{	
	
	var typerumah=document.getElementById("isiform").kategori.value;
	if (typerumah=="almanda")
	{
		document.getElementById("namarumah").innerHTML="ALMANDA";
		document.isiform.hargarumah.value=120000000;
	} 
	else if (typerumah=="mawar")
	{
		document.getElementById("namarumah").innerHTML="MAWAR";
		document.isiform.hargarumah.value=130000000;
	}
	var hargarumah = parseFloat(document.isiform.hargarumah.value)
	if (isNaN(hargarumah))
	{
		hargarumah="";
	}      
	var hasiluangmuka = hargarumah * 0.20;
	document.isiform.uangmuka.value=+hasiluangmuka;

}
function proses()
{
	var x;
	x = document.getElementById("lamakreditinput").value;
	document.getElementById("lamakreditoutput").value=x;
}		