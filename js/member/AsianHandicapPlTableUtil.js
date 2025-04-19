var AsianHandicapPlTableUtil={};
(function(){AsianHandicapPlTableUtil.renderAsianHandicapPlTable=function(a=null){var b=MarketExposureObj.plTable;if(!$j.isEmptyObject(b)&&!$j.isEmptyObject(a)){var h=a.eventId,k=a.marketId,e=$j("#plTable");e.hide();$j.each(b,function(c,l){if(0!=c){c=DataBase.markets.getFirstSelection(h,k,c);var m=c.originalRunnerName+" win by<span></span>",g=0!=c.sortPriority%2?"home":"visit";e.find("#plTable_"+g+"_team").html(m);$j.each(l,function(d,f){d=$j("#plTable_"+g+"_"+d);d.html(f);f=0>f?"lose":"win";d.removeClass();
d.addClass(f)})}});a=e.find("#plTable_draw");b=b[0][0];a.removeClass();a.addClass(0>b?"lose":"win");a.html(b);e.show()}}})();

