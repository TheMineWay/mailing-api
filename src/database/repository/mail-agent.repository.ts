import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MailAgentRepository {
  constructor(private readonly databaseService: PrismaService) {}

  async findAllIncludingMailServices() {
    return await this.databaseService.mailAgents.findMany({
      include: {
        MailService: true,
      },
    });
  }
}
