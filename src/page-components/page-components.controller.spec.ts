import { Test, TestingModule } from '@nestjs/testing';
import { PageComponentsController } from './page-components.controller';

describe('PageComponentsController', () => {
  let controller: PageComponentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PageComponentsController],
    }).compile();

    controller = module.get<PageComponentsController>(PageComponentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
