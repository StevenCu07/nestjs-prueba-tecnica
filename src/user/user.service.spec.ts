import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { CreateUserDto } from './dto/create-user.dto';

describe('UserService', () => {
  let service: UserService;
  let prisma: DeepMockProxy<PrismaService>;

  beforeEach(async () => {
    prisma = mockDeep<PrismaService>();

    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, { provide: PrismaService, useValue: prisma }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  afterEach(() => jest.clearAllMocks());

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('crea un usuario', async () => {
    const dto: CreateUserDto = { name: 'Test', email: 'test@mail.com' };
    prisma.user.create.mockResolvedValue({ id: 1, ...dto });

    const result = await service.create(dto);

    expect(result).toEqual({ id: 1, ...dto });

    // ✅ Verificación estricta sin unbound-method
    const callArgs = prisma.user.create.mock.calls[0][0];
    expect(callArgs).toEqual({ data: dto });
  });

  it('retorna los mensajes del usuario', async () => {
    const expectedMessages = [{ id: 1, content: 'msg1', createdAt: new Date(), userId: 1 }];

    prisma.user.findUnique.mockResolvedValue({
      id: 1,
      name: 'Test',
      email: 'test@mail.com',
      messages: expectedMessages,
    } as any);

    const result = await service.getUserMessages(1);

    expect(result).toHaveProperty('messages');

    const callArgs = prisma.user.findUnique.mock.calls[0][0];
    expect(callArgs).toEqual({
      where: { id: 1 },
      include: { messages: true },
    });
  });
});
