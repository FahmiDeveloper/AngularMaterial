import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  exports: [
    MatSliderModule,
    MatCheckboxModule,
    MatButtonModule,
    MatBadgeModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ]
})
export class MatComponentsModule { }
