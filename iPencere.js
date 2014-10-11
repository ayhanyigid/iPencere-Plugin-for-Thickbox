/*
 * Created by Ayhan YIGID <ayigid@hotmail.com>
 * iPencere - JQuery Thickbox Plugin.
 * Copyright (c) 2014 Ayhan YIGID
 * Must be download Thickbox 3.1 or higher
 */

jQuery.fn.iPencere = function(Params)
{
    // Default Settings
    var Settings = {
        Height: 54,
        Width: 150,
        Init: function(){},
        TextHtml: '',
        Loading: 'Loading.. Please wait',
        Close: false
    };

    var Status = false;

    var Show = function(){
        if (Settings.TextHtml == ''){ Settings.TextHtml = Settings.Loading; }
            $("body").append("<div id='TB_window' style='width: "+Settings.Width+"px !important;height: "+Settings.Height+"px !important;'><div style='padding:10px; text-align: center;'>"+Settings.TextHtml+"</div></div>");
            tb_show("", "#TB_inline?modal=true&height="+Settings.Height+"&width="+Settings.Width+"&inlineId=divContinue", "");
            $("#TB_closeAjaxWindow").remove();

            if (Status == false){ Settings.Init(); Status = true; }
    };

    var Hide = function(){ tb_remove(); };

    $.extend(Settings, Params);
    if (Settings.Close == true) { Hide(); } else { Show(); }

};
