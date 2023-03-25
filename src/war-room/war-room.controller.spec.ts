import { Test, TestingModule } from '@nestjs/testing';
import { WarRoomController } from './war-room.controller';

describe('WarRoomController', () => {
  let controller: WarRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarRoomController],
    }).compile();

    controller = module.get<WarRoomController>(WarRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
