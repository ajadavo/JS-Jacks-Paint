function configureListeners() {
    let images = // select img elements  


     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners      
    } 
}

function addOpacity(event) {
    // add appropriate CSS class
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
     //remove appropriate CSS class

    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 

    event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {


        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price  
            let Price= '$14.99'
            let colorName='limegreen'
                 getPrice(colorName,price) 
                 
    }    
    
            break;           
            
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price 
            let Price= '$11.14'
            let colorName='medium-brown'
                 getPrice(colorName,price) 
          
            break;            
        
        case 'pn3':
            // set variables for price and color name and invoke a function to update the price
            let Price= '$22.99'
            let colorname='Royal Blue'
                 getPrice(colorName,price) 
                 
            break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            let Price= '13.42'
            let colorname='Solid Red'
                 getPrice(colorName,price) 
                 
            break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            let Price= '21.98'
            let colorname='Solid White'
                 getPrice(colorName,price) 
                 
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            let Price= '$4.99'
            let colorname='Solid Black'
                 getPrice(colorName,price) 
                 
            break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            let Price= '$8.22'
            let colorname='Solid Cyan'
                 getPrice(colorName,price) 
                 
            break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            let Price= '$11.99'
            let colorname='Solid Purple'
                 getPrice(colorName,price) 
                 
            break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            let Price= '$14.99'
            let colorname='Solid Yellow'
                 getPrice(colorName,price) 
                 
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = // select element with corresponding id
        // display price
        
        let color = // select element with corresponding id
        //display color name
    }
    
}
