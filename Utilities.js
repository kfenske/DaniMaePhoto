function photoSwap(filename)
{
	var newPhoto = new Image();
	newPhoto.src = filename;
	var photo = $('#homePhoto');
	photo.attr('src', newPhoto.src);
	photo.attr('width', '700px');
}

function updateQueryStringParameter(uri, key, value) {
	var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
	separator = uri.indexOf('?') !== -1 ? "&" : "?";
	if (uri.match(re)) {
		return uri.replace(re, '$1' + key + "=" + value + '$2');
	}
	else {
		return uri + separator + key + "=" + value;
	}
}

function btnTransaction(photo)
{
	var parts = document.URL.split(photo+'=');
	var newTotal = 0;
	if (parts.length>1){
		newTotal = parts[1]++;
	}
	else {
		newTotal = 1;
	}
	window.location.href = updateQueryStringParameter(document.URL, photo, newTotal);
}

var timeout = 500;
var closetimer = 0;
var ddmenuitem = 0;

function mopen(id)
{
	mcancelclosetime();
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';
}

function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

document.onclick = mclose;