window.onload = function() {
	var Json = [{
		"id": "张三",
		"password": "123456"
	}]
	var ipt = document.getElementsByTagName("input");
	var btn = document.getElementById("button");
	var dnner = document.getElementsByClassName("dnner")[0];
	var arry = new Array();
	var bArry = new Array();

	btn.onclick = function() {
		if(ipt[0].value === Json[0].id) {
			alert("用户已存在");
		}
		for(var i = 0; i < ipt.length - 6; i++) {
			if(ipt[i].value != "") {
				arry[i] = ipt[i].value;
			} else {
				alert("必须填写" + ipt[i].placeholder)
			}
		}
		for(var j = 3; j < ipt.length - 1; j++) {
			if(ipt[j].value != "") {
				bArry.push(ipt[j].value);
			}
		}

		if(dnner.innerText.toLowerCase() === ipt[2].value.toLowerCase()) {
			alert("注册成功");
			btn.href = "landing.html";
		} else {
			alert("验证错误");
		}
	}
	
}