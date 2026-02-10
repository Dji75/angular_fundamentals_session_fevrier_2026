import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, count: number = 10): string {
    return value?.substring(0, count) ?? '';
  }
}
