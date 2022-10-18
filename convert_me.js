function convert(a){
   let get_amount = document.getElementById("from-convert").value;
   let from_curr = document.getElementById("from-currency").value;
   //let target_amount = document.getElementById("to-convert").value;
   let to_curr = document.getElementById("to-currency").value;
   let aed= {'EUR':0.27674, 'USD':0.27229, 'GBP':0.24135, 'CAD':0.37489, 'AUD':0.43320, 'JYP':40.571, 'NZD':0.48132, 'SEK':3.0224, 'SAR':1.0211}
   let eur= {'AED':3.6128, 'USD':0.98519, 'GBP':0.87099, 'CAD':1.3555, 'AUD':1.5647, 'JYP':146.75, 'NZD':1.7380, 'SEK':10.922, 'SAR':3.6889}
   let gbp= {'AED':4.1385, 'USD':1.1277, 'CAD':1.5526, 'AUD':1.7942, 'JYP':168.09, 'NZD':1.9928, 'SEK':12.521, 'SAR':4.2304}
   let usd= {'AED':3.6725, 'GBP':0.88483, 'CAD':1.3738, 'AUD':1.5834, 'JYP':149.12, 'NZD':1.7562, 'SEK':11.098, 'SAR':3.7500}
   let cad= {'AED':2.6684, 'USD':0.72655, 'GBP':1.5526, 'AUD':1.1552, 'JYP':108.30, 'NZD':1.2835, 'SEK':8.0665, 'SAR':2.7247}
   let aud= {'AED':2.3100, 'USD':0.62904, 'GBP':0.55817, 'CAD':1.1552, 'JYP':93.777, 'NZD':1.1109, 'SEK':6.9833, 'SAR':2.3588}
   let jyp= {'AED':0.024638, 'USD':0.0067087, 'GBP':0.0059538, 'CAD':1.1552, 'AUD':0.010664, 'NZD':0.011850, 'SEK':0.074472, 'SAR':0.025158}
   let nzd= {'AED':2.0797, 'USD':0.56628, 'GBP':0.50224, 'CAD':0.77925, 'AUD':0.89990, 'JYP':84.432, 'SEK':6.2873, 'SAR':2.1236}
   let sek= {'AED':0.33088, 'USD':0.090089, 'GBP':0.079849, 'CAD':0.12397, 'AUD':0.14310, 'JYP':13.436, 'NZD':0.15906, 'SAR':0.33786}
   let sar= {'AED':0.97933, 'USD':0.26667, 'GBP':0.23626, 'CAD':0.36671, 'AUD':0.42340, 'JYP':39.751, 'NZD':0.47047, 'SEK':2.9573}
   
   let sum=0
   //01
   if(from_curr=='AED'){
       for (key in aed){
         if(key==to_curr){
              sum = get_amount*aed[key];
              sum=sum.toFixed(3)
              break;
           }   
       }
    }

   //02
    if(from_curr=='EUR'){
        for (key in eur){
          if(key==to_curr){
               sum = get_amount*eur[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

   //03
    if(from_curr=='USD'){
        for (key in usd){
          if(key==to_curr){
               sum = get_amount*usd[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

    //04
     if(from_curr=='CAD'){
        for (key in cad){
          if(key==to_curr){
               sum = get_amount*cad[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

   //05
    if(from_curr=='GBP'){
        for (key in gbp){
          if(key==to_curr){
               sum = get_amount*gbp[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

   //06
    if(from_curr=='AUD'){
        for (key in aud){
          if(key==to_curr){
               sum = get_amount*aud[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

    //07
    if(from_curr=='JYP'){
        for (key in jyp){
          if(key==to_curr){
               sum = get_amount*jyp[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

   //08
    if(from_curr=='NZD'){
        for (key in nzd){
          if(key==to_curr){
               sum = get_amount*nzd[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

    //09
    if(from_curr=='SEK'){
        for (key in sek){
          if(key==to_curr){
               sum = get_amount*sek[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }

    //10
    if(from_curr=='SAR'){
        for (key in sar){
          if(key==to_curr){
               sum = get_amount*sar[key];
               sum=sum.toFixed(3)
               break;
            }   
        }
    }
    document.getElementById("to-convert").value=sum;
}
