import { NgModule } from '@angular/core';
import { TestpageComponent } from './testpage.component';
import { TestPageRoutingModule } from './testpage-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [TestpageComponent],
  imports: [
    TestPageRoutingModule,
    NzLayoutModule
  ],
  exports: [
    TestpageComponent
  ]
})
export class TestpageModule { }
