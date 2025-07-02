import { Test, TestingModule } from '@nestjs/testing';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

describe('MessageController', () => {
  let controller: MessageController;
  let messageService: DeepMockProxy<MessageService>;

  beforeEach(async () => {
    messageService = mockDeep<MessageService>();

    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageController],
      providers: [
        {
          provide: MessageService,
          useValue: messageService,
        },
      ],
    }).compile();

    controller = module.get<MessageController>(MessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
