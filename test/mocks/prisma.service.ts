import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

export const mockPrismaService: DeepMockProxy<PrismaClient> = mockDeep<PrismaClient>();
