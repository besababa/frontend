import { AppSharedModule } from './shared.module';

describe('AppSharedModule', () => {
  let AppSharedModule: AppSharedModule;

  beforeEach(() => {
    AppSharedModule = new AppSharedModule();
  });

  it('should create an instance', () => {
    expect(AppSharedModule).toBeTruthy();
  });
});
