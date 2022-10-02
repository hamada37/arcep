
var models = window['powerbi-client'].models;
var pbipages = [];

var embedConfig = {
    type: 'report',
    tokenType: models.TokenType.Aad,
    permissions: models.Permissions.All,
    settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false,
        layoutType: getWidth(models),
        localeSettings: {
            language: "fr"
        }
    }
};

var report;

function get_token() {
    var location = window.location.href.split('/tableaux-de-bord-arcep/');
    var query = jQuery.ajax({
        type: 'get',
        url: location[0] + '/tableaux-de-bord-arcep/accesstoken',
        dataType: 'json',
        contentType: 'application/json',
        async: false
    }); 

    return query; 
}

/* 
*GET USER REPORTS 
*/
function getReports(token) {

    return jQuery.ajax({
        type: 'get',
        url: 'https://api.powerbi.com/v1.0/myorg/reports',
        dataType: 'json',
        contentType: 'application/json',
        async: false,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
}

/* By Indicator */

function setInternetDashboard() {
    embedConfig.embedUrl = "https://app.powerbi.com/reportEmbed?reportId=4c73a6fa-9632-4820-8494-ae4d59214285";
    embedConfig.id = "4c73a6fa-9632-4820-8494-ae4d59214285";
}

function setMobileDashboard() {
    embedConfig.embedUrl = "https://app.powerbi.com/reportEmbed?reportId=4368e0a0-81d8-498d-80ea-fc2c23b2e161";
    embedConfig.id = "4368e0a0-81d8-498d-80ea-fc2c23b2e161";
}


function setQualityDashboard() {
    embedConfig.embedUrl = "https://app.powerbi.com/reportEmbed?reportId=119fed40-6ed7-407c-aec2-5067bae3fd16";
    embedConfig.id = "119fed40-6ed7-407c-aec2-5067bae3fd16";
}

function setDemographyDashboard() {
    embedConfig.embedUrl = "https://app.powerbi.com/reportEmbed?reportId=ffadc13b-87ba-4d5e-b578-cce8310342df";
    embedConfig.id = "ffadc13b-87ba-4d5e-b578-cce8310342df";
}

function setFixeDashboard() {
    embedConfig.embedUrl = "https://app.powerbi.com/reportEmbed?reportId=ea7b28f8-1cee-443f-95e9-e5e3dbba9497";
    embedConfig.id = "ea7b28f8-1cee-443f-95e9-e5e3dbba9497";
}

function setPosteDashboard() {
    jQuery('#dashboard-content').append('<div class="soon-available">Information bientôt disponible.</div>');
}

function getWidth(models) {
    if (screen.availWidth <= 650) {
        return models.LayoutType.MobilePortrait;
    } else {
        return null;
        // return models.LayoutType.MobileLandscape;
    }
}

function addScroll() {
    jQuery('.visualContainerHost').css("color", "blue");
}

function removeIframeBorders() {
    var x = document.querySelectorAll("iframe");
    for (i = 0; i < x.length; i++) {
        x[i].style.setProperty("frameBorder", "0");
    }
}

function loadPages(){
    var htmlstring = '';
    report.getPages().then(function(pages) {
        
        pbipages = pages;
        for(var i = 0; i < pages.length; i++){
            var classes = 'page';
            classes += (pages[i].isActive) ? " active" : "";

            htmlstring += 
                '<a href="Javascript:void(0)" id="' + pages[i].name + '"  class="' + classes + '" data-trigger="hover"'
                    + 'data-toggle="tooltip" data-placement="top" title="' + pages[i].displayName + '">' 
                     + pages[i].displayName + 
                '</a>';
        }

        jQuery('#page-container').append(htmlstring);


        jQuery('#page-container').on('click', 'a', function(event){
            jQuery('#page-container a').removeClass('active');
            
            var target = jQuery(event.target);

            target.addClass('active');

            var page = report.page(target.attr('id'));
            page.setActive();
        });
        jQuery('[data-toggle="tooltip"]').tooltip()
    });
}

function embed(){
    if(embedConfig.embedUrl){
        report = powerbi.embed(jQuery('#dashboard-content')[0], embedConfig);
        report.off("loaded");
        report.on('loaded', function () {
            report.render();
            loadPages();
        });
    }
}

jQuery(document).ready(function () {
    
    var url = window.location.pathname;
    // GET TOKEN
    var tokenInfo = JSON.parse(get_token().responseJSON);

    //LOAD REPORT
    embedConfig.accessToken = tokenInfo.access_token;

    if(url.indexOf("/tableaux-de-bord-arcep/internet") > -1)
        setInternetDashboard();
    else if(url.indexOf("/tableaux-de-bord-arcep/telephone_mobile") > -1)
        setMobileDashboard();        
    else if(url.indexOf("/tableaux-de-bord-arcep/telephone_fixe") > -1)
        setFixeDashboard();        
    else if(url.indexOf("/tableaux-de-bord-arcep/qualite_de_services") > -1)
        setQualityDashboard();
    else if(url.indexOf("/tableaux-de-bord-arcep/demography") > -1)
        setDemographyDashboard();
    else if(url.indexOf("/tableaux-de-bord-arcep/poste") > -1)
        setPosteDashboard();
    else
        setInternetDashboard();
    

    embed();
    
    window.addEventListener("orientationchange", function () {
       location.reload();
    }, false);
});
