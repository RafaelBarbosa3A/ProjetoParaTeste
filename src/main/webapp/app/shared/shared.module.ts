import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjetoParaTesteSharedLibsModule, ProjetoParaTesteSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ProjetoParaTesteSharedLibsModule, ProjetoParaTesteSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ProjetoParaTesteSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjetoParaTesteSharedModule {
  static forRoot() {
    return {
      ngModule: ProjetoParaTesteSharedModule
    };
  }
}
