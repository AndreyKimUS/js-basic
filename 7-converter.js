
function converter (sum, currency_1, currency_2){
    const USDtoRUB = 80;
    const RUBtoUSD = 1 / USDtoRUB; // или можно задать в строгих числах
    const USDtoEURO = 0.9;
    const EUROtoUSD = 1 / USDtoEURO;
    const EUROtoRUB = 90;
    const RUBtoEURO = 1 / EUROtoRUB;
   
    let curs = null;
    if (currency_1 == "USD"){
        switch (currency_2){
            case "RUB":
                curs = USDtoRUB;
                break;
            case "EURO":
                curs = USDtoEURO;
                break;
        } 
    } else if (currency_1 == "EURO"){
            switch (currency_2){
                case "USD":
                    curs = EUROtoUSD;
                    break;
                case "RUB":
                    curs = EUROtoRUB;
                    break;
            } 
        } else if (currency_1 == "RUB"){
                switch (currency_2){
                    case "USD":
                        curs = RUBtoUSD;
                        break;
                    case "EURO":
                        curs = RUBtoEURO;
                        break;
                } 
            } else {
                    curs = null;
                }

    return sum * curs;
            }
    
console.log(converter(1000, "RUB", "EURO"));

