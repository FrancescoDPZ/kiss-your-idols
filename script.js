


/*-----------------------------------------

PAGE ANIMATION AND INTERACTION

------------------------------------------------------*/





var myFunction1 = function () {
    var img = document.querySelector('img');
    var img_src = img.src;
    var img_name = img_src.substr(img_src.lastIndexOf('/') + 1);
    var newSrc = '';
    if (img_name === 'trump.jpg') {
        newSrc = "reactions/trump-sad.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();

    } else if (img_name === 'obama.jpg') {
        var newSrc = "reactions/obama-sad.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'jennifer_aniston.jpg') {
        var newSrc = "reactions/aniston-punch.gif";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'bill_murray.jpg') {
        var newSrc = "reactions/bill_murray-punch.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'emma_stone.jpg') {
        var newSrc = "reactions/emma-punch.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'oprah.jpg') {
        var newSrc = "reactions/oprah-punch.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'drake.jpg') {
        var newSrc = "reactions/drake-punch.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'jon_snow.jpg') {
        var newSrc = "reactions/jon_snow-punch.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'britney.jpg') {
        var newSrc = "reactions/britney-punch.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    
    } else if (img_name === 'snoopy.png') {
        var newSrc = "reactions/snoopy-punch.jpg";
            jQuery('.buttons-box').hide();      
            jQuery('#next').show();
    }
    img.src = newSrc;
};






var myFunction2 = function () {
    var img = document.querySelector('img');
    var img_src = img.src;
    var img_name = img_src.substr(img_src.lastIndexOf('/') + 1);
    var newSrc = '';
    if (img_name === 'trump.jpg') {
        newSrc = "reactions/trump-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();

    } else if (img_name === 'obama.jpg') {
        var newSrc = "reactions/obama-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();

    } else if (img_name === 'jennifer_aniston.jpg') {
        var newSrc = "reactions/aniston-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'bill_murray.jpg') {
        var newSrc = "reactions/bill_murray-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'emma_stone.jpg') {
        var newSrc = "reactions/emma-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'oprah.jpg') {
        var newSrc = "reactions/oprah-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'drake.jpg') {
        var newSrc = "reactions/drake-laugh.png";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'jon_snow.jpg') {
        var newSrc = "reactions/jon_snow-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'britney.jpg') {
        var newSrc = "reactions/britney-laugh.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'snoopy.png') {
        var newSrc = "reactions/snoopy-laugh.gif";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    }
    img.src = newSrc;
};






var myFunction3 = function () {
    var img = document.querySelector('img');
    var img_src = img.src;
    var img_name = img_src.substr(img_src.lastIndexOf('/') + 1);
    var newSrc = '';
    if (img_name === 'trump.jpg') {
        newSrc = "reactions/trump-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();

    } else if (img_name === 'obama.jpg') {
        var newSrc = "reactions/obama-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();

    } else if (img_name === 'jennifer_aniston.jpg') {
        var newSrc = "reactions/aniston-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'bill_murray.jpg') {
        var newSrc = "reactions/bill_murray-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'emma_stone.jpg') {
        var newSrc = "reactions/emma-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'oprah.jpg') {
        var newSrc = "reactions/oprah-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'drake.jpg') {
        var newSrc = "reactions/drake-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'jon_snow.jpg') {
        var newSrc = "reactions/jon_snow-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'britney.jpg') {
        var newSrc = "reactions/britney-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    
    } else if (img_name === 'snoopy.png') {
        var newSrc = "reactions/snoopy-kiss.jpg";
        jQuery('.buttons-box').hide();      
        jQuery('#next').show();
    }
    img.src = newSrc;
};



function refreshPage(){
    window.location.reload();
} 


/*-----------------------------------------------------


-------------------------------------------------------------------------------*/
