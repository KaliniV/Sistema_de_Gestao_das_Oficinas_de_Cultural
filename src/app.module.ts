import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { AlunosService } from './alunos/application/alunos.service';
import { AlunosModule } from './alunos/application/alunos.module';
import { AlunosController } from './alunos/presenter/http/alunos.controller';
import { AppController } from './app.controller';

@Module({
  imports: [AlunosModule],
  controllers: [AppController, AlunosController],
  providers: [AppService, AlunosService],
})
export class AppModule {}
