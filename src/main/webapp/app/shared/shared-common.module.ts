import { NgModule } from '@angular/core';

import { ProjetoParaTesteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ProjetoParaTesteSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ProjetoParaTesteSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ProjetoParaTesteSharedCommonModule {}
