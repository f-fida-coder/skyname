"undefined"==typeof ForecastHandler&&(ForecastHandler={});
(function(){ForecastHandler.init=()=>{JsCache.get("#withCommCheckBox").attr("checked",PageConfig.enableForecastWithCommission?!0:!1);JsCache.get("#coinSave").click(function(){JsCache.get("#coinSave").hasClass("disable")||ForecastHandler.updateForecastWithComm()})};ForecastHandler.updateForecastWithComm=()=>{let a=$j("#withCommCheckBox").is(":checked")?1:0;$j.ajax({type:"POST",dataType:"JSON",url:"/member/playerService/updateForecastWithComm",data:{enableForecastWithCommission:a},success:function(){PageConfig.enableForecastWithCommission=
a}})}})();

