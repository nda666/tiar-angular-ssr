import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { IconsProviderModule } from '../../icons-provider.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    IconsProviderModule
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
