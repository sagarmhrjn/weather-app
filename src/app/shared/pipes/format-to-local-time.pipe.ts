import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment-timezone';

@Pipe({
  name: 'formatToLocalTime',
})
export class FormatToLocalTimePipe implements PipeTransform {
  transform(value: number, zone: string, format: string): unknown {
    const datetime = moment.unix(value).utc().add(zone, 's').format(format);
    return datetime
  }
}
