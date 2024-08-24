import { Module } from '@nestjs/common';
import { AlunosController } from '../presenter/http/alunos.controller';
import { AlunosService } from './alunos.service';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService],
})
export class AlunosModule {}
