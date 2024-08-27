import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { AlunoService } from './alunos/application/aluno.service';
import { AlunoModule } from './alunos/application/aluno.module';
import { AlunoController } from './alunos/presenter/http/alunos.controller';
import { AppController } from './app.controller';

@Module({
  imports: [AlunoModule],
  controllers: [AppController, AlunoController],
  providers: [AppService, AlunoService],
})
export class AppModule {}
