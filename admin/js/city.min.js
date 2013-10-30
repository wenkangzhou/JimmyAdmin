/*!
 Ajax 三级省市联动
 http://code.ciaoca.cn/
 日期：2012-7-18

 settings 参数说明
 -----
 url:省市数据josn文件路径
 prov:默认省份
 city:默认城市
 dist:默认地区（县）
 nodata:无数据状态
 required:必选项
 ------------------------------ */
!function($){$.fn.citySelect=function(settings){if(!(this.length<1)){settings=$.extend({url:"city_json.min.js",prov:null,city:null,dist:null,nodata:null,required:!0},settings);var box_obj=this,prov_obj=box_obj.find(".prov"),city_obj=box_obj.find(".city"),dist_obj=box_obj.find(".dist");settings.prov,settings.city,settings.dist;var select_prehtml=settings.required?"":"<option value=''>请选择</option>",cityStart=function(){var prov_id=prov_obj.get(0).selectedIndex;return settings.required||prov_id--,city_obj.empty().attr("disabled",!0),dist_obj.empty().attr("disabled",!0),0>prov_id||"undefined"==typeof city_json.citylist[prov_id].c?("none"==settings.nodata?(city_obj.css("display","none"),dist_obj.css("display","none")):"hidden"==settings.nodata&&(city_obj.css("visibility","hidden"),dist_obj.css("visibility","hidden")),void 0):(temp_html=select_prehtml,$.each(city_json.citylist[prov_id].c,function(i,city){temp_html+="<option value='"+city.n+"'>"+city.n+"</option>"}),city_obj.html(temp_html).attr("disabled",!1).css({display:"",visibility:""}),distStart(),void 0)},distStart=function(){var prov_id=prov_obj.get(0).selectedIndex,city_id=city_obj.get(0).selectedIndex;return settings.required||(prov_id--,city_id--),dist_obj.empty().attr("disabled",!0),0>prov_id||0>city_id||"undefined"==typeof city_json.citylist[prov_id].c[city_id].a?("none"==settings.nodata?dist_obj.css("display","none"):"hidden"==settings.nodata&&dist_obj.css("visibility","hidden"),void 0):(temp_html=select_prehtml,$.each(city_json.citylist[prov_id].c[city_id].a,function(i,dist){temp_html+="<option value='"+dist.s+"'>"+dist.s+"</option>"}),dist_obj.html(temp_html).attr("disabled",!1).css({display:"",visibility:""}),void 0)},init=function(){temp_html=select_prehtml,$.each(city_json.citylist,function(i,prov){temp_html+="<option value='"+prov.p+"'>"+prov.p+"</option>"}),prov_obj.html(temp_html),setTimeout(function(){null!=settings.prov&&(prov_obj.val(settings.prov),cityStart(),setTimeout(function(){null!=settings.city&&(city_obj.val(settings.city),distStart(),setTimeout(function(){null!=settings.dist&&dist_obj.val(settings.dist)},1))},1))},1),prov_obj.bind("change",function(){cityStart()}),city_obj.bind("change",function(){distStart()})};init()}}}(jQuery);