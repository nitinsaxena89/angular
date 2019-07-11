import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconverter'
})
export class CurrencyconverterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let reqCurrency = "INR"
    if(args[0]!=null){
      reqCurrency = args[0];
    }
    return (value*68.34)+ reqCurrency;
  }

}
