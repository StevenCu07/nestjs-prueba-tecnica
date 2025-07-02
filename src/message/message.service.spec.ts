import { Test, TestingModule } from '@nestjs/testing';
import { MessageService } from './message.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { CreateMessageDto } from './dto/create-message.dto';

describe('MessageService', () => {
  let service: MessageService;
  let prisma: DeepMockProxy<PrismaService>;

  beforeEach(async () => {
    prisma = mockDeep<PrismaService>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageService, { provide: PrismaService, useValue: prisma }],
    }).compile();

    service = module.get<MessageService>(MessageService);
  });

  afterEach(() => jest.clearAllMocks());

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('crea un mensaje para un usuario existente', async () => {
    prisma.user.findUnique.mockResolvedValue({ id: 1 } as any); // usuario existe

    const dto: CreateMessageDto = { content: 'Hola', userId: 1 };
    prisma.message.create.mockResolvedValue({
      id: 1,
      content: dto.content,
      createdAt: new Date(),
      userId: dto.userId,
    });

    const result = await service.create(dto);

    expect(result).toHaveProperty('id');
    expect(prisma.message.create).toHaveBeenCalledWith({ data: dto });
  });
});
