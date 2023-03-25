import { Test, TestingModule } from '@nestjs/testing';
import { PageComponentsService } from './page-components.service';

describe('PageComponentsService', () => {
  let service: PageComponentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PageComponentsService],
    }).compile();

    service = module.get<PageComponentsService>(PageComponentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
