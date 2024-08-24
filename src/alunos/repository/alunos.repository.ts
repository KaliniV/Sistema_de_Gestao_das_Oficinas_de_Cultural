import { Injectable } from '@nestjs/common';
import { Alunos } from '../domain/aluno';
import { uuid } from 'uuidv4';
@Injectable()
export class AlunosRepository {
  // persisitir na memoria
  //readonly => ...  proteção adicional
  alunos: Alunos[] = [];
  salvar(aluno: Alunos): void {
    aluno.id = uuid();
    this.alunos.push(aluno);
    console.log(`Salvando aluno ${aluno.nome}`);
  }
}
