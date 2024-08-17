import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlunosController } from './alunos/alunos.controller';
import { AlunosModule } from './alunos/alunos.module';

@Module({
  imports: [AlunosModule],
  controllers: [AppController, AlunosController],
  providers: [AppService],
})
export class AppModule {}
