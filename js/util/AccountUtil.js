"undefined"==typeof AccountUtil&&(AccountUtil={});(function(){AccountUtil.isEnableSportsBook=function(a,b){return 0<(a&b)};AccountUtil.isCashMode=a=>PaymentModeType.getInstanceOf(a).unique()==PaymentModeType.CASH.value})();

