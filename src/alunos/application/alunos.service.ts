import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateAlunoDto } from '../presenter/http/dto/create-aluno.dto';
import { AlunosRepository } from '../repository/alunos.repository';
import { Alunos } from '../domain/aluno';
import { CreateAlunoCommand } from './commands/create-aluno-command';

@Injectable()
export class AlunosService {
  constructor(private readonly alunosRepository: AlunosRepository) {}

  cadastrar(createAlunoDto: CreateAlunoCommand) {
    const anoAtual = new Date().getFullYear();
    //const idade = anoAtual - createAlunoDto.anoNascimento;
    const IDADE_MIN_CADASTRO = 16;
    //if (idade <= IDADE_MIN_CADASTRO) {
    //  throw new ForbiddenException('A idade miníma para cadastro é 16 anos. ');
    //}
    // regras de negocio
    // verificar se temos outro aluno com o mesmo email
    // lista de alunos, e verifica se tem algum com o mesmo email, se tiver, sera lançada uma excessão.
    //const alunoExistente = this.alunosRepository.buscarPorEmail();
    const aluno = new Alunos(
      createAlunoDto.nome,
      createAlunoDto.endereco,
      createAlunoDto.email,
      createAlunoDto.telefone,
    );
    return this.alunosRepository.salvar(aluno);
  }
}
