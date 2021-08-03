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
}
function proses()
{
	var x;
	x = document.getElementById("lamakreditinput").value;
	document.getElementById("lamakreditoutput").value=x;

	var hargarumah = parseFloat(document.isiform.hargarumah.value)
	if (isNaN(hargarumah))
	{
		hargarumah="";
	}      
	var hasiluangmuka = hargarumah * 0.20;
	document.isiform.uangmuka.value=+hasiluangmuka;

	var hasilsisa = hargarumah - hasiluangmuka;
	document.isiform.sisa.value=+hasilsisa;

	var hasilangsuran = hasilsisa / x;
	document.isiform.angsuran.value=+hasilangsuran;

	var hasil="";
	var sisa=hasilsisa;
	var totangsuran=hasilangsuran;
	for(i=1;i<=x;i++)
	{
		angsuran= (sisa-totangsuran) ;
		hasil=hasil+"Angsuran ke-"+i+"	Rp. "+totangsuran+" = Rp. "+angsuran+"\n";
	}
	document.isiform.ohasil.value=hasil;

}		